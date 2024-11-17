import { NoSymbolIcon } from '@/lib/utils/icons';
import styles from '@/styles/components/Nothing.module.css';

interface NothingProps {
  handleReset: () => void;
}

export default function Nothing({ handleReset }: NothingProps) {
  return (
    <div className={styles.container}>
      <NoSymbolIcon />
      <p>No search results found.</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
