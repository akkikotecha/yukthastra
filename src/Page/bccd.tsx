
import {
    Navbar,
    ContactForm,
    Footer,
    ReviewFooter,
    BccdTrainingTab
  } from "../components";
  import styles from "./css/bccd.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/bccd.module.css';

import { useEffect } from "react";
  
  function Bccd() {


    useEffect(() => {
      // Scroll to top when the component is mounted
      window.scrollTo(0, 0);
    }, []);

    // return () => {
    //   window.removeEventListener("storage", function() {});
    // };

    return (
      <>
        <Navbar />
        <section className={`${styles.dataMerger} ${styles.desktopShow}`}>
        <div className={styles.row}>
        <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../training/pcd.png'/>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p className={styles.weStrengthen}>BlackPerl Practical Cloud Defender</p>
          </h1>
          <div className={styles.row_right}>
            <div className={`${styles.flex_row} ${styles['col-2']}`}>
              <img className={styles.float_img} src='../../../training/small_check.png'/>
              <h5 className={styles.title_flex}>LIVE ENGAGEMENT</h5>
            </div>
            <div className={`${styles.flex_row} ${styles['col-2']}`}>
              <img className={styles.float_img} src='../../../training/small_check.png'/>
              <h5 className={styles.title_flex}>Download Full Course Syllabus</h5>
            </div>
          </div>
          </div>
          </div>
        </section>
        <section className={styles.desktopShow}>
        <div className={styles.row_second}>
        
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainerSmall}>
            <p className={`${styles.weStrengthen} pe-3`}>The BlackPerl Certified, Practical Cloud Defender (PCD) program equips you with the skills to secure cloud environments. Through a blend of theory and hands-on labs, you'll, master cloud security fundamentals, threat detection, incident response and more.
            </p>
          </h1>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <a href="https://pages.razorpay.com/pl_OP8XBnAAgiGjXm/view" target="_blank"><button className={`${styles.am} ${styles.enrollNow}`}>
            <b className={styles.contactUs}>Enrol NOW</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button></a>
          </div>
          </div>
        <div className={styles.row_third}>
        
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainerWhite}>
            <p className={styles.weStrengthenSmall}>JOIN OUR BPCD<br/>
              PROGRAM</p>
          </h1>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <a href="./../../collbrator/BPCD.pdf" download> <button className={`${styles.am} ${styles.ammm}`}>
            <b className={styles.contactUs}>View More</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button></a>
          </div>
          </div>
        </section>
        <section className={`${styles.dataMerger} ${styles.mobileShow}`}>
        <div className={styles.row}>
        <div className={``}>
        <img className={styles.float_img} src='../../../training/pcd.png'/>
          </div>
          <div className={`row`}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p>BlackPerl Practical Cloud Defender</p>
          </h1>
          <div className={"row"}>
            <div className={`col-lg-12 d-flex mt-2`}>
              <div className="col-2 ps-0">
              <img className={styles.float_img_mobile} src='../../../training/small_check.png'/>
                
              </div>
              <div className="col-10 px-0 pt-1">
              <h5 className={styles.title_flex}>LIVE ENGAGEMENT</h5>
                
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
            <p className={styles.weStrengthen}>The BlackPerl Certified, Practical Cloud Defender (PCD) program equips you with the skills to secure cloud environments. Through a blend of theory and hands-on labs, you'll, master cloud security fundamentals, threat detection, incident response and more.</p>
          </h1>
          <div className={`row ms-2`}>
          <a href="https://pages.razorpay.com/pl_OP8XBnAAgiGjXm/view" target="_blank"><button className={`${styles.am} ${styles.enrollNow}`}>
            <b className={styles.contactUs}>Enrol NOW</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button></a>
          </div>
          </div>
        <div className={`${styles.row_third} py-5`}>
        
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainerWhite}>
            <p className={styles.weStrengthenSmall}>JOIN OUR BCAD<br/>
              PROGRAM</p>
          </h1>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']} mb-3`}>
        <button className={`${styles.am} ${styles.ammm}`} >
            <b className={styles.contactUs}>View More</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button>
          </div>
          </div>
        </section>
        <BccdTrainingTab />

        <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
      </>
    );
  }
  
  export default Bccd;
  