/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";
import styles from "./GetInTouchForm.module.css";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const GetInTouchForm: FunctionComponent = () => {
  const schema = yup
  .object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    query: yup.string().required("Query is required"),
    message: yup.string().required("Message is required"),
    email: yup.string().email("Invalid email").required("Email ID is required"),
  })
  .required();

 
  const {
    register,
    formState: { errors },
    handleSubmit, reset
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      query: "",
      message: "",
    },
    resolver: yupResolver(schema),
    //
    mode: "all",
  });

  const onSubmit = (data:any) => {
    console.log(data)

    const templateParams = {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          query: data.query,
          message: data.message,
        };
    
        emailjs.send(
          'service_w88rxcu', // Replace with your EmailJS service ID
          'template_c1yrhdm', // Replace with your EmailJS template ID
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
    
    <section className={`container-fluid ${styles.callToActionWrapperMargin}`}>
      <div className="row mb-5 align-self-start">
        <div className="col-lg-6 px-0">
        <div className="map-container">
        <div className={`map ${styles.map_wdith}`}>

  <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4551165681614!2d77.74910980426615!3d12.94270349049472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d9f7fc7320d%3A0x6f922fb8c2b9c2b2!2sSamudri%20nilaya!5e0!3m2!1sen!2sin!4v1713423621140!5m2!1sen!2sin&night_mode=true" width="100%" height="680"  loading="lazy"  style={{"filter": "invert(90%)"}}></iframe>
  <div className="zoom-controls">
          {/* <button className="zoom-in">+</button>
                  <button className="zoom-out" >-</button> */}
        </div>
</div>
</div>

        </div>
        <div className="col-lg-6 ps-5">
          <h1 className={styles.title_text}>Get in touch</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
  <div className={styles.contactForm}>
    <div className="row px-0 w-100">
      <div className="col-lg-6 paddingSetLG">
        <input
          className={`${styles.enterName} ${styles.enyerSecondNameWidth}`}
          placeholder="First Name"
          type="text"
          {...register("firstname")}
        />
        <div className={`mt-2 text-danger block text-sm`}>
          {errors?.firstname?.message}
        </div>
      </div>
      <div className={`${styles.paddingSetLGRightSet} col-lg-6 paddingSetLGRight`}>
        <input
          className={`${styles.enterName} ${styles.enyerSecondName}`}
          placeholder="Last Name"
          type="text"
          {...register("lastname")}
        />
        <div className={`mt-2 text-danger block text-sm`}>
          {errors?.lastname?.message}
        </div>
      </div>
    </div>

    <div className="row w-100">
      <input
        className={styles.enterName}
        placeholder="Email Address"
        type="text"
        {...register("email")}
      />
      <div className={`mt-2 text-danger block text-sm`}>
        {errors?.email?.message}
      </div>
    </div>

    <div className="row w-100">
      <input
        className={styles.enterName}
        placeholder="Your Query"
        type="text"
        {...register("query")}
      />
      <div className={`mt-2 text-danger block text-sm`}>
        {errors?.query?.message}
      </div>
    </div>

    <div className="row w-100">
      <textarea
        className={styles.writeHereInput}
        placeholder="Your Message Here"
        {...register("message")}
      />
      <ToastContainer />
      <div className={`mt-2 text-danger block text-sm`}>
        {errors?.message?.message}
      </div>
    </div>

    <div className={styles.privacyPolicyText}>
      <div className={styles.byTappingSubmitContainer}>
        <p className={styles.byTappingSubmit}>
          {`By tapping Submit, you agree to the following `}
        </p>
        <p className={styles.privacyPolicyTermsCondi}>
          <Link to="/PrivacyPolicy">
            <b className={styles.privacyPolicy}>{`Privacy Policy `}</b>
          </Link>
          <span className={styles.span}>{`&`}</span>
          <Link to="/TermAndCondition">
            <b className={styles.termsConditions}>{` Terms & Conditions`}</b>
          </Link>
        </p>
      </div>
      <button className={styles.am} type="submit">
        <b className={styles.contactUs}>Submit</b>
        <img className={styles.amChild} alt="" src="/group-457.svg" />
      </button>
    </div>
  </div>
</form>


        </div>
        </div>
        
    </section>
  );
};

export default GetInTouchForm;
