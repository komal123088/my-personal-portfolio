import {
  IoCodeOutline,
  IoPeopleOutline,
  IoDesktopOutline,
  IoFileTrayStackedOutline,
} from "react-icons/io5";

const Service = () => {
  return (
    <div className="service">
      <h2>What I Do</h2>

      <div className="grid-item">
        <div className="item">
          <div className="item-icon">
            <IoCodeOutline />
          </div>
          <div className="item-wrapper">
            <h3>Frontend Development</h3>
            <p>
              Crafting visually captivating and responsive user interfaces using
              HTML, CSS, and JavaScript to captivate your audience.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="item-icon">
            <IoPeopleOutline />
          </div>
          <div className="item-wrapper">
            <h3>Backend End Development</h3>
            <p>
              Building robust and scalable server-side applications using
              Node.js, Express.js, and MongoDB to power your web applications.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="item-icon">
            <IoDesktopOutline />
          </div>
          <div className="item-wrapper">
            <h3>Full Stack Development</h3>
            <p>
              Developing full-stack applications using the MERN stack (MongoDB,
              Express.js, React, Node.js) to create dynamic and interactive web
              applications.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="item-icon">
            <IoCodeOutline />
          </div>
          <div className="item-wrapper">
            <h3>Custom UI/UX Development</h3>
            <p>
              Designing custom user interfaces and user experiences to create a
              seamless and intuitive experience for your users.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="item-icon">
            <IoFileTrayStackedOutline />
          </div>
          <div className="item-wrapper">
            <h3>PSD To HTML CSS JavaScript</h3>
            <p>
              I can help you convert your PSD files into HTML, CSS, and
              JavaScript code to create a visually appealing and responsive
              website.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="item-icon">
            <IoFileTrayStackedOutline />
          </div>
          <div className="item-wrapper">
            <h3>PSD To React, Next js</h3>
            <p>
              I can help you convert your PSD files into React, Next js code to
              create a visually appealing and responsive website.
            </p>
          </div>
        </div>

        <div className="item">
          <div className="item-icon">
            <IoDesktopOutline />
          </div>
          <div className="item-wrapper">
            <h3>Responsive Design</h3>
            <p>
              Creating responsive designs that adapt to various screen sizes and
              devices to ensure a consistent user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
