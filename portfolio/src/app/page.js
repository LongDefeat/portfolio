import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from '@/styles/portfolio.module.css';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const Portfolio = () => (
  <div>
    <h1 className={styles.title}>My Portfolio</h1>
    <Image src={'/images/plaid-shirt.jpg'} alt="me" width={300} height={300} style={{ objectFit: 'contain' }} />
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export default Portfolio;
