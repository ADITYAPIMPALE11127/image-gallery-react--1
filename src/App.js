import React from 'react';
import Search from './components/search/Search';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { animated, useSpring } from 'react-spring';
import { GiRabbitHead } from "react-icons/gi";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
});

const styles = {
  appContainer: {
    backgroundColor: '#000',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative',
    paddingBottom: '80px',
    background: 'linear-gradient(145deg, #0a2e4e, #0e3a5f)',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
    '@media (max-width: 768px)': {
      padding: '10px',
      paddingBottom: '70px',
    },
  },
  headerTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#fff',
    cursor: 'pointer',
    userSelect: 'none',
    '@media (max-width: 1200px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width: 992px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 576px)': {
      fontSize: '1.25rem',
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#80FF00',
    borderRadius: 8,
    position: 'relative', // Changed to relative
    width: '100%',
    padding: '10px 0',
    marginTop: '20px', // Adjust margin as needed
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative', // Ensure relative positioning on smaller screens
      marginTop: '10px',
    },
  },
  footerText: {
    display: 'flex',
    alignItems: 'center',
  },
  footerItem: {
    marginLeft: '10px',
  },
  footerLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    '@media (max-width: 992px)': {
      fontSize: 12,
    },
    '@media (max-width: 768px)': {
      fontSize: 10,
    },
    '@media (max-width: 576px)': {
      fontSize: 8,
    },
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    '@media (max-width: 768px)': {
      marginTop: '10px',
    },
  },
};

function App() {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <div style={styles.appContainer}>
      <header className="App-header">
        <animated.div style={{ ...styles.headerTitle, ...props, userSelect:'none' }}>
          <Typography variant="h1" color="primary" gutterBottom>
            <span style={{ color: '#80FF00' }}>S</span>nap<GiRabbitHead />
          </Typography>
        </animated.div>
      </header>

      <ThemeProvider theme={theme}>
        <div style={styles.searchContainer}>
          <Search />
        </div>
      </ThemeProvider>

      <footer style={styles.footer}>
        <Typography variant="body2" color="textSecondary" style={styles.footerText}>
          <div style={styles.footerItem}>
            <a
              href="https://aditya-pimpale-portfolio.wuaze.com/?i=1"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.footerLink}
            >
              Aditya Pimpale
            </a>
          </div>
          <div style={{ ...styles.footerItem, fontWeight: 'bold', fontSize: 14, color: 'black' }}>&copy;</div>
          <div style={{ ...styles.footerItem, fontWeight: 'bold', fontSize: 14, color: 'black' }}>2024</div>
        </Typography>
      </footer>
    </div>
  );
}

export default App;
