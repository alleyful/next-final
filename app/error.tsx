'use client';

import styles from '@/styles/error.module.css';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={styles.errorContainer}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} className={styles.retryButton}>
        Try again
      </button>
    </div>
  );
}
