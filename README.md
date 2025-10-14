# Portfolio Website

A modern, responsive portfolio website built with React showcasing my professional experience, skills, projects, and education.

## 🌐 Live Demo

Visit the live website: [https://shankarmadeshvaran.github.io](https://shankarmadeshvaran.github.io)

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive Animations**: Smooth fade-in animations using react-reveal
- **Dynamic Content**: Data-driven components fetching content from JSON endpoints
- **Modern UI**: Clean, professional design with Bootstrap styling
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **React Router 6.20.1** - Client-side routing
- **React Bootstrap 2.9.1** - UI components and responsive grid system
- **Styled Components 6.1.6** - CSS-in-JS styling solution

### Animations & UI
- **React Reveal 1.2.2** - Fade-in animations and transitions
- **Typewriter Effect 2.21.0** - Dynamic typing animations
- **React Icons 5.5.0** - Icon library
- **React Dark Mode Toggle** - Theme switching functionality

### Development Tools
- **ESLint** - Code linting with Airbnb configuration
- **React Scripts 5.0.1** - Build tools and development server

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.1",
  "react-bootstrap": "^2.9.1",
  "bootstrap": "^5.3.2",
  "styled-components": "^6.1.6",
  "react-reveal": "^1.2.2",
  "typewriter-effect": "^2.21.0",
  "react-icons": "^5.5.0",
  "use-dark-mode": "^2.3.1",
  "react-markdown": "^9.0.1",
  "react-chrono": "^1.20.0"
}
```

### Development Dependencies
```json
{
  "eslint": "^8.54.0",
  "eslint-config-airbnb": "^19.0.4",
  "gh-pages": "^6.1.0"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shankarmadeshvaran/shankarmadeshvaran.github.io.git
   cd shankarmadeshvaran.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   > Note: We use `--legacy-peer-deps` to resolve React 18 compatibility issues with some dependencies.

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌍 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment
- **Trigger**: Every push to the `main` branch
- **Process**: GitHub Actions workflow builds and deploys automatically
- **Live URL**: [https://shankarmadeshvaran.github.io](https://shankarmadeshvaran.github.io)

### Deployment Workflow
The `.github/workflows/deploy.yml` file handles:
1. Installing dependencies with `--legacy-peer-deps`
2. Building the React application
3. Deploying to the `gh-pages` branch
4. Serving the site via GitHub Pages

## 🔧 Available Scripts

- `npm start` - Runs the development server
- `npm run build` - Creates production build
- `npm test` - Runs test suite
- `npm run deploy` - Manual deployment to GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📧 Contact

**Shankar A M**

### 🌐 Connect with me:
- **🔗 Portfolio**: [https://shankarmadeshvaran.github.io](https://shankarmadeshvaran.github.io)
- **💼 LinkedIn**: [https://linkedin.com/in/shankar-mathesh](https://linkedin.com/in/shankar-mathesh)
- **👨‍💻 GitHub**: [https://github.com/shankarmadeshvaran](https://github.com/shankarmadeshvaran)
- **🐦 Twitter**: [https://twitter.com/devinmaking](https://twitter.com/devinmaking)
- **📝 Medium**: [https://shankarmadeshvaran.medium.com](https://shankarmadeshvaran.medium.com)

---