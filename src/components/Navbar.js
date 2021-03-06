import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <svg width="21" height="24" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.6417 18.8853H29.0515L18.0352 48H30.6253L41.6417 18.8853Z" fill="#2196F3" />
        <path d="M32.6241 9.44263H20.034L9.01758 38.5574H21.6077L32.6241 9.44263Z" fill="#1E88E5" />
        <path d="M23.6066 0H11.0164L0 29.1148H12.5902L23.6066 0Z" fill="#1976D2" />
      </svg>
      <h1>CV Resume Builder</h1>
    </nav>
  );
};

export default Navbar;
