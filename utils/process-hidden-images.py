from pathlib import Path
from PIL import Image, ImageSequence
import shutil
import logging
import os

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s: %(message)s'
)
logger = logging.getLogger(__name__)

# Constants
SOURCE_DIR = Path(__file__).parent.parent / ".hidden" / "images"
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images"

class ImageProcessor:
    """
    Processes images from .hidden/images to public/images.
    - PNG -> Web-optimized JPG
    - GIF -> Optimized GIF
    - Icons/Vectors -> Copy as-is
    - Skips JPG if already exists
    """
    
    def __init__(self):
        self.quality = 85
        self.max_width = 1920 # Default max width for general images, can be adjusted

    def is_icon_or_vector(self, path: Path) -> bool:
        """Checks if the image is in an icon or vector directory."""
        parts = [p.lower() for p in path.parts]
        return "icons" in parts or "vectors" in parts or path.suffix.lower() == ".svg"

    def resize_image(self, img: Image.Image) -> Image.Image:
        """Resizes image if it exceeds max_width while maintaining aspect ratio."""
        if img.width > self.max_width:
            aspect_ratio = img.width / img.height
            new_width = self.max_width
            new_height = int(new_width / aspect_ratio)
            logger.info(f"Resizing from {img.width}x{img.height} to {new_width}x{new_height}")
            return img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        return img

    def process_gif(self, src: Path, dest: Path):
        """Optimizes GIF, preserving animation if present."""
        try:
            with Image.open(src) as img:
                is_animated = getattr(img, "is_animated", False)
                if is_animated:
                    frames = []
                    for frame in ImageSequence.Iterator(img):
                        frames.append(self.resize_image(frame.copy()))
                    
                    frames[0].save(
                        dest,
                        save_all=True,
                        append_images=frames[1:],
                        optimize=True,
                        duration=img.info.get('duration', 100),
                        loop=img.info.get('loop', 0)
                    )
                else:
                    img = self.resize_image(img)
                    img.save(dest, optimize=True)
            logger.info(f"Optimized GIF: {src.name}")
        except Exception as e:
            logger.error(f"Error processing GIF {src}: {e}")

    def process_optimized_png(self, src: Path, dest: Path):
        """Optimizes PNG while preserving transparency."""
        try:
            with Image.open(src) as img:
                img = self.resize_image(img)
                img.save(dest, "PNG", optimize=True)
            logger.info(f"Optimized PNG (transparency preserved): {src.name}")
        except Exception as e:
            logger.error(f"Error optimizing PNG {src}: {e}")

    def process_png_to_jpg(self, src: Path, dest: Path):
        """Converts PNG to web-optimized JPG."""
        if dest.exists():
            # Check if source is newer or if we should re-process? 
            # For now, follow "skip if exists" logic but we might need to overwrite if resizing is new.
            # However, issue description doesn't explicitly ask to re-process existing.
            # But since we are adding resizing, it's safer to check or just let it skip if already there.
            logger.info(f"Skipping {src.name}, JPG already exists.")
            return

        try:
            with Image.open(src) as img:
                img = self.resize_image(img)
                if img.mode in ("RGBA", "P"):
                    # Create white background for transparency
                    bg = Image.new("RGB", img.size, (255, 255, 255))
                    if img.mode == "RGBA":
                        bg.paste(img, mask=img.split()[3])
                    else:
                        bg.paste(img.convert("RGBA"), mask=img.convert("RGBA").split()[3])
                    img = bg
                elif img.mode != "RGB":
                    img = img.convert("RGB")
                
                img.save(dest, "JPEG", quality=self.quality, optimize=True)
            logger.info(f"Converted PNG to JPG: {src.name}")
        except Exception as e:
            logger.error(f"Error converting PNG {src}: {e}")

    def run(self):
        if not SOURCE_DIR.exists():
            logger.error(f"Source directory not found: {SOURCE_DIR}")
            return

        for src_path in SOURCE_DIR.rglob("*"):
            if not src_path.is_file():
                continue

            # Determine relative path and target destination
            rel_path = src_path.relative_to(SOURCE_DIR)
            
            if self.is_icon_or_vector(rel_path):
                dest_path = OUTPUT_DIR / rel_path
                dest_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(src_path, dest_path)
                logger.info(f"Copied icon/vector: {rel_path}")
                continue

            ext = src_path.suffix.lower()
            
            if ext == ".gif":
                dest_path = OUTPUT_DIR / rel_path
                dest_path.parent.mkdir(parents=True, exist_ok=True)
                self.process_gif(src_path, dest_path)
            
            elif ext == ".png":
                if src_path.name.startswith("pt_"):
                    dest_path = OUTPUT_DIR / rel_path
                    dest_path.parent.mkdir(parents=True, exist_ok=True)
                    self.process_optimized_png(src_path, dest_path)
                else:
                    dest_path = (OUTPUT_DIR / rel_path).with_suffix(".jpg")
                    dest_path.parent.mkdir(parents=True, exist_ok=True)
                    self.process_png_to_jpg(src_path, dest_path)

            elif ext in (".webp", ".bmp", ".tiff"):
                dest_path = (OUTPUT_DIR / rel_path).with_suffix(".jpg")
                dest_path.parent.mkdir(parents=True, exist_ok=True)
                self.process_png_to_jpg(src_path, dest_path)
                
            elif ext in (".jpg", ".jpeg"):
                dest_path = OUTPUT_DIR / rel_path
                if not dest_path.exists():
                    dest_path.parent.mkdir(parents=True, exist_ok=True)
                    # For existing JPGs, we just copy or we could optimize them too.
                    # User said "if JPG exists skip it" which implies we might be looking for output.
                    # Let's just copy and optimize them while we're at it.
                    try:
                        with Image.open(src_path) as img:
                            img = self.resize_image(img)
                            img.save(dest_path, "JPEG", quality=self.quality, optimize=True)
                        logger.info(f"Optimized existing JPG: {rel_path}")
                    except Exception as e:
                        logger.error(f"Error optimizing JPG {src_path}: {e}")
                else:
                    logger.info(f"Skipping JPG: {rel_path} (Already exists in output)")

def main():
    processor = ImageProcessor()
    processor.run()

if __name__ == "__main__":
    main()
