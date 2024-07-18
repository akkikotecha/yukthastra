import {
  Navbar,
  ContactForm,
  Footer,
  SecurityAnalyst,
  ThreatHunting,
  CloudSecurity,
  ReviewFooter,
  DigitalForensics,
  MalwareAnalysis,
  DefenderLabs,
  DefendersCheatSheets,
  CourseBundles

} from "../components";
import styles from "./css/Certification.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "./css/Certification.module.css";
import { useEffect } from "react";

function LiveTrainning() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <section className={styles.dataMerger}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>CERTIFICATIONS</p>
        </h1>
      </section>
      <div className="container mt-0 pt-0">
        <div className="row text-center">
          <h2 className={styles.organisation}>
            Want to save more money, go for our subscription
          </h2>
        </div>
      </div>

      <div className={`container mt-0 pt-0 mb-5 pb-0 ${styles.containerSet} ${styles.DesktopShow}`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-3 col-md-6 p-4 pt-5">
          <h2 className={styles.priceTag}>
          1,999INR<span> / month</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
            1 Months
          </h2>
          <p className={styles.priceDisTag}>
          
          <ul style={{"listStyle": "outside","paddingLeft":"1rem"}} className={styles.UlCertificare}>
              <li>Access to our entire academy(Course, Lab, Certification) for one month.  </li>
              <li>Billing renews monthly unless cancelled.</li>
              <li>This is a subscription product billed on a monthly basis until you cancel. </li>
              <li>Cancel anytime. </li>
              <li>Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.</li>
            </ul>
          </p>

          <div className="text-center">
          <button className={`btn btn-warning mx-auto  ${styles.PriceChooseButton}`} >Choose plan</button>
          </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4  pb-5 pt-5">
          <h2 className={styles.priceTag}>
          4,999INR<span> / 3 months</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
          3 Month (Save 998INR)
          </h2>
          <p className={styles.priceDisTag}>
            <ul style={{"listStyle": "outside","paddingLeft":"1rem"}} className={styles.UlCertificare}>
              <li>Access to our entire academy(Course, Lab, Certification) for three months. </li>
              <li>Billing renews 3 monthly unless cancelled. </li>
              <li>This is a subscription product billed on a monthly basis until you cancel. </li>
              <li>Cancel anytime. </li>
              <li>Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.</li>
            </ul>
          </p>

          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className="col-lg-3 col-md-6 p-4   pb-5 pt-5">
          <h2 className={styles.priceTag}>
          8,999INR<span> / 6 months</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
          6 Month (Save 2995INR)
          </h2>
          <p className={styles.priceDisTag}>
          <ul style={{"listStyle": "outside","paddingLeft":"1rem"}} className={styles.UlCertificare}>
              <li>Access to our entire academy(Course, Lab, Certification) for three month.  </li>
              <li> Billing renews 6 monthly unless cancelled.</li>
              <li>This is a subscription product billed on a monthly basis until you cancel. </li>
              <li>Cancel anytime. </li>
              <li>Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.</li>
            </ul>

          </p>
          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className={`col-lg-3 col-md-6 p-4 pt-5  ${styles.PopularSet}`}>
          <div className="text-right mb-4">
          <span className={styles.populartext}>
          MOST POPULAR
          </span>
          </div>
          <h2 className={styles.PopularpriceTag}>
          17,999INR<span> / year</span>
          </h2>
          <h2 className={styles.PopularpriceMonthTag}>
          12 Month (Save 5,989INR)
          </h2>
          <p className={styles.PopularpriceDisTag}>
          <ul style={{"listStyle": "outside","paddingLeft":"1rem"}} className={styles.UlCertificare}>
              <li>Access to our entire academy(Course, Lab, Certification) for three months. </li>
              <li>Billing renews yearly unless cancelled.</li>
              <li>This is a subscription product billed on a monthly basis until you cancel. </li>
              <li>Cancel anytime. </li>
              <li>Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.</li>
            </ul>
          </p>
          <div className="text-center">
          <button className={`btn btn-warning mx-auto ${styles.PopularPriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
        </div>
      </div>
      <div className={`container mt-0 pt-0 mb-4 pb-0 ${styles.marginBottomSet} ${styles.containerSet} ${styles.mobileShow}`}>
        <div className={`row ${styles.postionSetRelative}`}>
          <div className="col-lg-3 col-md-6 pt-5">
          <h2 className={styles.priceTag}>
          1,999INR<span> / month</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
            1 Months
          </h2>
          <p className={styles.priceDisTag}>
          
          <ul style={{"listStyle": "outside","paddingLeft":"1rem"}} className={styles.UlCertificare}>
              <li>Access to our entire academy(Course, Lab, Certification) for one month.  </li>
              <li>Billing renews monthly unless cancelled.</li>
              <li>This is a subscription product billed on a monthly basis until you cancel. </li>
              <li>Cancel anytime. </li>
              <li>Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.</li>
            </ul>
          </p>

          <div className="text-center">
          <button className={`btn btn-warning mx-auto mt-3 ${styles.PriceChooseButton}`} >Choose plan</button>
          </div>
          </div>
          <div className="col-lg-3 col-md-6  mt-4 pt-5">
          <h2 className={styles.priceTag}>
          4,999INR<span> / 3 months</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
          3 Month (Save 998INR)
          </h2>
          <p className={styles.priceDisTag}>
            <ul style={{"listStyle": "outside","paddingLeft":"1rem"}} className={styles.UlCertificare}>
              <li>Access to our entire academy(Course, Lab, Certification) for three months. </li>
              <li>Billing renews 3 monthly unless cancelled. </li>
              <li>This is a subscription product billed on a monthly basis until you cancel. </li>
              <li>Cancel anytime. </li>
              <li>Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.</li>
            </ul>
          </p>

          <div className="text-center">
          <button className={`btn btn-warning mx-auto  mt-3 ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className="col-lg-3 col-md-6  mt-4 pb-5 pt-5">
          <h2 className={styles.priceTag}>
          8,999INR<span> / 6 months</span>
          </h2>
          <h2 className={styles.priceMonthTag}>
          6 Month (Save 2995INR)
          </h2>
          <p className={styles.priceDisTag}>
          <ul style={{"listStyle": "outside","paddingLeft":"1rem"}} className={styles.UlCertificare}>
              <li>Access to our entire academy(Course, Lab, Certification) for three month.  </li>
              <li> Billing renews 6 monthly unless cancelled.</li>
              <li>This is a subscription product billed on a monthly basis until you cancel. </li>
              <li>Cancel anytime. </li>
              <li>Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.</li>
            </ul>

          </p>
          <div className="text-center">
          <button className={`btn btn-warning mx-auto  mt-3 ${styles.PriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
          <div className={`col-lg-3 col-md-6   mt-4  ${styles.PopularSetMobile}`}>
          <div className="text-right mb-4">
          <span className={styles.populartext}>
          MOST POPULAR
          </span>
          </div>
          <h2 className={styles.PopularpriceTag}>
          17,999INR<span> / year</span>
          </h2>
          <h2 className={styles.PopularpriceMonthTag}>
          12 Month (Save 5,989INR)
          </h2>
          <p className={styles.PopularpriceDisTag}>
          <ul style={{"listStyle": "outside","paddingLeft":"1rem"}} className={styles.UlCertificare}>
              <li>Access to our entire academy(Course, Lab, Certification) for three months. </li>
              <li>Billing renews yearly unless cancelled.</li>
              <li>This is a subscription product billed on a monthly basis until you cancel. </li>
              <li>Cancel anytime. </li>
              <li>Subscription Plan doesn’t include our Engagement Program. i.e. Cyber Career Surge aka BCAD.</li>
            </ul>
          </p>
          <div className="text-center">
          <button className={`btn btn-warning mx-auto mt-3 mb-4 ${styles.PopularPriceChooseButton}`}>Choose plan</button>
          </div>
          </div>
        </div>
      </div>

      <SecurityAnalyst />
      <ThreatHunting />
      <CloudSecurity />

      
      <DigitalForensics />
      <MalwareAnalysis />
      <DefenderLabs />
      <DefendersCheatSheets />
      <CourseBundles />
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
    </>
  );
}

export default LiveTrainning;
