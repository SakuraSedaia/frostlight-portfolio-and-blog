### Project Information: Frostlight Studios

#### Project Mission
- Build and expand the Frostlight Studios website, a modern portfolio and blog.
- Transition from static HTML to a modular, high-performance SolidStart + SCSS architecture.
- Use Python scripts in `utils/` to automate asset optimization (e.g., team member images).

#### Project Structure (Key Paths)
- `!/src/`: Main application source code.
- `!/src/components/`: Reusable UI components.
- `!/src/sections/`: Page-specific sections (e.g., `!/src/sections/index/`).
- `!/src/jsondata/`: JSON data files for dynamic content.
- `!/src/styles/`: Global and component-specific SCSS files.
- `!/public/`: Static assets (images, icons).
- `!/utils/`: Helper scripts for automation.
- `!/.junie/`: Configuration and guidelines for AI agents.
- `!/.logs/`: Chat session history.
- `$PROJECT_NAME/`: Reference to other sibling projects in `WebstormProjects/`.
- `!/.junie/siblings/`: Sister project documentation (excluded from VCS).

#### Automation Pipeline
- **Team Image Processing**:
    - Script: `utils/process-team-images.py`.
    - Function: Processes high-res images from `utils/team-images/` to `public/images/team/`.
    - Features: Standardizes naming (`MP_Name.jpg/gif`), resizes (max-width 500px), converts to optimized JPEG (quality 85) or animated GIF.
- **Rules**:
    - **Filename format**: `Name.ext` (output becomes `MP_Name.ext`).
    - **Image processing**: Uses PIL (Pillow) for resizing and optimization.
    - **Path handling**: Uses `pathlib.Path` for filesystem operations.

#### Project-Specific Styling
- Global layout styles: `src/styles/_frostlight-design.scss`.
- Component styles: Associated `_custom.scss` file.

#### Project-Specific Routing
- Example: `src/routes/projects/[item].jsx`.

#### Path Aliases
- Uses `~/` as a shortcut to the `src/` directory.
