import Title from '@/components/common/Title';
import Container from '@/components/layout/Container';
import styles from '@/styles/about.module.css';

export default function AboutPage() {
  return (
    <Container>
      <Title>About NYT Bestsellers</Title>

      <section className={styles.section}>
        <h2>Project Overview</h2>
        <p>
          NYT Bestsellers is a web application that provides easy access to the
          New York Times Best Sellers lists. Users can browse different
          categories and discover the most popular books in each genre.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Requirements</h2>
        <ul className={styles.featureList}>
          <li>Home Page (/): Display the complete list of bestsellers.</li>
          <li>
            Detail Page (/list/[id]): Show the list of books for each bestseller
            category.
          </li>
          <li>About Page (/about): This is the About page.</li>
          <li>Use a Layout Component.</li>
          <li>Use CSS Modules to make it visually appealing.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Tech Stack</h2>
        <div className={styles.techGrid}>
          {techStack.map(tech => (
            <div key={tech.name} className={styles.techItem}>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

const techStack = [
  {
    name: 'Next.js 14',
    description: 'React framework for production with App Router'
  },
  {
    name: 'TypeScript',
    description: 'Static typing for enhanced development experience'
  },
  {
    name: 'CSS Modules',
    description: 'Scoped styling solution for components'
  }
];
