import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';

const Projects = ({ projects = [] }) => {
    return (
        <div className={styles.projectsContainer}>
            {projects && projects.length > 0 && projects.map(project => (
                <div key={project.title} className={styles.projectCard}>
                    <Image src={project.image} alt={project.title} className={styles.projectImage} width={300} height={300}/>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Link href={project.link} className={styles.projectLink}>
                        View Project
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Projects;
