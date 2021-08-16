
import "./contact.scss";

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="asset/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="item">
        <h3>Send me a email to say hi or if you have any anime recommendation.</h3>
        <h4>Or if you can send any job offers that would be great too. :)</h4>
        <a class="email_button" href="mailto:matthewcheung3003@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
        </div>
      </div>
    </div>
  );
}