// ContactForm.js
import React, { useState } from "react";
import "./ContactMe.css"; // Import the CSS file

const FORM_ENDPOINT = "https://public.herotofu.com/v1/582e60e0-8d3d-11ee-9a51-8b71ed28739b";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <><div className="thankYouContainer">
        <h2>¡Gracias!</h2>
        <div>Me pondré en contacto pronto.</div>
        </div>
      </>
    );
  }

  return (
    <div className="myContainer">
    <form className="myForm" action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div>
        <input className="myInput" type="text" placeholder="Tu nombre" name="name" required />
      </div>
      <div>
        <input className="myInput" type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea className="myInput" placeholder="Tu mensaje" name="message" required />
      </div>
      <div>
        <button className="myButton" type="submit">
          Enviar
        </button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
