# Abhinaw | MERN Stack Developer Portfolio

Welcome to my personal developer portfolio! This is a visually stunning, responsive React application built to showcase my skills, projects, and passion for web development. 

The portfolio is designed with a premium dark-themed aesthetic, utilizing glassmorphism, dynamic gradients, and smooth scroll animations to create an engaging user experience without relying on heavy external CSS libraries.

## 🚀 Live Demo

*(You can add your live deployment URL here once hosted, e.g., on Vercel or Netlify)*
[View Live Site](#)

## ✨ Features

- **Modern Tech Stack:** Built with React (via Vite) for a lightning-fast development experience.
- **Premium UI/UX:** Dark mode design, neon accents, and fully responsive layouts across all devices.
- **Vanilla CSS Architecture:** Built from the ground up using raw CSS variables, flexbox, and CSS Grids to maintain high performance.
- **Scroll Animations:** Utilizes the native Intersection Observer API to trigger smooth fade-in animations as the user scrolls.
- **Five Distinct Sections:**
  - **Hero:** Impactful introduction with a dynamic profile card.
  - **About:** Details regarding my B.Tech education and developer journey.
  - **Skills:** Categorized technical expertise (Frontend, Backend, Database, Tools).
  - **Projects:** Interactive cards showcasing full-stack MERN work.
  - **Contact:** Clean communication form with embedded social links.

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Custom Vanilla CSS (index.css)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

## 💻 Getting Started locally

If you'd like to run this portfolio on your local machine, follow these steps:

### Prerequisites

Ensure you have Node.js installed on your computer.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhinaw-7/Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to the provided `localhost` URL (typically `http://localhost:5173/`).

## 📁 Project Structure

```text
src/
├── assets/          # Static assets (images, pdfs)
├── components/      # Reusable React components
│   ├── About.jsx    # About Section
│   ├── Contact.jsx  # Contact Section
│   ├── Footer.jsx   # Footer with social links
│   ├── Hero.jsx     # Landing view & intro
│   ├── Navbar.jsx   # Sticky navigation menu
│   ├── Projects.jsx # Project showcase gallery
│   └── Skills.jsx   # Technical skills grid
├── App.jsx          # Root application component
├── index.css        # Global CSS variables, animations, and typography
└── main.jsx         # React application entry point
```

## 📝 Customization

To make this portfolio your own:
- Replace `public/profile.png` with your own image.
- Update your resume in the `public` folder and link it in `Hero.jsx`.
- Modify the `skillsData` array in `Skills.jsx` to reflect your tech stack.
- Update the `projectList` array in `Projects.jsx` with your actual repositories.
- Configure action endpoints in the `Contact.jsx` form to receive emails (via Formspree, EmailJS, etc.).

## 🤝 Let's Connect

- [LinkedIn](https://linkedin.com/in/your-profile)
- [GitHub](https://github.com/Abhinaw-7)

---
*Focus on writing clean code and creating beautiful designs.*
