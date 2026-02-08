### Frontend & Accessibility
- Use semantic HTML elements (e.g., `<main>`, `<section>`, `<nav>`) and follow WCAG guidelines.
- Use `alt` for media and `title` for tooltips; ensure all components are accessible.
- SolidJS: Always use `class` instead of `className` and follow SolidJS naming/best practices.
- SolidJS: Always wrap HTML attributes in curly braces.
- Modular JSX: Wrap page sections in their own components; use `<section>` with unique IDs.

### SolidStart & Routing
- Use `<A>` from `@solidjs/router` for all internal links to maintain SPA navigation.
- Wrap page components/routes in `Suspense` and `ErrorBoundary`.
- Use directory-based parameterized routing (e.g., `src/routes/[item].jsx`) for cleaner structure.
- Implement loading fallbacks and "not found"/error states for dynamic routes.
- Match dynamic content (e.g., `import.meta.glob`) using robust, case-insensitive logic.
- Avoid hardcoding the `url` prop in the `Router` unless required for SSR state.

### Styling (SCSS)
- Use SCSS syntax with proper indentation and HSL for all colors.
- Use `rem` and `em` for sizing and typography; avoid `pt` (except for print).
- Note: `--font-size-heading` and `--font-size-heading-2` are set higher than standard to compensate for the "Jersey 15" font's smaller visual scale.
- Use `em` for @media queries to ensure better accessibility and scaling.
- Use `!important` sparingly and only when necessary.

### File & Path Management
- Use lowercase, hyphenated naming for files/folders; avoid spaces or special characters.
- All imports must strictly match the lowercase filename casing.
- Use forward slashes `/` for all paths.
- Component references: Use relative paths from `src` (root).
- Images: Use root-relative paths for assets in the `public` directory.
- Ignore `.hidden` unless directly referenced.

### Project Resources & Libraries
- External Resources: Download fonts/images locally (e.g., `public/fonts`) instead of using CDNs.
- Libraries: Use only when necessary, ensure proper licensing, and document usage/modifications.
- Scripts: Store automation/helper scripts in `utils` and ensure they are tested.

### System & Operations
- Commands: Automate multiple commands via scripts/batch files; test before use.
- Compression: Use 7zip (`.7z` format) in the `.compressed` folder.
