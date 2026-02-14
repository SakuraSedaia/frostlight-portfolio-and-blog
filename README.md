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

## 📂 Project Structure

```text
├── src/
│   ├── components/       # Reusable UI components
│   ├── sections/         # Page-specific sections
│   ├── jsondata/         # Static data (e.g., team members)
│   ├── routes/           # File-based routing (SolidStart)
│   ├── styles/           # SCSS partials (mirrors components/sections/pages folders)
│   ├── app.jsx           # Main application entry point
│   └── app.scss          # Main SCSS entry point
├── public/               # Static assets (images, icons, etc.)
├── utils/                # Helper scripts for automation
│   └── process-team-images.py # Script for standardizing team images
├── app.config.js         # SolidStart/Vinxi configuration
└── package.json          # Project dependencies and scripts
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to set up the project and our coding standards.

## 📄 License

[Insert License Type, e.g., MIT]

---
*Created and maintained by Sakura Sedaia.*