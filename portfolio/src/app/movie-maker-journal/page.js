import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/MovieMakerJournal.module.css'
import Projects from '../projects/page';
import projectsData from '@/data/projects';

const MovieMakerJournal = () => (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.projectTitle}>The Movie Maker Journal</h2>
        <p className={styles.projectDescription}>
          The Movie Maker Journal is a platform I am consistently updating that allows for users to submit opinions about movies and to 
          catalogue the movies they have seen as well as their favorites.
        </p>
        <Link className={styles.liveCodeButton} href='https://movie-maker-journal-app-5v8c-lmofepxbs-longdefeat.vercel.app/'>Live Code</Link>

        <div className={styles.imageSection}>
          <Image className={styles.image} src={"/images/home-page.jpg"} alt="homepage" width={300} height={300} />
          <p className={styles.imageDescription}>This is the home page of the the Movie Maker Journal. Here you can search for movies
           and discover new popular/upcoming movies!</p>
        </div>

        <div className={styles.imageSection}>
          <Image className={styles.image} src={"/images/upcoming-movies.jpg"} alt="upcoming movies" width={300} height={300} />
          <p className={styles.imageDescription}>This section of the home page shows upcoming movies. If you've seen one already, you can select seen, favorite, or read details about the selected movie.</p>
        </div>

        <div className={styles.imageSection}>
          <Image className={styles.image} src={"/images/movie-details.jpg"} alt="movie details" width={300} height={300} />
          <p className={styles.imageDescription}>Detailed insights into a selected movie. It shows details about the movie including a description, worldwide revenue, and you can log your opinion about the movie.</p>
        </div>

        <div className={styles.imageSection}>
          <Image className={styles.image} src={"/images/favorites-list.jpg"} alt="favorites" width={300} height={300} />
          <p className={styles.imageDescription}>Here you can find a list of movies a user has favorited.</p>
        </div>

        <div className={styles.imageSection}>
          <Image className={styles.image} src={"/images/actors.jpg"} alt="actors" width={300} height={300} />
          <p className={styles.imageDescription}>Discover actors starring in some of your favorite, new movies.</p>
        </div>
        
      </main>
    </div>
);
  
export default MovieMakerJournal;
