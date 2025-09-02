// pages/Portfolio.jsx
import React, { useState } from "react";
import { IoVideocam, IoFilm, IoVolumeHigh, IoImage } from "react-icons/io5";
import port1 from "../assets/img/img1.png";
import port2 from "../assets/img/img2.png";
import port3 from "../assets/img/img3.png";
import port4 from "../assets/img/img4.png";
import port5 from "../assets/img/img5.png";
import port6 from "../assets/img/img6.png";
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Apps",
    "Portfolio",
    "Gym & Fitness",
    "Ecommerce",
    "Food",
    "Grocery",
    "Coffee",
    "Course Selling",
    "Car",
    "Pets",
    "Furniture",
    "Hospital & Health Care",
    "Agency",
  ];

  const portfolioItems = [
    {
      id: 1,
      href: "https://komal123088.github.io/dashboard/",
      imgSrc: port1,
      name: "Full Stack Grocery Store",
      icon: IoVideocam,
      category: "Grocery",
    },
    {
      id: 2,
      href: "https://komal123088.github.io/car-rental/",
      imgSrc: port2,
      name: "Coffee Shop Webiste",
      icon: IoFilm,
      category: "Coffee",
    },
    {
      id: 3,
      href: "https://komal123088.github.io/react-landing-page/",
      imgSrc: port3,
      name: "Full Stack Ecommerce Store",
      icon: IoFilm,
      category: "Ecommerce",
    },
    {
      id: 4,
      href: "https://komal123088.github.io/my-portfolio/",
      imgSrc: port4,
      name: "Food Delivery Website",
      icon: IoVideocam,
      category: "Food",
    },
    {
      id: 5,
      href: "https://komal123088.github.io/new-portfolio/",
      imgSrc: port5,
      name: "Modern Car Rental and Services Website",
      icon: IoVolumeHigh,
      category: "Car",
    },
    {
      id: 6,
      href: "https://komal123088.github.io/Ecommerce/",
      imgSrc: port6,
      name: "Medical & Health Care Website",
      icon: IoVolumeHigh,
      category: "Hospital & Health Care",
    },
    {
      id: 7,
      href: "https://komal123088.github.io/dashboard/",
      imgSrc: port1,
      name: "Modern Portfolio Website with Next.js, React, Tailwind CSS, & Shadcn UI",
      icon: IoVolumeHigh,
      category: "Portfolio",
    },
    {
      id: 8,
      href: "https://komal123088.github.io/car-rental/",
      imgSrc: port2,
      name: "Food Delivery",
      icon: IoVolumeHigh,
      category: "Food",
    },
    {
      id: 9,
      href: "https://komal123088.github.io/react-landing-page/",
      imgSrc: port3,
      name: "Gym & Fitness",
      icon: IoVideocam,
      category: "Gym & Fitness",
    },
    {
      id: 10,
      href: "https://komal123088.github.io/my-portfolio/",
      imgSrc: port4,
      name: "Portfolio Website",
      icon: IoImage,
      category: "Portfolio",
    },
    {
      id: 11,
      href: "https://komal123088.github.io/new-portfolio/",
      imgSrc: port5,
      name: "Modern Online Course Website",
      icon: IoVideocam,
      category: "Course Selling",
    },
    {
      id: 12,
      href: "https://komal123088.github.io/Ecommerce/",
      imgSrc: port6,
      name: "Furniture Website",
      icon: IoVideocam,
      category: "Furniture",
    },
    {
      id: 13,
      href: "https://komal123088.github.io/dashboard/",
      imgSrc: port1,
      name: "Sviss Tours & Travels Website",
      icon: IoVideocam,
      category: "Portfolio",
    },
    {
      id: 14,
      href: "https://komal123088.github.io/car-rental/",
      imgSrc: port2,
      name: "Alpha Hospital Website",
      icon: IoVideocam,
      category: "Hospital & Health Care",
    },
    {
      id: 15,
      href: "https://komal123088.github.io/react-landing-page/",
      imgSrc: port3,
      name: "EzeWez Agency Website",
      icon: IoVideocam,
      category: "Agency",
    },
    {
      id: 16,
      href: "https://komal123088.github.io/my-portfolio/",
      imgSrc: port4,
      name: "Durav Rathee Website",
      icon: IoVideocam,
      category: "Course Selling",
    },
    {
      id: 17,
      href: "https://komal123088.github.io/new-portfolio/",
      imgSrc: port5,
      name: "Modern Pets Food Website",
      icon: IoVideocam,
      category: "Pets",
    },
    {
      id: 18,
      href: "https://komal123088.github.io/Ecommerce/",
      imgSrc: port6,
      name: "Word Counter",
      icon: IoVideocam,
      category: "Apps",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="portfolio-content">
      <h1 className="section-heading">Portfolio</h1>
      <h4 className="section-sub-heading">My Works</h4>

      <ul className="filter-box">
        {filters.map((filter, index) => (
          <li
            key={index}
            className={`filter-item ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>

      <div className="portfolio-items-group">
        {filteredItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`portfolio-item ${
              activeFilter === "All" || activeFilter === item.category
                ? "active"
                : ""
            }`}
          >
            <img src={item.imgSrc} alt="" className="item-img" />
            <h4 className="item-name">{item.name}</h4>
            <div className="item-icon">
              <item.icon />
            </div>
            <div className="item-category">{item.category}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
