# Hire Dee Website

A professional portfolio website showcasing business analysis and technical expertise.

## Local Development

To view the site locally, you need to run a local web server due to browser security restrictions with loading local files.

### Option 1: Python (Recommended)

```bash
# Python 3
python -m http.server 5000

# Then open: http://localhost:5000
```

### Option 2: Node.js

```bash
npx http-server -p 5000

# Then open: http://localhost:5000
```

### Option 3: VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

## Project Structure

```
hire-dee-site/
├── index.html              # Homepage
├── skills.html             # Skills overview
├── projects.html           # Projects listing
├── project-*.html          # Individual project pages
├── styles.css              # Shared stylesheet
├── includes.js             # Header/footer loader
├── partials/
│   ├── header.html         # Shared header
│   └── footer.html         # Shared footer
└── README.md               # This file
```

## Deployment

This site is designed to work on GitHub Pages without any build step.
