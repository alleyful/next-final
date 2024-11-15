'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href='/' className={styles.logo}>
          📚 NYT Bestsellers
        </Link>
        <div className={styles.links}>
          <Link href='/' className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
          <Link
            href='/about'
            className={pathname === '/about' ? styles.active : ''}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
