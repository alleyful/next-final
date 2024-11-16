import styles from '@/styles/components/TagLabel.module.css';

interface TagLabelProps {
  label: string;
  theme: 'WEEKLY' | 'MONTHLY' | 'YEARLY' | string;
}

export default function TagLabel({ label, theme }: TagLabelProps) {
  const themeColor = () => {
    switch (theme) {
      case 'WEEKLY':
        return {
          backgroundColor: '#E7F0FF',
          color: '#2E7DFF'
        };

      case 'MONTHLY':
        return {
          backgroundColor: '#E9F7F1',
          color: '#19a96f'
        };

      case 'YEARLY':
        return {
          backgroundColor: '#FDEEEE',
          color: '#F65555'
        };

      default:
        return {
          backgroundColor: '#FFF9E7',
          color: '#FF9E00'
        };
    }
  };

  return (
    <div className={styles.label} style={{ ...themeColor() }}>
      {label}
    </div>
  );
}
