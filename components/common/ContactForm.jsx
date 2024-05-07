"use client";
import Image from 'next/image';
import React, { useState} from "react";
import contactImg from '../../public/images/contact.jpg'

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
    <section className="contactSec py80 bg-white" id='contactForm'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12 pe-md-5">
            <div className="contact-image mb-3 mb-md-0">
              <Image src={contactImg} alt="contact" width={658} height={561} />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 position-relative ps-md-5">
            <div className="contactForm">
              <div className="sectionHeader mb-0">
              <div className="sectionTitle">
               <h2>Looking for office<br/> space in this building?</h2>
              </div>
              </div>
               <div className="row align-items-center">
                <div className="col-lg-8 col-md-6">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                     
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                          onChange={handleChange}
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="form-group">
                  
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Email ID"
                      />
                    </div>

                    <div className="form-group">
                 
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Phone Number"
                      />
                    </div>

                 
                    <div className="form-text form-group my-3">
                    We're here to help and answer any questions you might have. We look forward to hearing from you.
                    </div>

                    <button type="submit" className="siteBtn mt-3">
                      Book a tour
                    </button>
                  </form>
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