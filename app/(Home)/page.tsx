import { Suspense } from 'react';
import { Category } from '@/types/books';
import Container from '@/components/layout/Container';
import Loading from '@/components/common/Loading';
import CategoryList from '@/components/books/CategoryList';
import Title from '@/components/common/Title';

async function getBookLists() {
  const response = await fetch(
    'https://books-api.nomadcoders.workers.dev/lists',
    { next: { revalidate: 3600 } }
  );
  const json = await response.json();
  return json.results;
}

export default async function Home() {
  const categories: Category[] = await getBookLists();

  return (
    <Container>
      <Title>Best Seller Categories</Title>

      <Suspense fallback={<Loading />}>
        <CategoryList categories={categories} />
      </Suspense>
    </Container>
  );
}
