import { Book, BookList } from '@/types/books';
import BookDetail from '@/components/books/BookDetail';
import styles from '@/styles/list.module.css';
import Loading from '@/components/common/Loading';
import { Suspense } from 'react';
import Title from '@/components/common/Title';
import Container from '@/components/layout/Container';

async function getBookList(name: string) {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${name}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }

  const data = await response.json();
  return data.results;
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
