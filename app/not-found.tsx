import Link from 'next/link';
import styles from '@/styles/not-found.module.css';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container>
      <div className={styles.notFound}>
        <h1>404</h1>

        <p>The page you are looking for does not exist.</p>

        <Link href='/' className={styles.homeButton}>
          Back to Home
        </Link>
      </div>
    </Container>
  );
}
