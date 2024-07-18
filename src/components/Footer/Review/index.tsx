import { FunctionComponent } from "react";
import styles from "./ReviewAcademy.module.css";
import { Link } from "react-router-dom";

const ReviewsAcademy: FunctionComponent = () => {
  return (
    <section className={styles.reviewsAcademy}>
      
      <div className={`${styles.academicPartnersCollabFrame} container`}>
        <div className={styles.academicLogoFrame}>
          <img
            className={styles.academicLogoFrameChild}
            loading="lazy"
            alt=""
            src="/Vector 4.png"
          />
          

          <div className="row w-100">
              <div className="col-lg-8 col-md-6 text-md-start text-center text-lg-start">
              <div className={styles.ourAcademicPartners}>
                OUR ACADEMIC PARTNERS
              </div>
              <div className={`${styles.firstLogoFrame} mt-3 justify-content-md-start justify-content-lg-start justify-content-center`}>
                <img
                  className={styles.image13Icon}
                  loading="lazy"
                  alt=""
                  src="/image-13@2x.png"
                />
                <img
                  className={styles.image14Icon}
                  loading="lazy"
                  alt=""
                  src="/image-14@2x.png"
                />
              </div>
              </div>
              <div className="col-lg-4  col-md-6 pe-0 text-md-end text-center text-lg-end mt-4 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0">
              <div className={styles.ourCollaborationPartners}>
                OUR COLLABORATION PARTNERS
              </div>
              <img
                className={`${styles.image15Icon} mt-3`} style={{"display":"inline"}}
                loading="lazy"
                alt=""
                src="/image-15@2x.png"
              />
              </div>
          </div>
        </div>
      </div>
      <footer className={styles.footerFrame}>
        <div className={styles.footerFrameChild} />
        <div className={styles.copyrightBlackperlLtd}>
          © Copyright blackperl Ltd 2024
        </div>
        <div
          className={styles.privacyPolicy}
        ><span> <Link to="/PrivacyPolicy">Privacy & Policy</Link> </span> <span> | </span> <span> <Link to="/TermAndCondition">Term & Condition</Link> </span> <span> | </span> <span> <Link to="/GetInTouch">Contact US </Link></span></div>
      </footer>
    </section>
  );
};

export default ReviewsAcademy;
