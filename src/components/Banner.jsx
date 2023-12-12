/* eslint-disable react/no-unescaped-entities */
import bannerImg from "../assets/cropImg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="my-4 ">
      <div className="flex justify-between max-md:flex-col">
        <div className="md:w-1/2 max-md:my-8  px-8  flex flex-col justify-center gap-8">
          <div>
            <h1 className="font-bold text-5xl mb-4">Hi, I'm Siam 👋</h1>
            <p>
              I'm a MERN stack developer, I love writing code and learning new
              things. I want to become a senior developer in next 2-3 years.
            </p>
          </div>
          <div className="space-y-1">
            <small className="flex items-center gap-4">
              <FaLocationDot className="text-xl " /> Rajshahi, Bangladesh
            </small>
            <div className="flex items-center gap-4">
              <div className="pt-1 items-center flex">
                <span className="loading loading-ring loading-sm text-green-600"></span>
              </div>{" "}
              <small>Open to work</small>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-4">
              <a href="https://github.com/SiamIslamSagor" target="blank">
                <FaGithub className="text-2xl hover:text-gray-500 duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdsiamofficial/"
                target="blank"
              >
                <FaLinkedin className="text-2xl hover:text-gray-500 duration-300" />
              </a>
            </div>
            <button className="btn btn-neutral btn-sm sm:hidden">
              Download CV
            </button>
          </div>
        </div>
        <div className="md:w-1/2  flex flex-col justify-end bordr max-md:items-center">
          <div className=" lg:flex lg:justify-end justify-center items-center max-md:my-8">
            <img
              style={{
                border: "4px solid #ffffff",
                borderRadius: "56% 44% 33% 67% / 42% 57% 43% 58%",
                display: "block",
                width: "100%",
              }}
              className=" max-w-xs relative -right-0   "
              src={bannerImg}
              alt="author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
