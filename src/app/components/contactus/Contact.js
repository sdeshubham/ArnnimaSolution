import Image from "next/image";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contactBox" id="contact">
          <div className="contact-head">
            <h4>Contact Us</h4>
            <h2>
              Let's Collaborate Now!<span className="contact-dot"></span>
            </h2>
          </div>

          <div className="contact-form">
            <div className="contact-formBox">
              <div className="contactformInput">
                <div className="contactInputs">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                  />
                </div>
                <div className="contactInputs">
                  <label htmlFor="name">Company Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Company Name"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="contactformInput">
                <div className="contactInputs">
                  <label htmlFor="name">Email</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                  />
                </div>
                <div className="contactInputs">
                  <label htmlFor="name">Phone Number</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Phone Number"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="msg-textBox">
                <label htmlFor="name">Message</label>
                {/* <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                  placeholder="Write Message"
                  autoComplete="off"
                ></textarea> */}
                <input
                  name="message"
                  rows="4"
                  cols="50"
                  placeholder="Write Message"
                  autoComplete="off"
                ></input>
              </div>

              <div className="send-msgBtn">
                <button>Send Message</button>
              </div>
            </div>
            <div className="contact-img">
              <Image
                src={"/Contactus-image.png"}
                className="contactImage"
                alt="Main Section"
                width={655.62}
                height={573.17}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
