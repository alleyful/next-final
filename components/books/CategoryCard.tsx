'use client';

import { Category } from '@/types/books';
import Link from 'next/link';
import styles from './CategoryCard.module.css';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={styles.card}
    >
      <Link href={`/list/${category.list_name_encoded}`}>
        <h2>{category.display_name}</h2>
        <p>Updated: {category.updated}</p>
      </Link>
    </motion.div>
  );
}
