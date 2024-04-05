import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import v1Logo from "../assets/port-v1-logo.png";
const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <footer className="footer p-10 mx-auto max-w-7xl px-2 md:px-8">
        <aside>
          <img className="md:max-w-sm" src={v1Logo} alt="" />
          <p>
            MERN-STACK web developer
            <br />
            build your next project with best person.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a href="https://web.facebook.com/pro.gamar.908" target="blank">
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mdsiamofficial/"
              target="blank"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/s_i_a_m__i_s_l_a_m/?fbclid=IwAR3fwlj4brgV88Y8HNgdz9p9Gki0-QejqIZLztQDYBlbSKUjQ6_aXM3Q-tM"
              target="blank"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </nav>
      </footer>
      <div className="divider after:bg-gray-700 before:bg-gray-700"></div>
      <p className="text-center text-gray-500 -mt-6 py-1">
        &copy; al right reserved 2023
      </p>
    </footer>
  );
};

export default Footer;
