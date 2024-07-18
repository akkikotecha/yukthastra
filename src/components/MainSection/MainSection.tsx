import { FunctionComponent } from "react";
import styles from "./MainSection.module.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
const MainSection: FunctionComponent = () => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.callToAction}>
        <div className={styles.formFields}>
          <div className={styles.nameField}>
            <img
              className={styles.nameFieldChild}
              loading="lazy"
              alt=""
              src="/group-465.svg"
            />
            <div className={styles.rectangle} />
          </div>
        </div>
        <div className={styles.reviewsAcademyTitle}>
          <h1 className={styles.worldClassSecurityContainer}>
            <p className={styles.worldClass}>{`WOrLD CLASS `}</p>
            <p className={styles.securityExperts}>SECURITY EXPERTS</p>
          </h1>
          <h1 className={styles.bestReturnOn}>BEST RETURN ON INVESTMENT</h1>
        </div>
      </div>
      <div className={styles.contactUsFooter}>
        <div className={styles.footerFrame}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-465.svg"
            />
            <div className={styles.itemcell} />
          </div>
        </div>
        <h1 className={styles.relationFirstContainer}>
          <p className={styles.relationFirst}>{`RELATION FIRST – `}</p>
          <p className={styles.customSolution}>CUSTOM SOLUTION</p>
        </h1>
      </div>
    </div>
  );
};

export default MainSection;
