import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 px-6 pt-30 pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary">About StyleDecor</h1>
          <p className="mt-4 text-base-content/70">
            Designing Moments with Style, Simplicity, and Technology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Who We Are</h2>
              <p className="text-base-content/80">
                StyleDecor is a modern decoration service and appointment
                management platform. We provide professional decoration
                services for homes, ceremonies, and special events through
                both in-studio consultation and on-site services.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Our Mission</h2>
              <p className="text-base-content/80">
                Our mission is to simplify decoration booking by combining
                traditional craftsmanship with modern technology, ensuring
                a smooth, transparent, and stress-free experience for users.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Why Choose StyleDecor?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow">
              <div className="card-body items-center text-center">
                <h3 className="font-bold">Easy Booking</h3>
                <p className="text-sm text-base-content/70">
                  Book decoration services easily with date and time
                  selection.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow">
              <div className="card-body items-center text-center">
                <h3 className="font-bold">Secure Payments</h3>
                <p className="text-sm text-base-content/70">
                  Safe and secure online payment system for all services.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow">
              <div className="card-body items-center text-center">
                <h3 className="font-bold">Service Tracking</h3>
                <p className="text-sm text-base-content/70">
                  Track booking status and payment history from your
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Line */}
        <div className="mt-14 text-center">
          <p className="text-lg font-medium text-primary">
            StyleDecor - Making Your Moments Memorable
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
