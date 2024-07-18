
import {
  Navbar,
  ReviewFooter,
  Footer
} from "../components";
import styles from "./css/PrivacyPolicy.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import './css/PrivacyPolicy.module.css';
import { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <section className={styles.dataMerger}>
        <h1 className={styles.weStrengthenOrganisationContainer}>
          <p className={styles.weStrengthen}>PRIVACY POLICY</p>
        </h1>
        </section>
    <div className="container mt-5 pt-4">
        <section className={styles.span_disc}>
        <p className={ `${styles.p_tags} text-white`}>
        <strong>Privacy Policy:</strong><br/><br/>
        
Last updated: 11th November 2022 BlackPerl DFIR operates https://blackperldfir.comThis privacy policy sets out how we use and protect any information that you give BlackPerl DFIR when you use this website.
<br/><br/>
BlackPerl DFIR is committed to ensuring that your privacy is protected. Should BlackPerl DFIR ask you to provide certain information by which you can be identified when using this website or at the time of workshop registration then you can be assured that it will only be used in accordance with this privacy statement.
<br/><br/>
BlackPerl DFIR may change this policy by updating this page. You should check this page from time-to-time to ensure that you are happy with any changes. This policy is effective from November 2022.
<br/><br/><br/>
<strong>What we collect?</strong><br/><br/>
BlackPerl DFIR collects information for the following purposes: For marketing and general business communication:
<br/><br/><br/>
# Name and job title, contact information including your email address and telephone number.<br/><br/>
# Demographic information such as postcode and postal address.<br/><br/>
# The source of this information will be directly from the individual concerned.<br/><br/><br/>
For employment opportunities:
<br/><br/><br/>
# Your CV, references and employment details.<br/><br/>
# Credit and criminal reference checks.<br/><br/>
# The source of this information will be directly from the individual concerned and from relevant third parties (such as former employers).
<br/><br/>Any information collected will only be used for the legitimate reasons described above and will only be used by authorized internal BlackPerl DFIRresources. Disclosure of information to third parties will only take place as part of a specified process (such as pre-employment checks).
<br/><br/><br/>
<strong>Who do we collect information on?</strong><br/><br/>
BlackPerl DFIR will collect information on the following:<br/><br/>
# Staff (former, existing and potentially new).<br/><br/>
# Clients, Students (existing and potentially new).<br/><br/>
# Business contacts and suppliers.<br/><br/>
What we do with the information we gather?<br/><br/>
BlackPerl DFIR requires this information to understand your needs and provide you with a better service and in particular for the following reasons:
<br/><br/># Internal record keeping.<br/><br/>
# We may use the information to improve our products and services.<br/><br/>
# We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
<br/><br/># From time-to-time, we may also use your information to contact you for market research purposes.
<br/><br/># We may contact you by email, phone; but we will not use the information to customize the website according to your interests.
<br/><br/>Unless where required to keep information for statutory reasons, records will be deleted when they are no longer required. BlackPerl DFIR retains records for a maximum of 5 years.
<br/><br/><br/>
<strong>Security</strong><br/><br/>
BlackPerl DFIR is committed to ensuring that your information is secure. To prevent unauthorized access or disclosure, BlackPerl DFIR has put in place suitable physical, electronic and managerial procedures to safeguard and secure the information collected.All personal information collected is stored in electronic format within our secure local environment.
<br/><br/><br/>
<strong>Log Data</strong><br/><br/>

Like many site operators, we collect information that your browser sends whenever you visit our Site in the webserver logs.This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit,the time spent on those pages and other statistics.In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.
<br/><br/><br/>
<strong>Cookies</strong><br/><br/>
Cookies are files with small amount of data, which may include an anonymous unique identifier.Cookies are sent to your browser from a web site and stored on your computer's hard drive.Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.

<br/><br/><br/>
<strong>
Controlling your personal information</strong><br/><br/>

You may choose to restrict the collection, use or request that your personal information is deleted by contacting BlackPerl DFIR.
<br/><br/>
If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at support@blackperldfir.com
<br/><br/>
BlackPerl DFIR will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
<br/><br/>
You may request details of personal information which BlackPerl DFIR hold about you under the Data Protection Act and General Data Protection Regulation (Regulation (EU) 2016/679). If you would like a copy of the information held on you please write to BlackPerl DFIRS.M Platina, KadaAgrahara, Off Sarjapura Road, Bangalore- 562125 or you can email us at support@blackperldfir.comUnless otherwise specified, BlackPerl DFIR will provide the information in electronic format.Please note that we will respond to your request within 30 days.
<br/><br/>
If you believe that any information BlackPerl DFIR are holding on you is incorrect, incomplete or wish for it to be deleted, pleasewrite to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
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

export default PrivacyPolicy;
