import Image from 'next/image';
import Link from 'next/link';

/* Styles */
import styles from "@/styles/Contact.module.css";

const Contact = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.infoContainer}>
        <Image
          className={styles.image}
          src={"/images/plaid-shirt.jpg"}
          alt="Mason Sams"
          width={300}
          height={300}
        />
        <div className={styles.bio}>
          <h2 className={styles.contactHeader}>Let's Connect!</h2>
          <p>
            Whether you're interested in working with me or just want to say hello, I'd love to hear from you! 
            Feel free to reach out using any of the methods below.
          </p>
          
          <ul className={styles.contactList}>
            <li>
              <strong className={styles.list}>Email:</strong> <a href="mailto:mason@example.com">masonsams7@gmail.com</a>
            </li>
            <li>
              <strong className={styles.list}>LinkedIn:</strong> <a href="https://www.linkedin.com/in/masonsams/" target="_blank" rel="noopener noreferrer">linkedin.com/in/masonsams7</a>
            </li>
            <li>
              <strong className={styles.list}>GitHub:</strong> <a href="https://github.com/masonsams" target="_blank" rel="noopener noreferrer">https://github.com/LongDefeat</a>
            </li>
          </ul>
          
          <p className={styles.note}>
            Note: Please allow a couple of days for responses. I appreciate your patience!
          </p>
          <a href="/resume.pdf" download="Mason_Sams_Resume.pdf" className={styles.resumeLink}>
            Download My Resume
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default Contact;
