
import {
    Navbar,
    ReviewCertificateAll,
    ContactForm,
    Footer,
    ReviewFooter
  } from "../components";
  import styles from "./css/reviewAll.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/reviewAll.module.css';
import { useEffect } from "react";
  
  function ReviewAll() {
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
        <ReviewCertificateAll />
        <section className={styles.reviewsAcademyGroup}>
          <ContactForm />
          <Footer />
        </section>
        <ReviewFooter />
      </>
    );
  }
  
  export default ReviewAll;
  