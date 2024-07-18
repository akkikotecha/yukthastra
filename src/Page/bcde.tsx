import {
  Navbar,
  ContactForm,
  Footer,
  ReviewFooter,
  BcdeTrainingTab,
} from "../components";
import styles from "./css/bcde.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/bcde.module.css";
import { useEffect } from "react";

function Bcde() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className={`${styles.dataMerger} ${styles.desktopShow}`}>
        <div className={styles.row}>
          <div className={`${styles.flex_row} ${styles["col-2"]}`}>
            <img
              className={styles.float_img}
              src="../../../training/BCADD.png"
            />
          </div>
          <div className={`${styles.flex_row} ${styles["col-2"]}`}>
            <h1 className={styles.weStrengthenOrganisationContainer}>
              <p className={styles.weStrengthen}>
                BCDE- BlackPerl Certified Detection Engineer
              </p>
            </h1>
            <div className={styles.row_right}>
              <div className={`${styles.flex_row} ${styles["col-2"]}`}>
                <img
                  className={styles.float_img}
                  src="../../../training/small_check.png"
                />
                <h5 className={styles.title_flex}>3 Engagement Plans</h5>
              </div>
              <div className={`${styles.flex_row} ${styles["col-2"]}`}>
                <img
                  className={styles.float_img}
                  src="../../../training/small_check.png"
                />
                <h5 className={styles.title_flex}>
                  Download Full Course Syllabus
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.desktopShow}>
        <div className={styles.row_second}>
          <div className={`${styles.flex_row} ${styles["col-2"]}`}>
            <h1 className={styles.weStrengthenOrganisationContainerSmall}>
              <p className={styles.weStrengthen}>
                The course is aimed to provide learners with comprehensive
                knowledge and practical skills in the subject of Detection
                Engineering Process. This course takes you from novice to
                expert, from learning the principles to hands-on experience.
              </p>
            </h1>
          </div>
          <div className={`${styles.flex_row} ${styles["col-2"]}`}>
            <button className={`${styles.am} ${styles.enrollNow}`}>
              <b className={styles.contactUs}>Enrol NOW</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
            </button>
          </div>
        </div>
       
      </section>
      <section className={`${styles.dataMerger} ${styles.mobileShow}`}>
        <div className={styles.row}>
        <div className={``}>
        <img className={styles.float_img} src='../../../training/BCADD.png'/>
          </div>
          <div className={`row`}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p>BCDE- BLACKPERL CERTIFIED DETECTION ENGINEER</p>
          </h1>
          <div className={"row"}>
            <div className={`col-lg-12 d-flex mt-2`}>
              <div className="col-2 ps-0">
              <img className={styles.float_img_mobile} src='../../../training/small_check.png'/>
                
              </div>
              <div className="col-10 px-0 pt-1">
              <h5 className={styles.title_flex}>3 Engagement Plans</h5>
                
              </div>
            </div>
            <div className={`col-lg-12 d-flex mt-3`}>
              <div className="col-2 ps-0 ">
              <img className={styles.float_img_mobile} src='../../../training/small_check.png'/>
                
              </div>
              <div className="col-10 px-0">
              <h5 className={styles.title_flex}>Download Full Course Syllabus</h5>

              </div>
            </div>
            
          </div>
          </div>
          </div>
        </section>
        <section className={styles.mobileShow}>
        <div className={"row"}>
        
          <h1 className={styles.weStrengthenOrganisationContainerSmall}>
            <p className={styles.weStrengthen}>The course is aimed to provide learners with comprehensive knowledge and practical skills in the subject of Detection Engineering Process. This course takes you from novice to expert, from learning the principles to hands-on experience.</p>
          </h1>
          <div className={`row ms-2`}>
          <a href="https://pages.razorpay.com/pl_NyOemu0RaPqx9c/view" target="_blank"><button className={`${styles.am} ${styles.enrollNow}`}>
            <b className={styles.contactUs}>Enrol NOW</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button></a>
          </div>
          </div>
        
        </section>


      <BcdeTrainingTab />

      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
    </>
  );
}

export default Bcde;
