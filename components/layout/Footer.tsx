import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; {new Date().getFullYear()} NYT Bestsellers. All rights
          reserved.
        </p>
        <div className={styles.links}>
          <a
            href='https://developer.nytimes.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            NYT API
          </a>
          <span className={styles.separator}>|</span>
          <a
            href='https://github.com/your-username'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
