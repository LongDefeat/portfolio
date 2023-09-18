import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/MovieMakerJournal.module.css'
import Projects from '../projects/page';
import projectsData from '@/data/projects';

const Fireball = () => (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.projectTitle}>Fireball</h2>
        <p className={styles.projectDescription}>
          Fireball is a single-page web application I built with a volunteer organization called Chingu. With three other teammates,
          we made Fireball - an app built to visualize meteor strikes over years and years with an interactive map and data-driven charts.
        </p>
        <Link className={styles.liveCodeButton} href='https://fireball-map.netlify.app/'>Live Code</Link>

        <div className={styles.imageSection}>
          <Image className={styles.image} src={"/images/fireball.jpg"} alt="homepage of fireball" width={300} height={300} />
          <p className={styles.imageDescription}>This is the home page for Fireball. Here you can search for asteroids or narrow down what type you'd like to visualize in the map or graphs.</p>
        </div>

        <div className={styles.imageSection}>
          <Image className={styles.image} src={"/images/fireball-info.jpg"} alt="meteroid info" width={300} height={300} />
          <p className={styles.imageDescription}>This section helps to visualize how big or small these meteors are as they fall through the atmosphere and land on Earth.</p>
        </div>

        <div className={styles.imageSection}>
          <Image className={styles.image} src={"/images/fireball-graphs.jpg"} alt="fireball graphs" width={300} height={300} />
          <p className={styles.imageDescription}>This section allows you mix up data on each chart to get more details on size, composition, and number of strikes.</p>
        </div>
        
      </main>
    </div>
);
  
export default Fireball;
