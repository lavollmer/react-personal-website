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
        <form>
          <input
            type="text"
            name="name"
            value={props.contactData.name}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="email"
            value={props.contactData.email}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="info"
            value={props.contactData.info}
            onChange={handleInputChange}
          />
        </form>

        <p>Right now, your name is {props.contactData.name}.</p>
      </div>
    </>
  );
}
