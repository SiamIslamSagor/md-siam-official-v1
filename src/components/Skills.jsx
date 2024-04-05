import jsImg from "../assets/skills/JavaScript-logo.png";
import mongoImg from "../assets/skills/MongoDB-Logo.jpg";
import expressImg from "../assets/skills/Expressjs.png";
import reactImg from "../assets/skills/reacLlogo.png";
import nodeImg from "../assets/skills/nodejs-1-logo.png";
import tailwindImg from "../assets/skills/tailwindLogo.png";
import cssImg from "../assets/skills/CSS3_logo.svg.png";
import githubImg from "../assets/skills/gitHubLog.png";
import htmlImg from "../assets/skills/htmlLogo.png";

import nextImg from "../assets/skills/nextLogo.png";

const Skills = () => {
  return (
    <section className="my-36 container mx-auto">
      <div className="flex items-center justify-center flex-col">
        <p className="px-5 font-medium py-1 rounded-full bg-base-300 inline mb-10">
          Skills
        </p>
        <div className="flex gap-20 flex-wrap items-center justify-center">
          <div className="flex items-center justify-center ">
            <img className=" rounded-lg w-20 md:w-32  " src={jsImg} alt="" />
          </div>
          <div className="flex items-center justify-center ">
            <img className=" rounded-lg w-20 md:w-32  " src={mongoImg} alt="" />
          </div>
          <div className="flex items-center justify-center ">
            <img
              className=" rounded-lg w-20 md:w-32  "
              src={expressImg}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center ">
            <img className=" rounded-lg w-20 md:w-32  " src={reactImg} alt="" />
          </div>
          <div className="flex items-center justify-center ">
            <img className=" rounded-lg w-20 md:w-32  " src={nodeImg} alt="" />
          </div>
          <div className="flex items-center justify-center ">
            <img className=" rounded-lg w-20 md:w-32  " src={nextImg} alt="" />
          </div>
          <div className="flex items-center justify-center ">
            <img
              className=" rounded-lg w-20 md:w-32  "
              src={tailwindImg}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center ">
            <img className=" rounded-lg w-20 md:w-32  " src={cssImg} alt="" />
          </div>
          <div className="flex items-center justify-center ">
            <img className=" rounded-lg w-20 md:w-32  " src={htmlImg} alt="" />
          </div>
          <div className="flex items-center justify-center ">
            <img
              className=" rounded-lg w-20 md:w-32  "
              src={githubImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
