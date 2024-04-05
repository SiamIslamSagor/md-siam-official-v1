/* eslint-disable react/no-unescaped-entities */
import { AttentionSeeker } from "react-awesome-reveal";
import "animate.css";
// import bannerImg from "../assets/cropImg.png";
import bannerImg from "../assets/me9.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Banner = () => {
  const handleMouseEnter = hoverChr => {
    let elem = `.${hoverChr}`;
    let animChr = document.querySelector(elem);
    animChr.classList.add("animate__rubberBand");
    setTimeout(() => {
      animChr.classList.remove("animate__rubberBand");
    }, 1000);
    // if (animChr.classList.length === 5) {
    //   console.log("not have");
    //   animChr.classList.add("animate__rubberBand");
    // } else {
    //   console.log("have");
    //   animChr.classList.remove("animate__rubberBand");
    // }
    console.log(animChr.classList.length);
  };

  const handleMouseLeave = hoverChr => {
    let elem = `.${hoverChr}`;
    let animChr = document.querySelector(elem);
    // animChr.classList.remove("animate__rubberBand");
    // animChr.classList.add("animate__shakeX");
    // animChr.setAttribute("bounce", false);
    // if (animChr.classList.length === 5) {
    //   console.log("not have");
    //   animChr.classList.add("animate__rubberBand");
    // } else {
    //   console.log("have");
    //   animChr.classList.remove("animate__rubberBand");
    // }
    console.log(animChr.classList.length);
  };

  return (
    <section className="my-4 ">
      <div className="flex justify-between max-md:flex-col">
        <div className="md:w-1/2 max-md:my-8  px-8  flex flex-col justify-center gap-8">
          <div>
            {/* <h1 className="font-bold text-5xl mb-4">Hi, I'm Siam 👋</h1> */}
            <div
              // className="animate__rubberBand px-1"
              className="flex gap-4 px-2 mb-4 -ml-2"
              // cascade
              // damping={0.1}
              // direction="left"
              // bounce
              // flash
              // headShake
              // heartBeat
              // jello
              // pulse
              // rubberBand
              // shake
              // shakeX
              // shakeY
              // swing
              // tada
              // wobble
            >
              <AttentionSeeker
                bounce={false}
                className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr1"
              >
                <p
                  className="-web"
                  onMouseEnter={() => handleMouseEnter("anim-chr1")}
                  onMouseLeave={() => handleMouseLeave("anim-chr1")}
                >
                  H
                </p>
              </AttentionSeeker>
              <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr2">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr2")}
                  onMouseLeave={() => handleMouseLeave("anim-chr2")}
                >
                  i,
                </p>
              </AttentionSeeker>
              {/* <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr3">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr3")}
                  onMouseLeave={() => handleMouseLeave("anim-chr3")}
                >
                  ,
                </p>
              </AttentionSeeker> */}
              <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr4">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr4")}
                  onMouseLeave={() => handleMouseLeave("anim-chr4")}
                >
                  I'
                </p>
              </AttentionSeeker>
              {/* <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr5">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr5")}
                  onMouseLeave={() => handleMouseLeave("anim-chr5")}
                >
                  '
                </p>
              </AttentionSeeker> */}
              {/*   <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr6">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr6")}
                  onMouseLeave={() => handleMouseLeave("anim-chr6")}
                ></p>
              </AttentionSeeker> */}
              <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr7">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr7")}
                  onMouseLeave={() => handleMouseLeave("anim-chr7")}
                >
                  m
                </p>
              </AttentionSeeker>
              <AttentionSeeker className="text-4xl  font-bold tracking-tighter leading-3 anim-chr anim-chr8">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr8")}
                  onMouseLeave={() => handleMouseLeave("anim-chr8")}
                >
                  S
                </p>
              </AttentionSeeker>
              <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr9">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr9")}
                  onMouseLeave={() => handleMouseLeave("anim-chr9")}
                >
                  i
                </p>
              </AttentionSeeker>
              <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr10">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr10")}
                  onMouseLeave={() => handleMouseLeave("anim-chr10")}
                >
                  a
                </p>
              </AttentionSeeker>
              <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr11">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr11")}
                  onMouseLeave={() => handleMouseLeave("anim-chr11")}
                >
                  m
                </p>
              </AttentionSeeker>
              <AttentionSeeker className="text-4xl font-bold tracking-tighter leading-3 anim-chr anim-chr12">
                <p
                  onMouseEnter={() => handleMouseEnter("anim-chr12")}
                  onMouseLeave={() => handleMouseLeave("anim-chr12")}
                >
                  👋
                </p>
              </AttentionSeeker>
            </div>
            <p>
              I'm a MERN-STACK developer, I love writing code and learning new
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
            <a
              href={
                "https://drive.google.com/file/d/17JuQtTBvBMEpcVj3zDqXslxGl28JC1Vt/view"
              }
              target={"blank"}
              download="Resume"
            >
              <button className="btn btn-neutral btn-sm sm:hidden">
                Download CV
              </button>
            </a>
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
