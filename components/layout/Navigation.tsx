'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import styles from '@/styles/components/Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href='/' className={styles.logo}>
          📚 NYT
        </Link>

        <div className={styles.links}>
          <Link
            href='/'
            className={
              pathname === '/' || pathname.includes('/list')
                ? styles.active
                : ''
            }
          >
            Bestsellers
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
