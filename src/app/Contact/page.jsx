"use client";
import React from "react";

const ContactForm = () => {
  async function HandelSubmit(formData) {
    const response = await submit({
      Name: formData.get("name"),

      Email: formData.get("email"),
      Message: formData.get("message"),
    });
  }

  const Bot_token = "6065320621:AAHoi8Y2A9QXdrPF38cltXPFKCJNLi9y4GI";
  const user_id = "6081766485";

  const submit = async (data) => {
    const jsonArray = JSON.stringify(data);

    const url = `https://api.telegram.org/bot${Bot_token}/sendMessage?chat_id=${user_id}&text=${jsonArray}`;

    let api = new XMLHttpRequest();
    api.open("Get", url, true);
    api.send();
    alert("Hi yiur massage sussage full");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-netflix">
      <div className="bg-gray-900 text-white  p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form action={HandelSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
