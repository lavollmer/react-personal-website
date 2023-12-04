import "../assets/css/contact.css";
import Alert from "./Alert";
import React from "react";

export default function Contact(props) {
  // function handleInputChange(e) {
  //   if (e.target.name === "name") {
  //     //cloning contactData and updating the target value of name
  //     //destructuring the original part
  //     props.setContactData({ ...props.contactData, name: e.target.value });
  //   } else if (e.target.name === "email") {
  //     props.setContactData({ ...props.contactData, email: e.target.value });
  //   } else {
  //     props.setContactData({ ...props.contactData, info: e.target.value });
  //   }
  // }

  function handleInputChange(e) {
    props.setContactData({
      ...props.contactData,
      [e.target.name]: e.target.value,
    });
  }

  //alerts user to fill out form when input field is out of focus
  const handleBlur = (e) => {
    window.alert("Please finish filling out the form! Thank you!");
  };

  return (
    <>
      <div className="contact-me-form">
        <div className="contactme">
          <p>
            Contact me for more information. Please enter your information
            below.
          </p>
        </div>
        <div className="input-info">
          <form>
            <p>Please enter your name:</p>
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              value={props.contactData.name}
              onChange={handleInputChange}
            />
            <p>Please enter your email {props.contactData.name}:</p>
            <input
              type="text"
              name="email"
              onBlur={handleBlur}
              value={props.contactData.email}
              onChange={handleInputChange}
            />
            <p>Please enter your question {props.contactData.name}:</p>
            <textarea
              name="info"
              onBlur={handleBlur}
              value={props.contactData.info}
              onChange={handleInputChange}
            />

            <button className="button">Submit Info</button>
          </form>
        </div>
      </div>
    </>
  );
}
