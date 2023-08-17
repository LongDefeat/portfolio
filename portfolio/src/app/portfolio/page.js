import Image from 'next/image';
import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from '@/styles/portfolio.module.css';

const Portfolio = () => (
  <div className={styles.container}>
    <main>
      <h1 className={styles.title}>Mason Sams</h1>
      <Image src={'/images/plaid-shirt.jpg'} alt="me" width={300} height={300} style={{ objectFit: 'contain' }} />
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  </div>
);

export default Portfolio;
