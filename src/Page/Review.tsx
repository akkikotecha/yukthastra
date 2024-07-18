
import {
    Navbar,
    ReviewCertificate,
    ContactForm,
    Footer,
    ReviewFooter
  } from "../components";
  import styles from "./css/review.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/review.module.css';
import { useEffect } from "react";
  
  function Review() {
    useEffect(() => {
      // Scroll to top when the component is mounted
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <Navbar />
        <section className={styles.dataMerger}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p className={styles.weStrengthen}>what our</p>
            <p className={styles.organisation}>Relation say!</p>
          </h1>
         
        </section>
        <ReviewCertificate />
        <section className={styles.reviewsAcademyGroup}>
          <ContactForm />
          <Footer />
        </section>
        <ReviewFooter />
      </>
    );
  }
  
  export default Review;
  