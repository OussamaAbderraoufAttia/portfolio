"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Location from "../sub/Location";
import SocialMedia from '../sub/SocialMedia';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  name: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col text-sm">
    <span className="text-white font-medium mb-1">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-gray-800 py-1 px-2 placeholder-gray-500 text-white rounded-lg outline-none border-none font-medium text-xs"
    />
  </label>
);

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_ae8wayl",
        "template_b6fq68n",
        {
          from_name: form.name,
          to_name: "ATTIA Oussama Abderraouf",
          from_email: form.email,
          to_email: "lo_attia@esi.dz",
          message: form.message,
        },
        "T-IDc2qHa_dFqmPJK"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again. :/");
      });
  };

  return (
    <footer className="w-full bg-none p-2 text-white">
      <div>
        <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          Contact me
        </h3>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center relative">
            <div className="w-full flex flex-col justify-start px-2 mt-8">
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <p className="mb-2 text-xs">Feel free to get in touch with me via email or through the form below.</p>
                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <InputField
                      label="Your Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Insert Your name here..."
                      type="text"
                    />
                    {nameError && <span className="text-red-500 text-xs">{nameError}</span>}

                    <InputField
                      label="Email Address"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      type="email"
                    />
                    {emailError && <span className="text-red-500 text-xs">{emailError}</span>}

                    <label className="flex flex-col text-sm">
                      <span className="text-white font-medium mb-1">Your Message</span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="What you want to say...?"
                        className="bg-gray-800 py-1 px-2 placeholder-gray-500 text-white rounded-lg w-100 outline-none border-none font-medium text-xs h-16 resize-none"
                      />
                    </label>

                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-[#1d4ed8] py-1 px-4 rounded-lg outline-none text-white font-bold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                    {confirmation && <p className="text-green-500 mt-1 text-xs">{confirmation}</p>}
                  </form>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                  <div className="rounded-lg shadow-lg p-8">
                    <Location />
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500">
            Ⓒ2024 made with ❤️ and ☕ 2024Ⓒ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
