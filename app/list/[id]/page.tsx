import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Book, BookList } from '@/types/books';
import BookDetail from '@/components/books/BookDetail';
import styles from '@/styles/list.module.css';
import Loading from '@/components/common/Loading';
import Title from '@/components/common/Title';
import Container from '@/components/layout/Container';

async function getBookList(name: string) {
  try {
    const response = await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${name}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return notFound();
    }

    const data = await response.json();
    return data.results;
  } catch {
    return notFound();
  }
}

export default async function ListDetail({
  params: { id }
}: {
  params: { id: string };
}) {
  const bookList: BookList = await getBookList(id);

  return (
    <Container>
      <Title>{bookList.display_name}</Title>

      <Suspense fallback={<Loading />}>
        <div className={styles.booksGrid}>
          {bookList.books.map((book: Book) => (
            <BookDetail key={book.rank} book={book} />
          ))}
        </div>
      </Suspense>
    </Container>
  );
}
