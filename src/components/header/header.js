'use client';
import { FaBars } from 'react-icons/fa';
import styles from './header.module.css';
import { useState } from 'react';
import Link from 'next/link';

const Header = ({ galleries }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.branding}>Dashboard</h1>
        <FaBars className={styles.faBars} onClick={handleClick} />
      </div>
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {galleries.map((gallery) => (
            <li key={gallery._id} className={styles.navItem}>
              <Link href={`?gallery=${gallery.name}`} key={gallery._id} className={styles.navLink}>
                {gallery.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Header;
