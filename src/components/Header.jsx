export default function Header(props) {
  return (
    <header>
      <h1>Welcome to my personal portfolio site {props.contactData.name}!</h1>
      <p>I'm a web developer</p>
    </header>
  );
}
