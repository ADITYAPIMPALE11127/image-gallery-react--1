import React from 'react';
import Search from './components/search/Search';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { animated, useSpring } from 'react-spring'; // Import animated and useSpring from react-spring
import { GiRabbitHead } from "react-icons/gi";
// Define your custom theme if needed
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Vibrant blue color
    },
  },
});

const styles = {
  appContainer: {
    backgroundColor: '#000',
    minHeight: '100vh',
    padding: '20px',
    position: 'relative', // Ensure footer positioning relative to this container
    paddingBottom: '80px', // Add padding bottom to accommodate the footer
    background: 'linear-gradient(145deg, #0a2e4e, #0e3a5f)',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)', // Adjust the shadow for desired effect
  },
  headerTitle: {
    fontSize: '3rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#fff',
    cursor: 'pointer',
    userSelect: 'none', // Disable text selection
  },
  footer: {
    display: 'flex', // Display children in a row
    justifyContent: 'center', // Center align horizontally
    alignItems: 'center', // Center align vertically
    textAlign: 'center',
    backgroundColor: '#80FF00',
    borderRadius: 8,
    position: 'absolute',
    bottom: '0', // Stick footer to the bottom of the viewport
    width: '90%', // Full width
    padding: '10px 0', // Adjust padding as needed
    marginLeft: 40,
  },
  footerText: {
    display: 'flex', // Display items in a row
    alignItems: 'center', // Center align vertically
  },
  footerItem: {
    marginLeft: '10px', // Add space between items
  },
  footerLink: {
    textDecoration: 'none', // Remove underline from the link
    color: 'black', // Use the default text color
    fontWeight: 'bold', // Apply bold font weight
    fontSize: 14, // Adjust font size
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
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
        <animated.div style={{ ...styles.headerTitle, ...props,userSelect:'none' }}>
          <Typography variant="h1" color="primary" gutterBottom>
          <span style={{ color: '#80FF00' }}>S</span>nap<span style={{ color: '#80FF00' }}>S</span>earch <GiRabbitHead />
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
              style={styles.footerLink} // Apply style to remove underline
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
