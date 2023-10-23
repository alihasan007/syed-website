import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4">
      <form method="POST"
        action="https://getform.io/f/c5fc2574-e843-43d3-b1d0-d3e65bdecbb1"
        className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contacts
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            syedalihasan10@gmail.com
          </p>
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="message"
          id=""
          col="30"
          row="10"
        />
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto my-8 flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
