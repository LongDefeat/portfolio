
import Image from 'next/image';
import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import styles from '@/styles/portfolio.module.css';
import worldStyles from '@/styles/spinningWorld.module.css';

const Portfolio = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Mason Sams</h1>
      <div className={styles.infoContainer}>
        <Image
          className={styles.image}
          src={'/images/plaid-shirt.jpg'}
          alt="me"
          width={300}
          height={300}
        />
        <div className={styles.bio}>
          <h2>About Me</h2>
          <p>
            I am a passionate developer seeking to create technologies that enhance the lives of the 
            <span className={worldStyles.world}> 🌎 </span>
            around him. Distinctive journey transitioning from law to dynamic software engineering. My goal is always seeking the intersection between problem-solving and createive expression.
          </p>
        </div>
      </div>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  </div>
);

export default Portfolio;
