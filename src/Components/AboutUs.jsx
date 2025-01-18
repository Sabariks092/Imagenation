import React from 'react';
import { assets } from '../assets/assets';

const AboutUs = () => {
  return (
    <section className="container py-5">
      <hr style={{ color: "white" }} />

      <h1 className="text-white text-center my-5">About Us</h1>
      <div className="row d-flex">
        {/* Left Column: Image */}
        <div className="col-md-6 text-center d-flex justify-content-end pe-5 mb-4 mb-md-0">
          <img
            width={320}
            style={{boxShadow:"2px 2px 16px white"}}
            src={assets.sample_img_1} // Replace with your image URL
            alt="Creative Image"
            className="img-fluid rounded"
          />
        </div>
        {/* Right Column: Text */}
        <div className="col-md-6 text-center text-md-start">
        <p className="text-white">
  Welcome to <strong>Imagenation</strong>, your creative partner in bringing ideas to life!
  Whether you're a designer, marketer, or just someone looking to visualize a dream,
  our cutting-edge AI transforms words into stunning images with just a few clicks.
</p>
<p className="text-white">
  At <strong>Imagenation</strong>, we're passionate about empowering creativity and simplifying workflows.
  With a user-friendly interface and high-quality outputs, we aim to redefine how you create,
  explore, and share visual content.
</p>
<p className="text-white">
  Our team of experts is constantly working on improving and innovating our AI technology to ensure that it stays ahead of the curve.
  We believe in providing our users with the most intuitive and efficient tools to turn their ideas into reality.

</p>

        </div>
      </div>
      <hr className="my-5" style={{ color: "white" }} />
    </section>
  );
};

export default AboutUs;
