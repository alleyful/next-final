import styles from '@/styles/components/Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner} />
      <p>Loading...</p>
    </div>
  );
}
