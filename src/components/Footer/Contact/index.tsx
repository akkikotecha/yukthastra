/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OurLogoFrame: FunctionComponent = () => {

  const schema = yup
  .object({
    fullName: yup.string()
    .required("Full name is required")
    .matches(/^[A-Za-z\s]+$/, "Full name must contain only letters and spaces"),
      phoneNumber: yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    message: yup.string().required("Message is required"),
  })
  .required();

 
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      message: "",
    },
    resolver: yupResolver(schema),
    //
    mode: "all",
  });

  const onSubmit = (data:any) => {
    console.log(data)

    const templateParams = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
          message: data.message,
        };
    
        emailjs.send(
          'service_w88rxcu', // Replace with your EmailJS service ID
          'template_737vo3h', // Replace with your EmailJS template ID
          templateParams,
          'ALrrO1yCkmX3Hx990' // Replace with your EmailJS user ID
        ).then((response) => {
          
          toast.success("Mail sent Successfully")
          console.log('SUCCESS!', response.status, response.text);
          reset();

        }).catch((err) => {
          toast.error('FAILED...', err)
          reset();

        });
  }

  return (
    <div className={styles.ourLogoFrame}>
      <div className={styles.ourLogoFrameChild} />
      <div className={styles.socialMediaLinksFrame}>
        <div className={styles.socialMediaLinksFrameInner}>
          <div className={styles.getInTouchParent}>
            <h1 className={styles.getInTouchContainer}>
              <p className={styles.getIn}>{`Get In `}</p>
              <p className={styles.touch}>Touch</p>
            </h1>
            <div className={styles.contactUsButton}>
              <div className={styles.m91234}>Email :</div>
              <h3 className={styles.eHelloblackperlcom}>
                support@blackperldfir.com
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.contactForm}>
        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${styles.width_100}`}>
        <ToastContainer />

          <div className={styles.nameInputField}>
            <div className={styles.phoneNumberFrame}>
              <input
                className={styles.enterName}
                placeholder="Enter Name"
                type="text"
                {...register("fullName")}
              />

            
              {/* <div className={styles.caseClassification} /> */}
            </div>
            
          </div>
          <div className={`mt-2 text-danger block text-sm`}>
                      {errors?.fullName?.message}
                    </div>
          <div className={styles.phoneNumberSubframe}>
            <div className={styles.frameWithPhoneNumber}>
              <div className={styles.book}>+91</div>
            </div>
  
            <input
              className={styles.frameWithPhoneNumber1}
              placeholder="Phone Number"
              type="text"
              {...register("phoneNumber")}
            />
            
            
          </div>
          <div className={`mt-2 text-danger block text-sm`}>
                      {errors?.phoneNumber?.message}
                    </div>
          <textarea
            className={styles.writeHereInput}
            placeholder="Write Here"
            rows={14}
            cols={32}
            {...register("message")}
          />
           <div className={`mt-2 text-danger block text-sm`}>
                      {errors?.message?.message}
                    </div>
          <div className={styles.privacyPolicyText}>
            <div className={styles.byTappingSubmitContainer}>
              <p
                className={styles.byTappingSubmit}
              >{`By tapping Submit, you agree to the following  `}</p>
              <p className={styles.privacyPolicyTermsCondi}>
              <Link to="/PrivacyPolicy"><b className={styles.privacyPolicy}>{`Privacy Policy `}</b></Link>
                <span className={styles.span}>{`&`}</span>
                <Link to="/TermAndCondition"><b
                  className={styles.termsConditions}
                >{` Terms & Conditions`}</b></Link>
              </p>
            </div>
            <button type="submit">
              <img
                className={styles.privacyPolicyTextChild}
                loading="lazy"
                alt=""
                src="/group-1171276214.svg"
              />
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OurLogoFrame;
