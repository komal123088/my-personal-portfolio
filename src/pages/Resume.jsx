import React from "react";

const Resume = () => {
  return (
    <section className="resume-content">
      <h1 className="section-heading">Resume</h1>
      <h4 className="section-sub-heading">3+ Years of Experience</h4>

      <div className="resume-row">
        <div className="wrapper">
          <div className="edu">
            <h2>Education</h2>

            <div className="grid-item">
              <h4 className="year">Aug 2023</h4>
              <h4 className="edu-name">Diploma in Commerce</h4>
              <p className="company">KPK Board of Technical Education</p>
              <p className="edu-desc">
                The Khyber Pakhtunkhwa Board of Technical Education (KPBTE) is a
                government body in Khyber Pakhtunkhwa, Pakistan. It is
                responsible for the regulation and control of technical,
                commercial and vocational education as well as trade and skill
                courses.
              </p>

              <div className="divider"></div>
            </div>

            <div className="grid-item">
              <h4 className="year">September 2023 - Current</h4>
              <h4 className="edu-name">Bachelor of Business Administration</h4>
              <p className="company">
                AUST - Abbottabad University of Science & Technology
              </p>

              <p className="edu-desc">
                The Abbottabad University of Science & Technology (AUST) is a
                premier institution located in Abbottabad, Pakistan. Established
                with the aim of providing quality education in science and
                technology.
              </p>

              <div className="divider"></div>
            </div>
          </div>

          <div className="exp">
            <h2>Experience</h2>

            <div className="grid-item">
              <h4 className="year">2022 - Current</h4>
              <h4 className="exp-name">Full Stack Enginner</h4>
              <p className="company">Techeves</p>
              <p className="exp-desc">
                Techeves is a software development company that provides
                software development services to clients worldwide. We are
                experts in web development, mobile app development, and custom
                software development.
              </p>

              <div className="divider"></div>
            </div>
          </div>

          <div className="exp">
            <h2>Certificates</h2>

            <div className="grid-item">
              <h4 className="year">Jan 2024</h4>
              <h4 className="exp-name">Full Stack Enginner</h4>
              <p className="company">codecademy</p>
              <p className="exp-desc">
                I successfully completed the Full Stack Engineer course from
                Codecademy, which provided me with comprehensive training in
                both front-end and back-end development, covering essential
                technologies such as HTML, CSS, JavaScript, and various
                frameworks.
              </p>

              <div className="divider"></div>
            </div>

            <div className="grid-item">
              <h4 className="year">Feb 2024</h4>
              <h4 className="exp-name">Learn Intermediate JavaScript Course</h4>
              <p className="company">codecademy</p>
              <p className="exp-desc">
                I successfully completed the Learn Intermediate JavaScript
                Course from Codecademy, which enhanced my skills in JavaScript,
                focusing on advanced concepts and techniques essential for
                modern web development.
              </p>

              <div className="divider"></div>
            </div>

            <div className="grid-item">
              <h4 className="year">Feb 2024</h4>
              <h4 className="exp-name">
                Building Interactive JavaScript Websites Course
              </h4>
              <p className="company">codecademy</p>
              <p className="exp-desc">
                I successfully completed the Building Interactive JavaScript
                Websites Course from Codecademy, which enhanced my skills in
                creating dynamic and interactive web applications using
                JavaScript, focusing on essential concepts such as DOM
                manipulation, event handling, and asynchronous programming.
              </p>

              <div className="divider"></div>
            </div>

            <div className="grid-item">
              <h4 className="year">July 2024</h4>
              <h4 className="exp-name">Python3</h4>
              <p className="company">codecademy</p>
              <p className="exp-desc">
                I successfully completed the Python3 course from Codecademy,
                which provided me with a solid foundation in Python programming,
                covering essential concepts such as data types, control
                structures, functions, and object-oriented programming.
              </p>

              <div className="divider"></div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="coding-skill">
            <h2>Coding Skills</h2>

            {[
              { name: "HTML", percent: 100 },
              { name: "CSS", percent: 100 },
              { name: "Bootstrap", percent: 100 },
              { name: "Tailwind CSS", percent: 100 },
              { name: "JavaScript", percent: 95 },
              { name: "React.js", percent: 95 },
              { name: "React/Redux", percent: 80 },
              { name: "Next.js", percent: 95 },
              { name: "Node.js", percent: 95 },
              { name: "Express.js", percent: 95 },
              { name: "MongoDB", percent: 85 },
              { name: "Python", percent: 60 },
              { name: "Git", percent: 100 },
              { name: "GitHub", percent: 100 },
              { name: "MERN Stack", percent: 90 },
              { name: "Web Content Creation", percent: 90 },
              { name: "Strapi", percent: 90 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="progress-detail">
                  <div className="progress-name">{skill.name}</div>
                  <div className="progress-percent">{skill.percent}%</div>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="design-skill">
            <h2>Design Skills</h2>

            {[
              { name: "Responsive Web Design", percent: 100 },
              { name: "Print Design", percent: 65 },
              { name: "Logo Design", percent: 80 },
              { name: "Graphics Design", percent: 90 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="progress-detail">
                  <div className="progress-name">{skill.name}</div>
                  <div className="progress-percent">{skill.percent}%</div>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#" className="btn-primary">
        Download CV
      </a>
    </section>
  );
};

export default Resume;
