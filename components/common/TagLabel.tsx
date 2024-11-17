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
          // backgroundColor: '#E7F0FF',
          borderColor: '#2E7DFF',
          color: '#2E7DFF',
          boxShadow: '0 0 2px 0 #2E7DFF'
        };

      case 'MONTHLY':
        return {
          // backgroundColor: '#E9F7F1',
          borderColor: '#19a96f',
          color: '#19a96f',
          boxShadow: '0 0 2px 0 #19a96f'
        };

      case 'YEARLY':
        return {
          // backgroundColor: '#FDEEEE',
          borderColor: '#F65555',
          color: '#F65555',
          boxShadow: '0 0 2px 0 #F65555'
        };

      default:
        return {
          // backgroundColor: '#FFF9E7',
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
