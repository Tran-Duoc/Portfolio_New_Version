import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

const Skills = React.lazy(() => import('./pages/Skills'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

const Project = React.lazy(() => import('./pages/Project'));

function App() {
  return (
    <MainLayout>
      <HomePage />
      <AboutPage />
      <Skills />
      <Project />
    </MainLayout>
  );
}

export default App;
