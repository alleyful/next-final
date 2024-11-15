import { getCategories } from '@/lib/api/books';
import CategoryCard from '@/components/books/CategoryCard';
import styles from './page.module.css';
import { Category } from '@/types/books';
export default async function Home() {
  const categories = await getCategories();

  return (
    <div className={styles.container}>
      <h1>NYT Bestseller Categories</h1>
      <div className={styles.grid}>
        {categories.map((category: Category) => (
          <CategoryCard key={category.list_name_encoded} category={category} />
        ))}
      </div>
    </div>
  );
}
