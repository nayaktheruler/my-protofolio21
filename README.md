# 3D Interactive Developer Portfolio

A modern, highly interactive personal portfolio built with React, Three.js, and Tailwind CSS. This project features immersive 3D scenes, smooth animations, and a futuristic user interface, including a terminal modal and an AI assistant component.

## 🚀 Features

- **Immersive 3D Experience**: Utilizes `three.js`, `@react-three/fiber`, and `@react-three/drei` for stunning 3D hero scenes (`Hero3DScene`) and interactive visualizations (`NetworkSphere`).
- **Fluid Animations**: Smooth page transitions and component-level animations powered by `framer-motion`.
- **Modern UI/UX**: Fully responsive and highly customizable styling using `tailwindcss`.
- **Unique Interactive Components**:
  - 🤖 **AI Assistant**: A built-in chat or AI interaction interface (`AIAssistant`).
  - 💻 **Terminal Modal**: A retro-futuristic terminal-style interaction modal (`TerminalModal`).
  - 📊 **Dashboard Layout**: Information is organized into dynamic columns (About, Achievements, Education & Skills, Projects).
- **Fast Performance**: Built on `vite` for lightning-fast Hot Module Replacement (HMR) and optimized production builds.

## 🛠️ Tech Stack

- **Core**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
src/
├── components/
│   ├── AIAssistant.jsx           # AI Chat/Assistant interface
│   ├── AboutColumn.jsx           # Personal information section
│   ├── AchievementsColumn.jsx    # Awards and milestones
│   ├── Dashboard.jsx             # Main layout orchestrator
│   ├── EducationSkillsColumn.jsx # Skills and education history
│   ├── Footer.jsx                # Page footer
│   ├── Hero3DScene.jsx           # 3D canvas for the hero section
│   ├── HeroSection.jsx           # Main landing section
│   ├── NetworkSphere.jsx         # 3D network visualization element
│   ├── ProjectsColumn.jsx        # Portfolio projects showcase
│   ├── TerminalModal.jsx         # Interactive terminal UI
│   └── TopNav.jsx                # Top navigation bar
├── index.css                     # Global styles & Tailwind directives
└── main.jsx                      # Application entry point
```

## 🏁 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port provided in your terminal).

## 📦 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Bundles the app into static files for production.
- `npm run preview`: Bootstraps a local web server to serve the production build.

## 📄 License

This project is open-source and available under the standard MIT License.
