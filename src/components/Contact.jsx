import { useState } from "react";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState("laura");

  function handleInputChange(event) {
    setContactInfo(event.target.value);
  }

  return (
    <>
      <div>
        <p>
          Contact me for more information. Please enter your information below:
        </p>
      </div>
      <form>
        <input
          type="text"
          name="name"
          value={contactInfo}
          onChange={handleInputChange}
        />
      </form>

      <p>Right now, your name is {contactInfo}.</p>
    </>
  );
}
