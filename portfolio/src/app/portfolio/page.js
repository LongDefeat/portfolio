import Image from 'next/image';
import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

/* Styles */
import styles from '@/styles/portfolio.module.css';
import computerStyles from '@/styles/spinningComputer.module.css';

const Portfolio = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.nameContainer}>
        <h1 className={styles.title}>Mason Sams</h1>
      </div>
      <div className={styles.infoContainer}>
        <Image
          className={styles.image}
          src={'/images/plaid-shirt.jpg'}
          alt="me"
          width={300}
          height={300}
        />
        <div className={styles.bio}>
          <h2>About Me <span className={computerStyles.computerSway}> 💻 </span></h2>
          <p>
            Hello! I'm Mason, a passionate developer seeking to create technologies that enhance the lives of those around me. Distinctive journey transitioning from law to dynamic software engineering. My goal is always seeking the intersection between problem-solving and creative expression.
          </p>
        </div>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default Portfolio;
