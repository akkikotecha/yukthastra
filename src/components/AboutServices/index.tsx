import styles from "./Services.module.css";
import Service from "./Service";
const Services = () => {
  return (
    <>
      <section className={styles.rectangleB}>
        <Service
          // groupPrivacyPolicy="pending_I0:208;133:245"
          detect="We are"
          itClosesAllTheSecuirtyGap="We believe in equal learning opportunities around the world. Our qualified instructors design courses that are easily accessible to everyone. You can download free resources during each course for better learning. We are dedicated to bring more courses so you can have a larger variety of courses to choose from."
        />
        <Service
          // groupPrivacyPolicy="pending_I0:209;133:246"
          detect="Values"
          itClosesAllTheSecuirtyGap="Our team is much more than just course builders. We aim to facilitate everyone so they achieve their learning goals. We want you to become the change makers of tomorrow so that you can inspire others around you."
        />
        <Service
          // groupPrivacyPolicy="pending_I0:210;133:247"
          detect="Mission"
          itClosesAllTheSecuirtyGap="We are an online global school making InfoSec Training accessible for everyone. Remember, costly certificate is not enough. You need to gain true knowledge and hands-on experience. Our courses will give you the best rate on investment."
        />
      </section>
    </>
  );
};

export default Services;
