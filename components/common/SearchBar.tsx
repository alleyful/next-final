'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/components/SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  value?: string;
}

export default function SearchBar({ onSearch, value }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  useEffect(() => {
    setQuery(value || '');
  }, [value]);

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder='Search Categories...'
        className={styles.searchInput}
      />
      <button type='submit' className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}
