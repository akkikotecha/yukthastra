import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const FrameTitle: FunctionComponent = () => {
  return (
    <section className={styles.frameTitle}>
      <div className={styles.wrapperMaskGroup}>
        <video
          className={styles.maskGroupIcon}
          autoPlay
          muted
          loop
          src="/home.mp4"
        ></video>
      </div>
      <div className={styles.reviewsAcademyTrainingAbout}>
        <h1 className={styles.forDefendersByContainer}>
          <p className={styles.forDefenders}>{`For Defenders `}</p>
          <p className={styles.byDefenders}>by Defenders</p>
        </h1>
        <div className={styles.hackersGonnaHack}>
          Hackers gonna Hack, SOC Hunters Gonna Hunt, BlackPerl Gonna Create
          Hunters
        </div>
      </div>
      <div className={styles.copyrightFrame}>
        <div className={styles.frameFooter}>
          <div className={styles.frameFooterChild} />
          <b className={styles.areYouBreachedContainer}>
            <p className={styles.areYouBreached}>Are you Breached?</p>
            <p
              className={styles.needAttackInvestigation}
            >{`Need Attack Investigation?     `}</p>
            <p className={styles.needToBuild}>Need to build your Expertise?</p>
          </b>
          <Link to="/GetInTouch">
            <button className={styles.am}>
              <b className={styles.contactUs}>Contact Us</b>
              <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button></Link>
        </div>
        <div className={styles.rectangleA}>
          <div className={styles.textInput}>
            <div className={styles.textInputChild} />
            <div className={styles.ourLatestReleaseContainer}>
              <p className={styles.ourLatest}>{`Our Latest `}</p>
              <p className={styles.release}>Release</p>
            </div>
            <img
              className={styles.image11Icon}
              loading="lazy"
              alt=""
              src="/Badge.png"
            />
            <Link to="/BPCD"><button className={styles.column}>
              <b className={styles.knowMore}>Know more</b>
              <img className={styles.columnChild} alt="" src="/group-457.svg" />
            </button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameTitle;
