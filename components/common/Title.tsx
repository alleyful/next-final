import styles from '@/styles/components/Title.module.css';

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={styles.title}>
      <span>{children}</span>
    </h1>
  );
}
