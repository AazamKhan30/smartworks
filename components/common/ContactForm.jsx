"use client";
import Image from 'next/image';
import React, { useState, ChangeEvent, FormEvent } from "react";
import contactImg from '../../public/images/contactImg.jpg'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here.
    console.log("Form submitted:", formData);
  };
  return (
    <section className="contactSec py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-12 pe-5">
            <div className="contact-image">
              <Image src={contactImg} alt="contact" width={621} height={875} />
            </div>
          </div>

          <div className="col-lg-7 col-md-12 position-relative ps-5">
            <div className="contactForm">
              <div className="sectionTitle">
                <span>CONTACT</span>
                <h2>Looking for office<br/> space in this building?</h2>
              </div>

              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>
                        YOUR NAME<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                          onChange={handleChange}
                        className="form-control"
                        placeholder="Lorem ipsum"
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        EMAIL ADDRESS<span>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="loremipsum@gmail.com"
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        PHONE NO<span>*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="+0 321 546 2345"
                      />
                    </div>

                    {/* <div className="form-group">
                      <label>
                        YOUR MESSAGE HERE<span>*</span>
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div> */}
                    <div className="form-text form-group">
                      We're here to help and answer any questions you might
                      have. We look forward to hearing from you.
                    </div>

                    <button type="submit" className="siteBtn">
                      Send Message Now
                    </button>
                  </form>
                </div>

                <div className="col-lg-5 col-md-6 h-100">
                  <ul className="contact-info-list single">
                    <li>
                      <span>ADDRESS</span>
                      Tower C, Andheri - Kurla Rd, Chimatpada, Marol, Andheri
                      East, Mumbai, Maharashtra 400056
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm