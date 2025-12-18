import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 pt-30">
      {/* Hero */}
      <div className="bg-linear-to-r from-primary to-secondary text-primary-content py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto">
            Have questions or need decoration services? Get in touch with
            StyleDecor—we’re here to help you plan your perfect moments.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-11/12 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-base-content/80 mb-6">
              Reach out to us for bookings, consultations, or any questions
              regarding our decoration services.
            </p>

            <div className="space-y-4">
              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <h3 className="font-semibold">📍 Address</h3>
                  <p className="text-base-content/70">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <h3 className="font-semibold">📞 Phone</h3>
                  <p className="text-base-content/70">+880 1856 689693</p>
                </div>
              </div>

              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <h3 className="font-semibold">✉ Email</h3>
                  <p className="text-base-content/70">support@styledecor.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="card-title mb-4">Send Us a Message</h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />

                <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>

                <button className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
