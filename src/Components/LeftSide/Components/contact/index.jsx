function Contact(props) {
  return (
    <div className="Contact">
      <h2>Contact</h2>
      <p>
        <b>Email id:</b>{props.email}
      </p>
      <p>
        <b>Mobile no :</b>{props.mobile}
      </p>
    </div>
  );
}

export default Contact;
