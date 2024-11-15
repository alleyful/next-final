'use client';

import { Book } from '@/types/books';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './BookDetail.module.css';

interface BookDetailProps {
  book: Book;
}

export default function BookDetail({ book }: BookDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        {book.book_image && (
          <Image
            src={book.book_image}
            alt={book.title}
            width={200}
            height={300}
            priority
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.details}>
        <h2>{book.title}</h2>
        <p className={styles.author}>by {book.author}</p>
        <p className={styles.description}>{book.description}</p>
        <div className={styles.metadata}>
          <p>Rank: {book.rank}</p>
          <p>Weeks on List: {book.weeks_on_list}</p>
        </div>
        {book.amazon_product_url && (
          <a
            href={book.amazon_product_url}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.buyButton}
          >
            Buy on Amazon
          </a>
        )}
      </div>
    </motion.div>
  );
}
