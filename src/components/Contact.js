import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";
class Contact extends Component {
  render() {
    return (
      <Container>
        <section id="contact">
          <div style={{ textAlign: "center", paddingBottom: "15px" }}>
            <IconContext.Provider
              value={{
                color: "white",
                size: "2em",
                className: "global-class-name"
              }}
            >
              <div>
                <FaEnvelope />
              </div>
            </IconContext.Provider>
          </div>
          <h1>Feel free to contact us!</h1>

          <div>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ textAlign: "center" }}>
                <label htmlFor="name" hidden>
                  Name
                </label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="email" hidden>
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" hidden>
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"
                />
              </div>
              <div>
                <label />
                <input type="submit" value="Send Message" className="special" />
              </div>
              <div>
                <label />
                <input type="reset" value="Clear" />
              </div>
            </form>
          </div>
        </section>
      </Container>
    );
  }
}

export default Contact;
