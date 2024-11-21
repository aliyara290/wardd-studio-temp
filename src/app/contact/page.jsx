"use client";
import style from "@/styles/contact/contactForm.module.css";
import { useState } from "react";
import Head from "next/head";


// export const metadata = {
//   description: "Get in touch with Stretchedweb for your digital needs. We're here to help!",
//   title: 'Contact - Stretchedweb',
// };
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true); // Simulate successful submission after a delay
    }, 1000); // Adjust the delay as needed
  };
  const handleReset = () => {
    setSubmitted(false); // Reset the form state
  };
  return (
    <>
      <section className={style.content}>
        {submitted ? (
          <div className={style.success_message}>
            <div className={style.message_content}>
              <h1>Success</h1>
              <p>Thanks for your message, we’ll be in touch within 24 hours.</p>
              <button onClick={handleReset}>
                <span>Start again</span>
              </button>
            </div>
          </div>
        ) : (
          <div className={style.container}>
            <div className={style.form_content}>
              <div className={style.form_left_part}>
                <div className={style.form_heading}>
                  <div className={style.splite}>
                    <div>A</div>
                    <div>L</div>
                    <div className="pr-4">L</div>
                    <div>S</div>
                    <div>E</div>
                    <div className="pr-4">T</div>
                  </div>
                  <div className={style.splite}>
                    <div>T</div>
                    <div className="pr-4">O</div>
                    <div>C</div>
                    <div>R</div>
                    <div>E</div>
                    <div>A</div>
                    <div>T</div>
                    <div>E</div>
                  </div>
                  <div className={style.splite}>
                    <div>W</div>
                    <div>O</div>
                    <div>N</div>
                    <div>D</div>
                    <div>E</div>
                    <div>R</div>
                    <div>S</div>
                    <div>?</div>
                  </div>
                </div>
                <div className={style.drop_line}>
                  <div className={style.link}>
                    <button>
                      <a href="mailto:hello@stretched.com?subject=Drop%20us%20a%20line">
                        Drop us a line
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className={style.form_right_part}>
                <div className={style.contact_form}>
                  <form action="" onSubmit={handleSubmit}>
                    <div className={`${style.bs_grid}`}>
                      <input
                        type="text"
                        name="fname"
                        placeholder="First Name *"
                        required
                        id="fname"
                      />
                      <input
                        type="text"
                        name="lname"
                        placeholder="Last Name *"
                        required
                        id="lname"
                      />
                    </div>
                    <div className={`${style.bs_grid}`}>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number *"
                        required
                        id="phone"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required
                        id="email"
                      />
                    </div>
                    <div className={`${style.bs_grid}`}>
                      <input
                        type="text"
                        name="country"
                        placeholder="Country [ optional ]"
                        id="country"
                      />
                      <input
                        type="text"
                        name="budget"
                        placeholder="Budget [ optional ]"
                        id="budget"
                      />
                    </div>
                    <div className={`${style.ms_sb}`}>
                      <textarea
                        name="detail"
                        rows="4"
                        placeholder="Your message here..."
                        id="message"
                      ></textarea>
                    </div>
                    <div className={`${style.ms_sb}`}>
                      <button type="submit" className={style.submit}>
                        <span>Submit</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
