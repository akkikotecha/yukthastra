
import {
  Navbar,
  ReviewFooter,
  Footer
} from "../components";
import styles from "./css/TermAndCondition.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import './css/TermAndCondition.module.css';
import { useEffect } from "react";

function TermAndCondition() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <section className={styles.dataMerger}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>TERMS OF USE</p>
        </h1>
        </section>
    <div className="container mt-5 pt-4">
        <section className={styles.span_disc}>
        <p className={ `${styles.p_tags} text-white`}>
        <strong>Introduction:</strong><br/><br/>
These BlackPerl DFIR Terms of Service, together with any documents, policies or terms that are incorporated by reference, as amended from time to time, (the “Terms of Service”) are entered into between you and BlackPerl DFIR. For purposes of these Terms of Service, the term “you” refers to the person subscribing to, accessing, viewing, using or visiting any part of theBlackPerl DFIR website (https://blackperldfir.com) or any training materials, application, program, service or product offered through the website or that refers to these Terms of Service, including without limitation, certifications, professional services and live and recorded workshops.These Terms of Service apply to users who are individuals. Users who are entities or other businesses will use the Business Plans Terms of Service available below
<br/><br/><br/>

<strong>Acceptance:</strong><br/><br/>

Thank you for visiting blackperldfir.com website. Please read these Terms of Use carefully before using this website. By accessing this website in any manner (whether automated or otherwise), you agree to be bound by these Terms of Use, our Privacy Policy, any additional terms and conditions that are referenced below, and any additional terms and conditions that otherwise may apply to specific areas of this site.
<br/><br/>
You represent that you are legally able to accept these Terms of Use, and affirm that you are either of legal age to form a binding contract, or have obtained parental or guardian consent to do so. If you do not agree to these Terms of Use, you may not use this site.
<br/><br/>
We reserve the right to change these Terms of Use at any time. Such changes will be effective when posted. By continuing to use the site after we post any such changes, you accept the Terms of Use as modified.
<br/><br/><br/>
<strong>You agree that you will not:</strong><br/><br/>
# Upload or transmit any communications or content of any type that may infringe or violate any rights of any party.<br/>
# Use this website for any purpose in violation of local, state, national or international laws.<br/>
# Use this site as a means to distribute unsolicited material to any third party.<br/>
# Use this website to post or transmit material that is unlawful, obscene, defamatory, threatening, harassing, abusive, slanderous, hateful or embarrassing to any other person or entity.<br/>
# Attempt to disable, "hack" or otherwise interfere with the proper functioning of this website.<br/><br/>

You also must comply with all applicable laws and contractual obligations when you use this site<br/><br/>
<br/>
<strong>Payment Terms:</strong>
<br/><br/>
Course fees, workshop fees for Individual Plans are paid via razorpay gateway, UPI or Paypal. Acceptance of any alternate forms of payment for any Software Products are at the sole discretion ofBlackPerl DFIR. Please reach out to support@blackperldfir.com if you need an alternative form of payment.Discounts and other promotional offers may only be valid for initial term. BlackPerl DFIR may increase fees for a subsequent course at any time and for any reason. BlackPerl DFIR may terminate the access to a particular course at any point in time due to any issues such as malpractice, violation of copyright law, due to any issue with credit card processing, including but not limited to inaccurate or outdated credit card information.
<br/><br/>
All course, workshops fees are final and non-refundable. If due to any technical or unforeseen reason any live workshop gets cancelled, BlackPerl DFIR holds the right to adjust the fees to any upcoming workshops.
<br/><br/><br/>

<strong>Restrictions on Use:</strong><br/><br/>
You must not decompile, record, share, download or otherwise attempt to get access on the course content by any malformed way.
<br/><br/><br/>
<strong>Restrictions on Transfer:</strong><br/><br/>
You must not transfer your course access to any other person at any point in time. If any such situation found, BlackPerl DFIR holds the right to revoke your access on the learning platform without any prior notice.
<br/><br/><br/>
<strong>Feedback:</strong><br/><br/>
We welcome and encourage you to provide feedback, comments, complaints and suggestions for improvements to any courses. You acknowledge and agree that any and all feedback provided by way of any course or BlackPerl DFIR Forum or otherwise will be the sole and exclusive property of BlackPerl DFIR, and you hereby irrevocably assign to us and agree to irrevocably assign to us all of your right, title, and interest in and to all feedback, including without limitation all worldwide patent rights, copyright rights, trade secret rights, and other proprietary or intellectual property rights therein.
<br/><br/><br/>
<strong>Termination and Cancellation:</strong><br/><br/>
You agree that BlackPerl DFIR may, in its sole discretion, terminate your use of the BlackPerlDFIR course website for any reason or no reason, and without notice to you and that none ofBlackPerl DFIR affiliates, employees, officers, members, managers or suppliers shall have any liability to you for any such termination.

        </p>

          </section>
      
          </div>

          <section className={styles.reviewsAcademyGroup}>
        
        <Footer />
      </section>
      <ReviewFooter />
    </>
  );
}

export default TermAndCondition;
