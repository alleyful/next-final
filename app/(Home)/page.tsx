import { getCategories } from '@/lib/api/books';
import CategoryCard from '@/components/books/CategoryCard';
import styles from '@/styles/home.module.css';
import { Category } from '@/types/books';
import Title from '@/components/common/Title';
import Container from '@/components/layout/Container';

export default async function Home() {
  const categories = await getCategories();

  return (
    <Container>
      <Title>Categories</Title>

      <div className={styles.grid}>
        {categories.map((category: Category) => (
          <CategoryCard key={category.list_name_encoded} category={category} />
        ))}
      </div>
    </Container>
  );
}
