import styles from '@/styles/components/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; {new Date().getFullYear()} NYT Bestsellers. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
