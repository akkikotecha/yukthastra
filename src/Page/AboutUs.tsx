
import {
  Navbar,
  Details,
  AboutServices,
  WhyChooseUs,
  JoinOurWorld,
  ContactForm,
  Footer,
  ReviewFooter
} from "../components";
import styles from "./css/about.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import './css/about.module.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Trainning() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <section className={styles.dataMerger}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>We strengthen</p>
          <p className={styles.organisation}>organisation</p>
        </h1>
        <div className={styles.certification}>
        <h1 className={styles.data_box}>
          <p className={styles.title_text}>Costly Certificates != True Knowledge</p>
          <p className={styles.title_disc}>We believe in equal learning opportunities around the world on InfoSec Domain. Our instructors design courses that are easily accessible to everyone and MOST Budget friendly. You can download handful resources during each course for better learning. We are dedicated to bring more courses so you can have a larger variety of courses to choose from. Our main focus is to provide you BEST KNOWLEDGE yet in Cost effective way!</p>
        </h1>
        <Link to="/GetInTouch"><button className={styles.am}>
            <b className={styles.contactUs}>Contact Us</b>
            <img className={styles.amChild} alt="" src="/group-457.svg" />
          </button></Link>
        </div>
      </section>
      <Details />
      <AboutServices />
      <WhyChooseUs/>
      <JoinOurWorld/>
      <div className="container px-5">
        <div className="row">
          <h3 className={styles.details_title}>
          MEET THE CHANGE MAKER: ARCHAN CHOUDHURY (CEO) & BLACKPERL DFIR TEAM
          </h3>
          
          <p className={styles.title_text_bottom}>Meet Archan Choudhury, a Digital Forensics-Incident Response Consultant, Instructor, and Author with
over a decade of experience in Cyber Defense. Having worked with prestigious companies like Amazon,
Uptycs, and Informatica, Archan brings a wealth of expertise to the cybersecurity landscape.
</p></div>
        <div className="row mt-3">
          <h3 className={styles.details_title}>
          Our Mission: Bridging the Gap in Cyber Defense          </h3>
          
          <p className={styles.title_text_bottom}>
With a passion for nurturing talent in cybersecurity, Archan founded BlackPerl DFIR. His mission is simple
yet profound: to provide affordable, hands-on coaching that empowers individuals to climb the ladder in
cybersecurity. BlackPerl DFIR is more than just a coaching institute; it's a community of defenders, by
defenders
</p></div>
        <div className="row mt-3">
          <h3 className={styles.details_title}>
          Why BlackPerl DFIR?
         </h3>
          
          <p className={styles.title_text_bottom}>
          <b>Hands-On Experience:</b> With over 1000 cyber incidents handled personally, Archan offers unparalleled
insights and resources to his students. Practical Approach: Archan believes in practical, real-world
learning experiences over traditional certification-based education.
</p></div>
        <div className="row mt-3">
          <h3 className={styles.details_title}>
          Recognition and Impact:
          </h3>
          
          <p className={styles.title_text_bottom}>
          BlackPerl DFIR has served over 1600 students globally, with a YouTube channel that has evolved into a
platform addressing real-world cybersecurity challenges.
</p></div>
        <div className="row mt-3">
          <h3 className={styles.details_title}>
          A Journey of Resilience and Transformation:
        </h3>
          
          <p className={styles.title_text_bottom}>
          Archan's journey from a small town in West Bengal to the forefront of cybersecurity education is a
testament to the transformative power of determination. Facing setbacks and challenges, he persevered,
leveraging his experiences to make a meaningful impact in the industry.

</p></div>
        <div className="row mt-3">
          <h3 className={styles.details_title}>
          Join Us in this Transformative Journey:
          </h3>
          
          <p className={styles.title_text_bottom}>
          At BlackPerl DFIR, we're not just educators; we're mentors, guides, and champions of your cybersecurity
career. Join us and embark on a journey of growth, learning, and empowerment. Together, let's bridge
the gap in cyber defense and shape the future of cybersecurity education.
</p></div>

</div>
      <section className={styles.reviewsAcademyGroup}>
        <ContactForm />
        <Footer />
      </section>
      <ReviewFooter />
    </>
  );
}

export default Trainning;
