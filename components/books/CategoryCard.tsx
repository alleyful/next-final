'use client';
import Link from 'next/link';

import { Category } from '@/types/books';
import styles from '@/styles/components/CategoryCard.module.css';
import TagLabel from '../common/TagLabel';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/list/${category.list_name_encoded}`}>
        <TagLabel label={category.updated} theme={category.updated} />

        <h2>{category.display_name}</h2>

        <p>
          Updated: <span>{category.newest_published_date}</span>
        </p>
      </Link>
    </div>
  );
}
