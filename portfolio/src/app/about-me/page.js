// AboutMe.js
import styles from "@/styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.subsectionTitle}>About</h1>
      </header>

      <section className={styles.profile}>
        <img
          src="/images/plaid-shirt.jpg"
          alt="plaid-shirt"
          className={styles.profileImage}
        />
        <p className={styles.subsectionContent}>
          Hello! My name is Mason Sams and I&aposm a software engineer from
          sunny Pasadena, CA. My roots in the legal profession as a paralegal
          have provided me with a unique lens through which I approach software
          engineering.
        </p>
      </section>

      <section className={styles.journey}>
        <h2 className={styles.subsectionTitle}>Career Journey</h2>
        <p className={styles.subsectionContent}>
          Over the last few years I&aposve been a teacher and a paralegal, but
          over the pandemic I decided to shift my focus towards software
          engineering. After months of watching youtube videos and Udemy
          courses, I enrolled and completed the Springboard full-stack
          engineering bootcamp which led me to find my niche in JavaScript, and
          frameworks like React. I&aposve dedicated myself to continuous
          learning, demonstrated by my 800-hour course completion at
          Springboard. Here, I honed my skills in both frontend and backend
          development and I continue to study intricate data structures and
          algorithms in my free time.
        </p>
      </section>

      <section className={styles.community}>
        <h2 className={styles.subsectionTitle}>Community Engagement</h2>
        <p className={styles.subsectionContent}>
          But I&aposm not all about my coding journey. In late 2022, I
          established the &quotLearn, Teach, Code&quot meetup group in Pasadena,
          championing a space for engineers around Los Angeles to collaborate
          and learn from one another. Super thankful I started the meetup as I
          now have many friends I hang out with outside the meetup, but also
          it&aposs allowed me the opportunity to guide budding engineers in
          their coding journeys.
        </p>
      </section>

      <section className={styles.background}>
        <h2 className={styles.subsectionTitle}>More About Me</h2>
        <p className={styles.subsectionContent}>
          Away from tech, my academic background in History and German Language
          from the University of Arkansas complements my global perspective.
          It&aposs not just about solving problems, but understanding broader
          narratives.
        </p>
        <br />
        <p className={styles.subsectionContent}>
          When I find spare time, you can find me learning new instruments,
          composing music for short films, and finally perfecting Steely Dan
          songs on guitar.
        </p>
      </section>

      <section className={styles.interests}>
        <h2 className={styles.subsectionTitle}>Hobbies & Interests</h2>
        <ul className={styles.subsectionContent}>
          <li>Music Production</li>
          <li>Screenwriting</li>
          <li>Updating my Letterbox&aposd</li>
          <li>Outdoor Adventures</li>
          <li>Learning more about AI</li>
        </ul>
      </section>

      <section className={styles.contact}>
        <p className={styles.subsectionContent}>
          Keen to learn more or chat about potential collaborations? Reach out
          anytime — I&aposm always up for a virtual coffee.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
