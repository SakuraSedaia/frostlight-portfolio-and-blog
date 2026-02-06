### SolidJS HTML Attributes
- When generating HTML elements, always use the `class` attribute instead of React's `className`. SolidJS follows standard HTML attribute naming for classes.

### Styling
- This project is styled using SCSS.
- Any modifications to the stylesheets must be done using the SCSS syntax.
- Any colors used must be formatted using hsl
- If a provided color is not hsl, it must be converted to hsl.
- Use the `!important` rule sparingly and only when necessary.

### Ignore Files
- Unless directly referenced in the request, ignore any files in `.hidden`

### Compressing Files
- Unless otherwise noted, use 7zip to compress files using the installed binary
- Compress all files into the 7z format
- Unless otherwise noted, place all compressed files in the `.compressed` folder

### File Naming Conventions
- Use descriptive and consistent naming conventions for files and folders.
- Avoid using spaces or special characters in file and folder names.
- Use lowercase letters and hyphens for file and folder names.