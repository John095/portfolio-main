import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import contact data
import { contact } from "../data";

const serviceId = "service_v0997pp";
const templateId = "template_bik8vt9";
const userId = "YAOmsCCEAkM_ETgkJ";

const Contact = () => {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
  });

  const [validation, setValidation] = useState({
    name: "",
    email: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;

    //first Name validation
    if (!inputValues.name.trim()) {
      errors.name = "Your name is required!";
    } else {
      errors.name = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required!";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please input a valid email address";
    } else {
      errors.email = "";
    }

    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setIsFormSubmitted(true);
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            I am ready to assist you in way. Feel free to contact me.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {!isFormSubmitted ? (
            <form
              className="space-y-8 w-full max-w-[780px]"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex flex-col gap-2">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={inputValues.name}
                  onChange={(e) => handleChange(e)}
                />
                {validation.name && (
                  <p className="text-red-700 text-sm">{validation.name}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={inputValues.email}
                  onChange={(e) => handleChange(e)}
                />
                {validation.email && (
                  <p className="text-red-700 text-sm">{validation.email}</p>
                )}
              </div>
              <input
                className="input"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="textarea"
                name="message"
                placeholder="Your message"
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="text-white px-5 py-2 cursor-pointer rounded-md bg-accent hover:bg-secondary-hover"
              />
            </form>
          ) : (
            <div className="py-4 px-4 h-[60px] rounded-lg">
              <h3 className="text-xl text-green-600">
                <span>Thank You</span> for getting in touch. I'll get back to
                you soon.
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
