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
          borderColor: '#2E7DFF',
          color: '#2E7DFF',
          boxShadow: '0 0 2px 0 #2E7DFF'
        };

      case 'MONTHLY':
        return {
          borderColor: '#9f69f5',
          color: '#9f69f5',
          boxShadow: '0 0 2px 0 #9f69f5'
        };

      case 'YEARLY':
        return {
          borderColor: '#ff41b7',
          color: '#ff41b7',
          boxShadow: '0 0 2px 0 #ff41b7'
        };

      default:
        return {
          borderColor: '#FF9E00',
          color: '#FF9E00',
          boxShadow: '0 0 2px 0 #FF9E00'
        };
    }
  };

  return (
    <div className={styles.label} style={{ ...themeColor() }}>
      {label}
    </div>
  );
}
