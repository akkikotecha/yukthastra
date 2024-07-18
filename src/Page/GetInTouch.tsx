
import {
    Navbar,
    GetInTouchForm,
    Footer,
    ReviewFooter
  } from "../components";
  import styles from "./css/GetInTouch.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/GetInTouch.module.css';
import { useEffect } from "react";
  
  function GetInTouch() {
    useEffect(() => {
      // Scroll to top when the component is mounted
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <Navbar />
        <section className={styles.dataMerger}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p className={styles.weStrengthen}>Have any</p>
            <p className={styles.organisation}>questions?</p>
          </h1>
         
        </section>
        <GetInTouchForm />
        <section className={styles.reviewsAcademyGroup}>
          {/* <ContactForm /> */}
          <Footer />
        </section>
        <ReviewFooter />
      </>
    );
  }
  
  export default GetInTouch;
  