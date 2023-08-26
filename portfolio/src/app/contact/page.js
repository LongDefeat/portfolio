import Image from 'next/image';


/* Styles */
import styles from "@/styles/Contact.module.css";

const Contact = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <div className={styles.infoContainer}>
        <Image
          className={styles.image}
          src={"/images/plaid-shirt.jpg"}
          alt="me"
          width={300}
          height={300}
        />
        <div className={styles.bio}>
          <h2>Contact</h2>
          <p>my contact info</p>
        </div>
      </div>
    </main>
  </div>
);

export default Contact;