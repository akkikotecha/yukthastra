import {
  Footer,
  Header,
  HowAreWeDiffenrent,
  MainSection,
  Navbar,
  PortfolioServices,
  Relation,
  Services,
} from "../components";
import styles from "./css/Home.module.css";
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <section className={styles.frameText}>
        <div className={styles.frameImage}>
          <h1 className={styles.howAre}>{`HOW ARE `}</h1>
          <HowAreWeDiffenrent />
          <MainSection />
        </div>
      </section>
      <PortfolioServices />
      <section className={styles.contentBoxes}>
        <div className={styles.frameParent}>
          <b className={styles.learner}>Learner</b>
          <b className={styles.whatRelationsAreContainer}>
            <p className={styles.whatRelations}>What RELATIONS</p>
            <p className={styles.areTelling}>are telling?</p>
          </b>
        </div>
      </section>
      <Relation />
      {/* Our Relations */}
      <section className={styles.servicesFrame}>
        <b className={styles.ourRelationsWorkContainer}>
          <p className={styles.ourRelations}>OUR RELATIONS</p>
          <p className={styles.workAt}>WORK AT</p>
        </b>
      </section>
      <section className={styles.contactUsGroup}>
        <div className={styles.ecomSiteId}>
          <img
            className={styles.infosysLogo1Icon}
            alt=""
            src="/infosys-logo-1@2x.png"
          />
        </div>
        <div className={styles.abcde}>
          <img
            className={styles.logo1Icon}
            loading="lazy"
            alt=""
            src="/logo-1@2x.png"
          />
        </div>
        <div className={styles.itemcell}>
          <img
            className={styles.tcs1Icon}
            loading="lazy"
            alt=""
            src="/tcs-1@2x.png"
          />
        </div>
        <div className={styles.itemcell1}>
          <img
            className={styles.wiproLogo1Icon}
            loading="lazy"
            alt=""
            src="/wiprologo-1@2x.png"
          />
        </div>
        <div className={styles.secondaryLeft}>
          <img className={styles.logo1Icon1} alt="" src="/logo-1-1@2x.png" />
        </div>
        <div className={styles.abcde1}>
          <img className={styles.logo1Icon2} alt="" src="/logo-1-2@2x.png" />
        </div>
        <div className={styles.rectangle}>
          <img
            className={styles.infosysLogo1Icon1}
            alt=""
            src="/infosys-logo-1@2x.png"
          />
        </div>
        <div className={styles.buttonseeall}>
          <img className={styles.logo1Icon3} alt="" src="/logo-1-3@2x.png" />
        </div>
        <div className={styles.itemcell2}>
          <img className={styles.tcs1Icon1} alt="" src="/tcs-1-1@2x.png" />
        </div>
        <div className={styles.itemcell3}>
          <img
            className={styles.wiproLogo1Icon1}
            alt=""
            src="/wiprologo-1-1@2x.png"
          />
        </div>
        <div className={styles.logo1Wrapper}>
          <img className={styles.logo1Icon4} alt="" src="/logo-1-4@2x.png" />
        </div>
        <div className={styles.headercell}>
          <img className={styles.logo1Icon5} alt="" src="/logo-1-5@2x.png" />
        </div>
        {/* <h1>JHH</h1> */}
      </section>
      <Footer />
    </>
  );
}
