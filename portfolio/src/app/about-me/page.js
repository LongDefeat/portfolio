// AboutMe.js
import styles from '@/styles/AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.subsectionTitle}>About Me</h1>
      </header>

      <section className={styles.profile}>
        <img 
          src="/images/plaid-shirt.jpg" 
          alt="plaid-shirt" 
          className={styles.profileImage} 
        />
        <p className={styles.subsectionContent}>
          Hello! My name is Mason Sams and I'm a software engineer from sunny Pasadena, CA. My roots in the legal profession as a paralegal have provided me with a unique lens through which I approach software engineering.
        </p>
      </section>

      <section className={styles.journey}>
        <h2 className={styles.subsectionTitle}>Career Journey</h2>
        <p className={styles.subsectionContent}>
          Transitioning from law to tech, I found my niche in languages like JavaScript and Python, and frameworks like React. I've dedicated myself to continuous learning, demonstrated by my 800-hour course completion at Springboard. Here, I honed my skills from front-end development to intricate data structures and algorithms.
        </p>
      </section>

      <section className={styles.community}>
        <h2 className={styles.subsectionTitle}>Community Engagement</h2>
        <p className={styles.subsectionContent}>
          But I'm not all about code. In 2022, I established the "Learn, Teach, Code" meetup group in Pasadena, championing a space for engineers to collaborate. One of my proudest moments? Leading the creation of a meteor strike tracking platform. Coding with a cause!
        </p>
      </section>

      <section className={styles.background}>
        <h2 className={styles.subsectionTitle}>More About Me</h2>
        <p className={styles.subsectionContent}>
          Away from tech, my academic background in History and German Language from the University of Arkansas complements my global perspective. It's not just about solving problems, but understanding the broader narratives.
        </p>
      </section>

      <section className={styles.interests}>
        <h2 className={styles.subsectionTitle}>Hobbies & Interests</h2>
        <ul className={styles.subsectionContent}>
          <li>Music Production</li>
          <li>Screenwriting</li>
          <li>Updating my Letterbox'd</li>
          <li>Outdoor Adventures</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <p className={styles.subsectionContent}>
          Keen to learn more or chat about potential collaborations? Reach out anytime — I'm always up for a virtual coffee.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
