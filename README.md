# Frostlight Studios Website V2

The V2 of the Frostlight Studios website, built with [SolidJS](https://www.solidjs.com/) and [SolidStart](https://start.solidjs.com/), is a modern and interactive web experience designed to replace the previous static HTML version. 

The decision to switch to SolidJS was driven by the need for better maintainability while preserving or enhancing performance. The new modular architecture allows for easy expansion and updates to individual sections without compromising the site's overall cohesion. By using individual components for elements like the Header and Footer, we ensure consistency across all pages and significantly reduce the time required to add new content.

## 🚀 Features

- **Blazing Fast:** Built with SolidJS for fine-grained reactivity and minimal overhead.
- **Modern Tech Stack:** Utilizes SolidStart for server-side rendering (SSR) and routing.
- **Modular Design:** Highly organized component structure for easy maintenance and scalability.
- **Dynamic Content:** Data-driven components (e.g., Team section) using JSON data.
- **Responsive Styling:** Styled with SCSS using a structured approach for consistent design.

## 🛠️ Tech Stack

- **Framework:** [SolidJS](https://www.solidjs.com/)
- **Meta-framework:** [SolidStart](https://start.solidjs.com/)
- **Bundler:** [Vinxi](https://github.com/nksaraf/vinxi)
- **Styling:** [SCSS](https://sass-lang.com/)
- **Language:** JavaScript (ESM)

## 🏗️ Getting Started

### Prerequisites

- **Node.js:** version 22 or higher is required (as specified in `package.json`).
- **npm** or your preferred package manager.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/frostlight-portfolio-and-blog.git
   cd frostlight-portfolio-and-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3232`.

To run with host access enabled:
```bash
npm run devh
```

### Building for Production

To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run start
```

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI components
│   │   └── index-sections/ # Specific sections for the landing page
│   ├── jsondata/         # Static data (e.g., team members)
│   ├── routes/           # File-based routing (SolidStart)
│   ├── styles/           # SCSS stylesheets
│   ├── app.jsx           # Main application entry point
│   └── app.scss          # Global styles
├── public/               # Static assets (images, icons, etc.)
├── app.config.js         # SolidStart/Vinxi configuration
└── package.json          # Project dependencies and scripts
```

## 🤝 Contributing

We welcome contributions! To maintain code quality and consistency, please follow these guidelines:

1. **Branching Strategy:** Create a new branch for each feature or bug fix (e.g., `feat/add-blog-section` or `fix/header-mobile-view`).
2. **Coding Standards:**
   - Follow the existing code style.
   - Use descriptive names for variables, functions, and components.
   - Use standard HTML attributes (e.g., use `class` instead of `className` as per SolidJS conventions).
3. **Styling Guidelines:**
   - Use SCSS for all styles.
   - Prefer HSL for color definitions.
   - Keep styles modular and avoid global overrides where possible.
4. **Pull Requests:**
   - Ensure your code builds successfully (`npm run build`).
   - Provide a clear description of your changes in the PR.
   - Link any related issues.

## 📄 License

[Insert License Type, e.g., MIT]

---
*Created and maintained by Sakura Sedaia.*