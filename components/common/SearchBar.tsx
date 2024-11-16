'use client';

import { useState } from 'react';
import styles from '@/styles/components/SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder='Search books...'
        className={styles.searchInput}
      />
      <button type='submit' className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}
