export default function Contact(props) {
  function handleInputChange(e) {
    console.log("hello");
    props.setContactInfo(e.target.value);
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
            value={props.contactInfo}
            onChange={handleInputChange}
          />
        </form>

        <p>Right now, your name is {props.contactInfo}.</p>
      </div>
    </>
  );
}
