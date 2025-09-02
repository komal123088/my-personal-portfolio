import Hero from "../components/Hero";
import Service from "../components/Service";

const About = () => {
  return (
    <section className="about-content">
      <Hero />
      <div className="about-inner">
        <Service />
      </div>
    </section>
  );
};

export default About;
