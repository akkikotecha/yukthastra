import { Navbar, ContactForm, Footer, ReviewFooter } from "../components";
import styles from "./css/Services.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Services.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
  //

function Services() {
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
      <section className={`${styles.dataMerger}`}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>SERVICES</p>
        </h1>
      </section>
      <div className="container mt-0 pt-0">
        <div className="row text-center">
          <h2 className={styles.organisation}>Portfolio</h2>
        </div>
      </div>

      <div className={`container mt-5 pt-0 mb-5 pb-0`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-5 col-md-6 p-4 pt-5">
            <img src="./portfolio/porfolio_1.png" />
          </div>
          <div className="col-lg-7 col-md-6 p-4 pt-5 xs-pt-0">
            <h1 className={styles.title_text}>
              DEFENSIVE SECURITY & <br />
              MANAGED SERVICES
            </h1>
            <p className={styles.title_p}>
              You will get our custom tools, software, virtual machines images,
              sample analysis data sets, logs which will can be around 100+ GBs.
              You will get our custom tools, software, virtual machines images,
              sample analysis data sets, logs which will can be around 100+ GBs.
            </p>

            <button className={`${styles.am} ms-auto`}>
              <b className={styles.contactUs}>COMING SOON</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
            </button>
          </div>
        </div>

        <div className={`row ${styles.reverseMarginOff} mt-5 pt-5 ${styles.postionSetRelative} `}>
          <div className="col-lg-7 col-md-6 p-4 pt-5 order-2 order-lg-1">
            <h1 className={styles.title_text}>
            INDUSTRIAL TRAINING & <br/>
CERTIFICATION
            </h1>
            <p className={styles.title_p}>
            You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs.You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs.
            </p>

            <button className={styles.am} onClick={handleShow}>
              <b className={styles.contactUs}>Read More</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
            </button>
          </div>
          <div className="col-lg-5 col-md-6 p-4 pt-5 order-1 order-lg-2">
            <img src="./portfolio/porfolio_2.png" />
          </div>
          
        </div>



        <div className={`row mt-5 pt-5 pb-5 ${styles.postionSetRelative}`}>
       
          <div className="col-lg-5 col-md-6 p-4 pt-5">
            <img src="./portfolio/porfolio_4.png" />
          </div>
          <div className="col-lg-7 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>
            Academic <br/>
collaboration
            </h1>
            <p className={styles.title_p}>
            You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs.You will get our custom tools, software, virtual machines images, sample analysis data sets, logs which will can be around 100+ GBs.
            </p>
            <Link to="/AcademicCollbration"><button className={styles.am}>
              <b className={styles.contactUs}>Read More</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
            </button></Link>
          </div>
        </div>

      </div>
    <div className="container-fluid px-0">
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
      </div>
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
              <p className={`${styles.title_text} mt-0`}> INDUSTRIAL TRAINING & CERTIFICATION
              </p>
              <p className={`${styles.title_text_2 } mt-4`}>Coming Soon</p>
            </h1>
          </Modal.Body>
        {/* </Link> */}
      </Modal>
    </>
  );
}

export default Services;
