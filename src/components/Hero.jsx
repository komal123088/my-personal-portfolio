import { IoDownloadOutline } from "react-icons/io5";

import img from "../assets/img/img.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img-bx">
        <img src={img} alt="" />
      </div>

      <div className="hero-content">
        <div className="hero-content-wrapper">
          <p className="title">Full Stack Developer</p>
          <h1 className="name">Komal Raza</h1>
          <div className="desc">
            <p>
              I am a skilled and experienced full-stack developer proficient in
              HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React, Next.js,
              Strapi, Node.js, Express.js, MongoDB, PostgreSQL, and more. I am a
              well-qualified full-stack developer familiar with a wide range of
              programming utilities and languages. Knowledgeable in both backend
              and frontend development requirements, I handle any part of the
              process with ease. As a collaborative team player with excellent
              technical abilities, I offer 3 years of related experience.
              Additionally, I have started creating content as a YouTuber,
              focusing on web development.
            </p>
          </div>
          <div className="hero-col2">
            <span className="">Email : </span>
            <a href="komal@gmail.com" target="_blank">
              komal1515@gmail.com
            </a>
          </div>
          <a href="#" className="btn-primary" download>
            <IoDownloadOutline />
            <p>Download CV</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
