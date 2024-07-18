
import {
    Navbar,
    EnrolNow,
    PracticalTraining,
    ContactForm,
    Footer,
    ReviewFooter
  } from "../components";
  import styles from "./css/Livetrainning.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/Livetrainning.module.css';
import { useEffect } from "react";
  
  function LiveTrainning() {
    useEffect(() => {
      // Scroll to top when the component is mounted
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <Navbar />
        <section className={styles.dataMerger}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p className={styles.weStrengthen}>Live Training</p>
            <p className={styles.organisation}>LEARN HOW TO HACK,<br/>THEN DEFEND IT</p>
          </h1>
        </section>

        <EnrolNow />
        <PracticalTraining/>
        <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
      </>
    );
  }
  
  export default LiveTrainning;
  