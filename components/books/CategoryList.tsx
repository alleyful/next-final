'use client';

import { useEffect, useState } from 'react';
import { Category } from '@/types/books';
import SearchBar from '@/components/common/SearchBar';
import styles from '@/styles/components/CategoryList.module.css';
import CategoryCard from './CategoryCard';
import Nothing from '../common/Nothing';
import Loading from '../common/Loading';

interface CategoryListsProps {
  categories: Category[];
}

export default function CategoryLists({ categories }: CategoryListsProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredLists, setFilteredLists] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filtered = categories.filter(category =>
      category.display_name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredLists(filtered);
  };

  const handleReset = () => {
    setSearchQuery('');

    const sorted = categories.sort(
      (a, b) =>
        new Date(b.newest_published_date).getTime() -
        new Date(a.newest_published_date).getTime()
    );

    setFilteredLists(sorted);
    setIsLoading(false);
  };

  useEffect(() => {
    handleReset();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <>
      <div className={styles.searchSection}>
        <SearchBar onSearch={handleSearch} value={searchQuery} />
      </div>

      <div className={styles.grid}>
        {isLoading ? (
          <Loading />
        ) : (filteredLists || []).length > 0 ? (
          filteredLists.map(category => (
            <CategoryCard
              key={category.list_name_encoded}
              category={category}
            />
          ))
        ) : (
          <Nothing handleReset={handleReset} />
        )}
      </div>
    </>
  );
}
