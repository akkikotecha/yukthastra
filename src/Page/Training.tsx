
import {
    Navbar,
    ContactForm,
    Footer,
    ReviewFooter,
    TrainingTab
  } from "../components";
  import styles from "./css/Training.module.css";
  import 'bootstrap/dist/css/bootstrap.css';
  import './css/Training.module.css';
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
  
  function Training() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      // Scroll to top when the component is mounted
      window.scrollTo(0, 0);
    }, []);
    const handleClose = () => {
      setShowModal(false);
      // sessionStorage.setItem("HomeModal", "false");
    };
  
    const handleShow = () => {
      setShowModal(true);
    };
  
    return (
      <>
        <Navbar />
        <section className={`${styles.dataMerger} ${styles.desktopShow}`}>
        <div className={styles.row}>
        <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <img className={styles.float_img} src='../../../training/image_17.png'/>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p className={styles.weStrengthen}>BlackPerl Certified Advanced Defender- Cyber Career Surge Framework</p>
          </h1>
          <div className={styles.row_right}>
            <div className={`${styles.flex_row} ${styles['col-2']}`}>
              <img className={styles.float_img} src='../../../training/small_check.png'/>
              <h5 className={styles.title_flex}>3 Engagement Plans</h5>
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
            <p className={styles.weStrengthen}>BCAD-Accelerated is a fast track version of BCAD which is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts, security blue teams, threat hunters, and DFIR professionals. This program is also defined for someone who wants to switch their career from any other IT background to Cyber Security.</p>
          </h1>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <a href="https://pages.razorpay.com/pl_NyOemu0RaPqx9c/view" target="_blank"><button className={`${styles.am} ${styles.enrollNow}`}>
            <b className={styles.contactUs}>Enrol NOW</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button></a>
          </div>
          </div>
        <div className={styles.row_third}>
        
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainerWhite}>
            <p className={styles.weStrengthenSmall}>JOIN OUR BCAD<br/>
              ACCELERATED PROGRAM</p>
          </h1>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
        <button className={`${styles.am} ${styles.ammm}`} onClick={handleShow}>
            <b className={styles.contactUs}>View More</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button>
          </div>
          </div>
        </section>
        <section className={`${styles.dataMerger} ${styles.mobileShow}`}>
        <div className={`${styles.row}` }>
      
        <img className={styles.float_img} src='../../../training/image_17.png'/>
          
          <div className={`row`}>
          <h1 className={styles.weStrengthenOrganisationContainer}>
            <p>BlackPerl Certified Advanced Defender- Cyber Career Surge Framework</p>
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
            <p className={styles.weStrengthen}>BCAD-Accelerated is a fast track version of BCAD which is a vendor-neutral, hands-on Blue Team/InfoSec training and certification Program. It is designed to prepare the next generation of SOC analysts, security blue teams, threat hunters, and DFIR professionals. This program is also defined for someone who wants to switch their career from any other IT background to Cyber Security.</p>
          </h1>
          <div className={`row ms-2`}>
          <a href="https://pages.razorpay.com/pl_NyOemu0RaPqx9c/view" target="_blank"><button className={`${styles.am} ${styles.enrollNow}`}>
            <b className={styles.contactUs}>Enrol NOW</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button></a>
          </div>
          </div>
        <div className={`${styles.row_third} py-5`}>
        
          <div className={`${styles.flex_row} ${styles['col-2']}`}>
          <h1 className={styles.weStrengthenOrganisationContainerWhite}>
            <p className={styles.weStrengthenSmall}>JOIN OUR BCAD<br/>
              ACCELERATED PROGRAM</p>
          </h1>
          </div>
          <div className={`${styles.flex_row} ${styles['col-2']} mb-3`}>
        <button className={`${styles.am} ${styles.ammm}`} onClick={handleShow}>
            <b className={styles.contactUs}>View More</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button>
          </div>
          </div>
        </section>

        <TrainingTab />

        <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={styles.popuppadding}
      >
        <Modal.Header closeButton className={styles.positionFix}></Modal.Header>
        {/* <Link to="/BCAD"> */}
          <Modal.Body className={styles.ModalCurv}>
            {/* <h4>JOIN OUR</h4> */}
            <h1 className={styles.data_box}>

              <p className={`${styles.title_text_2 } mt-4`}>Coming Soon</p>
            </h1>
          </Modal.Body>
        {/* </Link> */}
      </Modal>

      </>
    );
  }
  
  export default Training;
  