'use client';

import { BookList } from '@/types/books';
import Link from 'next/link';
import styles from './BookListCard.module.css';
import { motion } from 'framer-motion';

interface BookListCardProps {
  list: BookList;
}

export default function BookListCard({ list }: BookListCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className={styles.card}
    >
      <Link href={`/list/${list.list_name_encoded}`}>
        <h2>{list.list_name}</h2>
        <p>{list.books.length} Books</p>
      </Link>
    </motion.div>
  );
}