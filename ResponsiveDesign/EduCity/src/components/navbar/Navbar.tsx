import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark-background" : ""}`}>
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programes" smooth={true} offset={-220} duration={500}>
            Programe
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-190} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-240} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-220} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
