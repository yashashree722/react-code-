import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lightModeStyles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    background: '#fff',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    background: '#333',
    color: '#fff',
    padding: '1.5rem',
    borderRadius: '8px 8px 0 0',
  },
  section: {
    marginBottom: '1.5rem',
  },
  aboutMe: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
  projects: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  projectItem: {
    background: '#f4f4f4',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '8px',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const darkModeStyles = {
  ...lightModeStyles,
  container: {
    ...lightModeStyles.container,
    background: '#222', // Change the background color for dark mode
    color: '#fff',
  },
  projectItem: {
    ...lightModeStyles.projectItem,
    background: '#555',
    color: '#fff',
  },
};

const NAME = 'Your Name';
const ABOUT_ME =
  'I am a passionate web developer with a focus on creating delightful user experiences. My skills include React, HTML, CSS, and more.';
const PROJECTS = ['Project 1 - Description', 'Project 2 - Description']; // Add more projects as needed
const EMAIL = 'your.email@example.com';
const LINKEDIN_URL = 'linkedin.com/in/yourprofile';
const WORK_EXPERIENCE = 'Fullstack Developer at Agivant Technologies';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Set dark mode as default

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentStyles = isDarkMode ? darkModeStyles : lightModeStyles;

  return (
    <div style={{ background: isDarkMode ? '#111' : '#fff', minHeight: '100vh' }}>
      <div style={currentStyles.container}>
        <header style={currentStyles.header}>
          <h1>{NAME}</h1>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </header>
        <section style={currentStyles.section}>
          <h2>About Me</h2>
          <p style={currentStyles.aboutMe}>{ABOUT_ME}</p>
        </section>
        <section style={currentStyles.section}>
          <h2>Projects</h2>
          <ul style={currentStyles.projects}>
            {PROJECTS.map((project, index) => (
              <li key={index} style={currentStyles.projectItem}>
                {project}
              </li>
            ))}
          </ul>
        </section>
        <section style={currentStyles.section}>
          <h2>Work Experience</h2>
          <p>{WORK_EXPERIENCE}</p>
        </section>
        <section style={currentStyles.section}>
          <h2>Contact</h2>
          <div style={currentStyles.contact}>
            <p>Email: {EMAIL}</p>
            <p>LinkedIn: {LINKEDIN_URL}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
