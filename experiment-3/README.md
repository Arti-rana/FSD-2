# Implement Routing in SPA

This experiment focuses on implementing routing in a Single Page Application (SPA) using React and the react-router-dom package. The goal was to build a navigation system where different components are displayed based on the URL without page reloads.

## Routing in SPA
Rounting means changing pages in a website without reloading the whole page.
In SPA ,There is only one HTML page, routing just swaps components.
Like in this experiment : /   → shows Home component  
/about   → shows About component  
/contact → shows Profile component  


### Components Used from react-router-dom:

- **BrowserRouter** - Wraps the entire application to enable routing functionality
- **Routes** - Container that matches the URL to the correct route
- **Route** - Defines individual routes and their corresponding components
- **Link** - Creates navigation links between different routes without full page refreshes

---

## Installation and Running

### Install Dependencies:

```bash
npm install
```

### Run Development Server:

```bash
npm run dev
```

The application will run on http://localhost:5173

### Build for Production:

```bash
npm run build
```

This creates an optimized dist folder ready for deployment.

### Preview Production Build:

```bash
npm run preview
```

## Learning Outcomes

1. How to implement client-side routing using BrowserRouter, Routes, and Route components
2. How to create navigation links without page reloads using the Link component
3. How to organize components in a Single Page Application structure
4. How to build and deploy React applications using Vite and Netlify
5. How to use Git and GitHub for version control
