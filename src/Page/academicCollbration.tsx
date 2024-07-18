import { Navbar, ContactForm, Footer, ReviewFooter,  CompanyLogoSlider} from "../components";
import styles from "./css/academicCollbration.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/academicCollbration.module.css";
import Carousel from "../components/ColbratorServices/Service";
import { Tab, Tabs } from "react-bootstrap";
import { useEffect } from "react";

// import { useEffect } from "react";
// import { Link } from "react-router-dom";

function AcademicCollbration() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className={styles.desktop_show}>
      <section className={`${styles.dataMerger}`}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>
            Academic <br />
            collaboration{" "}
          </p>
        </h1>
      </section>
      <div className="container mt-0 pt-0">
        <div className="row text-center">
          <h2 className={styles.organisation}>
            Want to save more money, go for our subscription
          </h2>
        </div>
      </div>
      <div className={`container mt-5 pt-0 mb-0 pb-0`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-10 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>Why Cyber Defence as Career</h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-5">
            <img src="./collbrator/cyber1.png" />
            <p className={styles.title_p}>
              Percentage of businesses with just 1 employee responsible for
              cyber security
            </p>
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-5">
            <img src="./collbrator/cyber2.png" />
            <p className={styles.title_p}>
              Percentage of cyber sector businesses employing cyber teams with
              the following number of people
            </p>
          </div>
        </div>
        <div className={`row mt-0 pt-0 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/cyber3.png" />
            <p className={styles.title_p}>
              Percentage of cyber sector workforce who have come in through
              particular career pathways
            </p>
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/cyber4.png" />
            <p className={styles.title_p}>
              Percentage of cyber sector firms that have staff with the
              following types of qualifications or accreditations
            </p>
          </div>
        </div>
      </div>
      <div className={`container pb-0`}>
        <div
          className={`row mt-0 pt-0 pb-5 align-items-center ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <div className="row">
              <div className="col-lg-6">
                <img src="./collbrator/cyber5.png" />
              </div>
              <div className="col-lg-6">
                <img src="./collbrator/cyber6.png" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <div className="row">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11  col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Many Jobs/Roles are getting replaced by AI. But Cyber Jobs as
                  increasing because of AI.
                </h5>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11  col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Always demanding and industry recognized career. Security is
                  getting incorporated in every domain in IT.
                </h5>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11  col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Relatively risk-free career in the unpredictable market.
                </h5>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11  col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Salary is minimum 20% higher than any other domain.
                </h5>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className={`col-lg-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11  col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Beyond full time role, this domain has highest opportunity for
                  doing side hustle; freelance; projects.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container mt-0 pt-0 mb-0 pb-0`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-8 col-md-6 p-4 pt-0">
            <h1 className={styles.title_text}>
              Cyber Role diversity & Skill Gaps
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-4 col-md-4 p-4 pt-0">
            <img src="./collbrator/cyberRole1.png" />
            <p className={styles.title_p}>
              Extent to which businesses are confident in performing advanced
              cyber security tasks
            </p>
          </div>
          <div className="col-lg-4 col-md-4 p-4 pt-0">
            <img src="./collbrator/cyberRole2.png" />
            <p className={styles.title_p}>
              Percentage not confident in performing advanced cyber security
              tasks, by type of organization
            </p>
          </div>
          <div className="col-lg-4 col-md-4 p-4 pt-0">
            <img src="./collbrator/cyberRole3.png" />
            <p className={styles.title_p}>
              Percentage of cyber firms that have skills gaps in the following
              technical areas, among those that have identified any skills gaps
            </p>
          </div>
        </div>
      </div>
      <div className={`container mt-0 pt-0 mb-0 pb-0`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-0">
            <h1 className={styles.title_text}>
              Cyber Landscape and Job Market
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/map.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <div className="positionRealtive ">
              <img
                src="./collbrator/elicp9.png"
                className={styles.positionAbsolute}
              />
              <div className={`${styles.indexTop} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisation}>Landscape</h2>
                </p>
                <div className="row mt-4">
                  <div
                    className={`col-lg-2 col-md-2 width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp1.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>4400+ Attacks / Day</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2 width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp2.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>2nd Ranked in World</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2 width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp3.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>401 Cr+</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2 width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp4.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>48% Cyber Attacks</h5>
                  </div>
                </div>
                <div className="row mt-4 mb-0" style={{ width: "117%" }}>
                  <hr style={{ backgroundColor: "#030303" }} />
                </div>
                <p className={`${styles.title_p} mt-4`}>
                  <h2 className={styles.organisation}>Job Market</h2>
                </p>
                <div className="row mt-4">
                  <div
                    className={`col-lg-2 col-md-2 width-set ${styles.width_set_small_size}  pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp5.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>40,000 New open job</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2 width-set  ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp6.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>
                      30% of existing vacancies
                    </h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2 width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp8.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>4L - 8L</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.container_left} container  ps-5` }>
        <div className={`row ${styles.backgroundChange} ms-1`}>
          <div className="col-lg-7 col-md-7 p-5 pt-5 mb-5 mt-5">
            <h1 className={`${styles.title_text} pt-3 mt-2 `}>
              World Job Market
            </h1>
            <p className={`${styles.title_p} mb-5`}>
              <h2 className={styles.organisation}>3.5 Million</h2>
            </p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>Learning Roadmap</h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/learning1.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/learning2.png" />
          </div>
        </div>

        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-3">
            <h1 className={styles.title_text}>Our Unique Booklet</h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/booklet1.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/booklet2.png" />
          </div>
        </div>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-3">
            <h1 className={styles.title_text}>Our Differentiator</h1>
          </div>
        </div>
        <div className={`row mt-0 pt-5 pb-5 `}>
          <div className="col-lg-6 col-md-6 p-4 pt-0 ">
            <img src="./collbrator/diff2.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0 ">
            <img src="./collbrator/diff3.png" />
          </div>
        </div>

        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-3">
            <h1 className={styles.title_text}>Our Simplified Workflow</h1>
          </div>
        </div>
        <div className={`row mt-0 pt-5 pb-5 `}>
          <div className="col-lg-12 col-md-12 p-4 pt-0 pb-5 ">
            <img src="./collbrator/workFlow.png" className="w-100" />
          </div>
        </div>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-3">
            <h1 className={styles.title_text}>
              Why you need your Cyber Learning Management?
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-5 `}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management1.png" />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    You are in
                    <br />
                    Full Control
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management2.png" />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    100% Updated
                    <br />
                    Content
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management3.png" />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    Industry
                    <br />
                    Focused
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management4.png" />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    No
                    <br />
                    Maintenance
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 pt-2">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management5.png" />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    The Best
                    <br />
                    ROI
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 pt-2">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management6.png" />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    Enable Real
                    <br />
                    Engagement
                    <br />
                    Experience
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4 pt-2">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management7.png" />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    Live Interaction
                    <br />
                    with Cyber Leaders
                  </h2>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-0 pt-5">
        <Carousel />

        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-12 col-md-6 p-4 mt-5 pt-5">
            <h1 className={styles.title_text}>
              Few LMS Powered
              <br />
              by us
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/power1.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/power2.png" />
          </div>
        </div>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-12 col-md-6 p-4 pt-4">
            <h1 className={styles.title_text}>
            Hiring Potential
            </h1>
          </div>
        </div>
      </div>
      <div className={`row mt-0 pt-0 pb-5 w-100 m-0`}>
        <Tabs
      defaultActiveKey="Technology and Software"
      id="fill-tab-example"
      className="mb-3 mt-5 pe-0 w-100"
      fill
    >
      <Tab eventKey="Technology and Software" className="px-3" title="Technology and Software ">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Cisco Systems
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Palo Alto Networks
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Symantec Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              McAfee
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Check point Software Technologies
            </h1>
              </div>
            </div>
          </div>

        </div>
      </Tab>
      <Tab eventKey="Finance and Banking" title="Finance and Banking">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              JPMorgan Chase
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Goldman Sachs

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Bank of America

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Citigroup
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Wells Fargo

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              ICICI Bank

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Barclays
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Bandhan Bank

            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Healthcare" title="Healthcare">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Cerner Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Siemens Healthineers
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Philips Healthcare
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              McKesson Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Epic Systems Corporation

            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Government and Defense" title="Government and Defense">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Lockheed Martin
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Northrop Grumman Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Raytheon Technologies
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              BAE Systems

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Booz Allen Hamilton

            </h1>
              </div>
            </div>
          </div>

        </div>
      
      </Tab>
      <Tab eventKey="Retail and E-commerce" title="Retail and E-commerce">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Amazon Web Services (AWS)
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Walmart
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Alibaba Group
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              eBay Inc
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Shopify
            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Telecommunications" title="Telecommunications">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Verizon Communications
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              AT&T

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              T-Mobile
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Orange S.A
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Vodafone Group

            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Energy and Utilities" title="Energy and Utilities">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Siemens Energy
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Schneider Electric
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Duke Energy Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Exelon Corporation

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              General Electric (GE) Power
            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Manufacturing" title="Manufacturing">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              General Motors (GM)
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Toyota Motor Corporation

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Ford Motor Company

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Siemens AG

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Bosch Group
            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      
    </Tabs>
      </div>
      <div className="container">
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-12 col-md-6 p-4 pt-0">
            <h1 className={styles.title_text}>
            Learners Feedback
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-5 `}>
          <div className="col-lg-6">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/feedback.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/feedback1.png" />
                  </h2>
                </p>
              </div>
             
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/feedback.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/feedback2.png" />
                  </h2>
                </p>
              </div>
             
            </div>
          </div>
          <div className="col-lg-6 mt-4 pt-2">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/feedback.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/feedback3.png" />
                  </h2>
                </p>
              </div>
             
            </div>
          </div>
          <div className="col-lg-6 mt-4 pt-2">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/feedback.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/feedback4.png" />
                  </h2>
                </p>
              </div>
             
            </div>
          </div>
          </div>
          <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-12 col-md-6 p-4 pt-5 mb-5">
            <h1 className={styles.title_text}>
            We are Growing!
            </h1>
          </div>
        </div>

          <CompanyLogoSlider reverseDirection={false} extraPadding={false}  />
      <CompanyLogoSlider reverseDirection={true} extraPadding={true} />

      </div>
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
        
      </section>
      <ReviewFooter />
      </section>



      <section className={styles.mobile_show}>
      <section className={`${styles.dataMerger}`}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>
            Academic <br />
            collaboration{" "}
          </p>
        </h1>
      </section>
      <div className="container mt-0 pt-0">
        <div className="row text-center">
          <h2 className={styles.organisation}>
            Want to save more money, go for our subscription
          </h2>
        </div>
      </div>
      <div className={`container mt-0 pt-0 mb-0 pb-0`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>Why Cyber Defence as Career</h1>
          </div>
        </div>

        <div className={`row mt-0 pt-0 pb-0 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/cyber1.png" />
            <p className={styles.title_p}>
              Percentage of businesses with just 1 employee responsible for
              cyber security
            </p>
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/cyber2.png" />
            <p className={styles.title_p}>
              Percentage of cyber sector businesses employing cyber teams with
              the following number of people
            </p>
          </div>
        </div>
        <div className={`row mt-0 pt-0 pb-0 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/cyber3.png" />
            <p className={styles.title_p}>
              Percentage of cyber sector workforce who have come in through
              particular career pathways
            </p>
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/cyber4.png" />
            <p className={styles.title_p}>
              Percentage of cyber sector firms that have staff with the
              following types of qualifications or accreditations
            </p>
          </div>
        </div>
      </div>
      <div className={`container pb-0`}>
        <div
          className={`row mt-0 pt-0 pb-0 align-items-center ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <div className="row">
              <div className="col-lg-6">
                <img src="./collbrator/cyber5.png" className="w-100" />
              </div>
              <div className="col-lg-6 mt-5">
                <img src="./collbrator/cyber6.png" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0 mt-4">
            <div className="row">
              <div
                className={`col-lg-2  col-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11  col-10  col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Many Jobs/Roles are getting replaced by AI. But Cyber Jobs as
                  increasing because of AI.
                </h5>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className={`col-lg-2 col-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11  col-10 col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Always demanding and industry recognized career. Security is
                  getting incorporated in every domain in IT.
                </h5>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className={`col-lg-2 col-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11 col-10 col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Relatively risk-free career in the unpredictable market.
                </h5>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className={`col-lg-2 col-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11  col-10 col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Salary is minimum 20% higher than any other domain.
                </h5>
              </div>
            </div>
            <div className="row mt-4">
              <div
                className={`col-lg-2 col-2 col-md-2 width-set pe-0 mt-1`}
                style={{ width: "45px" }}>
                <img
                  className={styles.float_img}
                  src="../../../about/right.png"
                />
              </div>
              <div className="col-lg-11 col-10 col-md-10 px-0 ps-2">
                <h5 className={styles.title_flex}>
                  Beyond full time role, this domain has highest opportunity for
                  doing side hustle; freelance; projects.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container mt-0 pt-0 mb-0 pb-0`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-8 col-md-6 p-4 pt-0">
            <h1 className={styles.title_text}>
              Cyber Role diversity & Skill Gaps
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-3 pb-0 ${styles.postionSetRelative}`}>
          <div className="col-lg-4 col-md-4 p-4 pt-0">
            <img src="./collbrator/cyberRole1.png" />
            <p className={styles.title_p}>
              Extent to which businesses are confident in performing advanced
              cyber security tasks
            </p>
          </div>
          <div className="col-lg-4 col-md-4 p-4 pt-0">
            <img src="./collbrator/cyberRole2.png" />
            <p className={styles.title_p}>
              Percentage not confident in performing advanced cyber security
              tasks, by type of organization
            </p>
          </div>
          <div className="col-lg-4 col-md-4 p-4 pt-0">
            <img src="./collbrator/cyberRole3.png" />
            <p className={styles.title_p}>
              Percentage of cyber firms that have skills gaps in the following
              technical areas, among those that have identified any skills gaps
            </p>
          </div>
        </div>
      </div>
      <div className={`container mt-0 pt-0 mb-0 pb-0`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-0">
            <h1 className={styles.title_text}>
              Cyber Landscape and Job Market
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-2 pb-5 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/map.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <div className="positionRealtive mb-5 pb-5">
              <img
                src="./collbrator/elicp9.png"
                className={styles.positionAbsolute}
              />
              <div className={`${styles.indexTop} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisation}>Landscape</h2>
                </p>
                <div className="row mt-4">
                  <div
                    className={`col-lg-2  col-2 col-md-2 width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp1.png"
                    />
                  </div>
                  <div className="col-lg-11  col-10   col-md-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>4400+ Attacks / Day</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2   col-2 width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp2.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10  col-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>2nd Ranked in World</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2  col-2  width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp3.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10  col-10  px-0 ps-2">
                    <h5 className={styles.title_flex}>401 Cr+</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2  col-2  width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp4.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10  col-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>48% Cyber Attacks</h5>
                  </div>
                </div>
                <div className="row mt-4 mb-0" style={{ width: "117%" }}>
                  <hr style={{ backgroundColor: "#030303" }} />
                </div>
                <p className={`${styles.title_p} mt-4`}>
                  <h2 className={styles.organisation}>Job Market</h2>
                </p>
                <div className="row mt-4">
                  <div
                    className={`col-lg-2 col-md-2 col-2  width-set ${styles.width_set_small_size}  pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp5.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10  col-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>40,000 New open job</h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2  col-2 width-set  ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp6.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10  col-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>
                      30% of existing vacancies
                    </h5>
                  </div>
                </div>
                <div className="row mt-3">
                  <div
                    className={`col-lg-2 col-md-2  col-2  width-set ${styles.width_set_small_size} pe-0 mt-1`}
                    style={{ width: "36px" }}>
                    <img
                      className={styles.float_img}
                      src="../../../collbrator/elicp8.png"
                    />
                  </div>
                  <div className="col-lg-11  col-md-10  col-10 px-0 ps-2">
                    <h5 className={styles.title_flex}>4L - 8L</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.container_left} container mt-5 px-4` }>
        <div className={`row ${styles.backgroundChange} ms-1`}>
          <div className="col-lg-5 col-md-6">
            <h1 className={`${styles.title_text}  `}>
              World Job Market
            </h1>
            <p className={`${styles.title_p} mb-5`}>
              <h2 className={styles.organisation}>3.5 Million</h2>
            </p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pb-0 pt-0">
            <h1 className={styles.title_text}>Learning Roadmap</h1>
          </div>
        </div>

        <div className={`row mt-0 pt-4 pb-0 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/learning1.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/learning2.png" />
          </div>
        </div>

        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-0">
            <h1 className={styles.title_text}>Our Unique Booklet</h1>
          </div>
        </div>

        <div className={`row mt-0 pt-2 pb-0 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/booklet1.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/booklet2.png" />
          </div>
        </div>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pb-0 pt-3">
            <h1 className={styles.title_text}>Our Differentiator</h1>
          </div>
        </div>
        <div className={`row mt-0 pt-4 pb-0 `}>
          <div className="col-lg-6 col-md-6 p-4 pt-0 ">
            <img src="./collbrator/diff2.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pb-0 pt-0 ">
            <img src="./collbrator/diff3.png" />
          </div>
        </div>

        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-5 col-md-6 p-4 pb-0 pt-2">
            <h1 className={styles.title_text}>Our Simplified Workflow</h1>
          </div>
        </div>
        <div className={`row mt-0 pt-4 pb-0 `}>
          <div className="col-lg-12 col-md-12 p-4 pt-0 pb-0 ">
            <img src="./collbrator/workFlow.png" className="w-100" />
          </div>
        </div>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-7 col-md-6 p-4 pt-3">
            <h1 className={styles.title_text}>
              Why you need your Cyber Learning Management?
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-2 pb-5 `}>
          <div className="col-lg-3 pb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={`${styles.positionRealtive} ${styles.image_full_width}`}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management1.png" className={styles.image_icon_full_width} />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    You are in
                    <br />
                    Full Control
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={`${styles.positionRealtive} ${styles.image_full_width}`}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management2.png" className={styles.image_icon_full_width}/>
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    100% Updated
                    <br />
                    Content
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={`${styles.positionRealtive} ${styles.image_full_width}`}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management3.png" className={styles.image_icon_full_width} />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    Industry
                    <br />
                    Focused
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={`${styles.positionRealtive} ${styles.image_full_width}`}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management4.png" className={styles.image_icon_full_width}/>
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    No
                    <br />
                    Maintenance
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-0 pt-0 ">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={`${styles.positionRealtive} ${styles.image_full_width}`}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management5.png" className={styles.image_icon_full_width}/>
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    The Best
                    <br />
                    ROI
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={`${styles.positionRealtive} ${styles.image_full_width}`}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management6.png" className={styles.image_icon_full_width} />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    Enable Real
                    <br />
                    Engagement
                    <br />
                    Experience
                  </h2>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 pt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/management.png"
                className={`${styles.positionRealtive} ${styles.image_full_width}`}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/management7.png" className={styles.image_icon_full_width} />
                  </h2>
                </p>
              </div>
              <div className={`${styles.indexTopSecond} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationText}>
                    Live Interaction
                    <br />
                    with Cyber Leaders
                  </h2>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${styles.marginServiceSet} mt-0 pt-0 `} >
        <Carousel />

        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-12 col-md-6 p-4 pt-5">
            <h1 className={styles.title_text}>
              Few LMS Powered
              <br />
              by us
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-5 pb-4 ${styles.postionSetRelative}`}>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/power1.png" />
          </div>
          <div className="col-lg-6 col-md-6 p-4 pt-0">
            <img src="./collbrator/power2.png" />
          </div>
        </div>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-12 col-md-6 p-4 pt-0">
            <h1 className={`${styles.title_text} mt-0`}>
            Hiring Potential
            </h1>
          </div>
        </div>
      </div>
      <div className={`row mt-0 pt-0 pb-0 w-100 m-0`}>
        <Tabs
      defaultActiveKey="Technology and Software"
      id="fill-tab-example"
      className="mb-3 mt-3 pe-0 w-100"
      fill
    >
      <Tab eventKey="Technology and Software" className="px-3" title="Technology and Software ">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Cisco Systems
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Palo Alto Networks
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Symantec Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              McAfee
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Check point Software Technologies
            </h1>
              </div>
            </div>
          </div>

        </div>
      </Tab>
      <Tab eventKey="Finance and Banking" title="Finance and Banking">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              JPMorgan Chase
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Goldman Sachs

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Bank of America

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Citigroup
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3  mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Wells Fargo

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3  mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              ICICI Bank

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3  mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Barclays
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3  ">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Bandhan Bank

            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Healthcare" title="Healthcare">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3  mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Cerner Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Siemens Healthineers
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Philips Healthcare
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              McKesson Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Epic Systems Corporation

            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Government and Defense" title="Government and Defense">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Lockheed Martin
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Northrop Grumman Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Raytheon Technologies
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              BAE Systems

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Booz Allen Hamilton

            </h1>
              </div>
            </div>
          </div>

        </div>
      
      </Tab>
      <Tab eventKey="Retail and E-commerce" title="Retail and E-commerce">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Amazon Web Services (AWS)
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Walmart
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Alibaba Group
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              eBay Inc
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Shopify
            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Telecommunications" title="Telecommunications">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Verizon Communications
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              AT&T

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              T-Mobile
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Orange S.A
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Vodafone Group

            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Energy and Utilities" title="Energy and Utilities">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Siemens Energy
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Schneider Electric
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Duke Energy Corporation
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Exelon Corporation

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              General Electric (GE) Power
            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      <Tab eventKey="Manufacturing" title="Manufacturing">
      <div className={`row mt-0 pt-5 pb-5 px-5`}>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              General Motors (GM)
            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Toyota Motor Corporation

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Ford Motor Company

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Siemens AG

            </h1>
              </div>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/button-confirm.svg"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopTab} ps-3 mt-3`}>
              <h1 className={`${styles.title_text_tab} mt-2 ps-2`}>
              Bosch Group
            </h1>
              </div>
            </div>
          </div>
        </div>
      
      </Tab>
      
    </Tabs>
      </div>
      <div className="container">
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-12 col-md-6 p-4 pt-0">
            <h1 className={`${styles.title_text} mt-0`}>
            Learners Feedback
            </h1>
          </div>
        </div>

        <div className={`row mt-0 pt-0 pb-5 `}>
          <div className="col-lg-6 mb-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/feedback.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/feedback1.png" />
                  </h2>
                </p>
              </div>
             
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/feedback.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/feedback2.png" />
                  </h2>
                </p>
              </div>
             
            </div>
          </div>
          <div className="col-lg-6 mt-4 ">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/feedback.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/feedback3.png" />
                  </h2>
                </p>
              </div>
             
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className={styles.positionRealtive}>
              <img
                src="./collbrator/feedback.png"
                className={styles.positionRealtive}
              />
              <div className={`${styles.indexTopThird} ps-5 mt-4`}>
                <p className={styles.title_p}>
                  <h2 className={styles.organisationImage}>
                    <img src="./collbrator/feedback4.png" />
                  </h2>
                </p>
              </div>
             
            </div>
          </div>
          </div>
          <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-12 col-md-6 p-4 pt-0 mb-5">
            <h1 className={`${styles.title_text} mt-2`}>
            We are Growing!
            </h1>
          </div>
        </div>

          <CompanyLogoSlider reverseDirection={false} extraPadding={false}  />
      <CompanyLogoSlider reverseDirection={true} extraPadding={true} />

      </div>
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
        
      </section>
      <ReviewFooter />
      </section>
    </>
  );
}

export default AcademicCollbration;
