from pathlib import Path
from PIL import Image, ImageSequence
import logging
import os

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s: %(message)s'
)
logger = logging.getLogger(__name__)

# Constants
SOURCE_TEAM_DIR = Path(__file__).parent / "team-images"
OUTPUT_TEAM_DIR = Path(__file__).parent.parent / "public/images/team"

class TeamImageProcessor:
    """
    Handles processing of team member images: resizing, converting to web-optimized formats.
    Supports static images (JPG, PNG, WebP) and animated GIFs.
    Adapted from create_render_map_v2.py
    """
    def __init__(self, img_path: Path):
        self.img_path = img_path

    @staticmethod
    def mkdir(path: Path) -> None:
        if not path.exists():
            path.mkdir(parents=True, exist_ok=True)

    def get_output_path(self, is_gif: bool = False) -> Path:
        # Standardize naming: MP_Filename
        name = self.img_path.stem
        if not name.startswith("MP_"):
            name = f"MP_{name}"
        
        # Clean up spaces/hyphens
        name = name.replace(" ", "_").replace("-", "_")
        extension = ".gif" if is_gif else ".jpg"
        return OUTPUT_TEAM_DIR / f"{name}{extension}"

    def process(self, max_width: int = 500) -> Path:
        """
        Reads, resizes and saves the image as an optimized format.
        """
        is_gif = self.img_path.suffix.lower() == ".gif"
        target_path = self.get_output_path(is_gif)
        self.mkdir(target_path.parent)

        try:
            with Image.open(self.img_path) as img:
                # Check if it's an animated GIF
                is_animated = getattr(img, "is_animated", False)

                if is_gif and is_animated:
                    logger.info(f"Processing animated GIF: {self.img_path.name}")
                    
                    # Extract frames and resize them
                    frames = []
                    for frame in ImageSequence.Iterator(img):
                        f = frame.copy()
                        if f.width > max_width:
                            aspect_ratio = f.width / f.height
                            new_width = max_width
                            new_height = int(new_width / aspect_ratio)
                            f = f.resize((new_width, new_height), Image.Resampling.LANCZOS)
                        frames.append(f)
                    
                    # Save the animated GIF
                    frames[0].save(
                        target_path,
                        save_all=True,
                        append_images=frames[1:],
                        optimize=True,
                        duration=img.info.get('duration', 100),
                        loop=img.info.get('loop', 0)
                    )
                    logger.info(f"Saved animated GIF: {target_path.name}")
                else:
                    # Static image processing
                    if img.mode in ("RGBA", "P") and not is_gif:
                        img = img.convert("RGB")
                    
                    if img.width > max_width:
                        aspect_ratio = img.width / img.height
                        new_width = max_width
                        new_height = int(new_width / aspect_ratio)
                        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                        logger.info(f"Resized {self.img_path.name} to {new_width}x{new_height}")

                    if is_gif:
                        img.save(target_path, optimize=True)
                    else:
                        img.save(target_path, "JPEG", quality=85, optimize=True)
                    
                    logger.info(f"Saved: {target_path.name}")
                
                return target_path

        except Exception as e:
            logger.error(f"Error processing {self.img_path.name}: {e}")
            return None

def main():
    if not SOURCE_TEAM_DIR.exists():
        logger.warning(f"Source directory not found: {SOURCE_TEAM_DIR}")
        SOURCE_TEAM_DIR.mkdir(parents=True, exist_ok=True)
        logger.info(f"Created {SOURCE_TEAM_DIR}. Place high-res team images there.")
        return

    supported_extensions = {'.png', '.jpg', '.jpeg', '.webp', '.bmp', '.gif'}
    
    files = [f for f in SOURCE_TEAM_DIR.iterdir() if f.suffix.lower() in supported_extensions]
    
    if not files:
        logger.info("No images found to process.")
        return

    logger.info(f"Found {len(files)} images. Starting processing...")
    
    for img_file in files:
        processor = TeamImageProcessor(img_file)
        processor.process()

    logger.info("Processing complete.")

if __name__ == "__main__":
    main()
