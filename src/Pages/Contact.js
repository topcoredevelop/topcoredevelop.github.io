import React from "react";
import { contactDetails } from "../Details";
import telegramimage from "../assets/techstack/telegram.png"
function Contact() {
  const { email, telegram } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      {/* <span className="text-center text-content text-xl font-light block">or</span>
      <image src={telegramimage}></image>
      <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${telegram}`}>{telegram}</a>
      </h3> */}
    </main>
  );
}

export default Contact;
