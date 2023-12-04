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

  return (
    <>
      <div>
        <p>
          Contact me for more information. Please enter your information below:
        </p>
      </div>
      <div>
        <p>Hello {props.contactData.name}!</p>
        <form>
          <p>Please enter your name:</p>
          <input
            type="text"
            name="name"
            value={props.contactData.name}
            onChange={handleInputChange}
          />
          <p>Please enter your email, {props.contactData.name}:</p>
          <input
            type="text"
            name="email"
            value={props.contactData.email}
            onChange={handleInputChange}
          />
          <p>Please enter your question, {props.contactData.name}:</p>
          <textarea
            name="info"
            value={props.contactData.info}
            onChange={handleInputChange}
          />

          <button>Submit Info</button>
        </form>
      </div>
    </>
  );
}
