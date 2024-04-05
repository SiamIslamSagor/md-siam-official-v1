/* eslint-disable react/no-unescaped-entities */
import p1 from "../assets/projects/PPP-p.png";
import p2 from "../assets/projects/FH-p.png";
import p3 from "../assets/projects/CM-p.png";
import p4 from "../assets/projects/dfImg.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  return (
    <section id="work" className="mb-20">
      <p className="text-center mb-20">
        <span className="px-5 font-medium py-1 rounded-full bg-base-300 inline mb-10">
          Recent Works
        </span>
      </p>
      <div className="space-y-10">
        <div className="border-2 rounded-2xl">
          <div className="pt-2 overflow-y-hidden">
            <div className="flex flex-col items-center justify-center">
              <div className=" p-2 flex flex-row-reverse max-lg:flex-col w-full">
                <div className="lg:w-1/2 lg:m-4 flex items-center">
                  <img
                    className="w-full  border-2 p-2 rounded-lg"
                    src={p4}
                    alt="PPP image"
                  />
                </div>
                <div className="space-y-4 lg:w-1/2 p-2">
                  <div className=" mt-5 flex items-center">
                    <h3 className="text-xl lg:text-4xl inline-block font-medium ">
                      Dream Finder |
                    </h3>{" "}
                    <p className="text-gray-600 font-medium h-full">
                      Full Stack (Team Project)
                    </p>
                  </div>
                  <p className="text-base leading-5 text-gray-700">
                    This is a job-hunting web application, Where company jobs
                    will be posted and a job hunter will achieve his dream job
                    through Apply at Job.
                  </p>
                  <div className="w-full  flex flex-wrap gap-4">
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Next.js
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      NextUI
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      MongoDB
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Firebase
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Express
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Stripe
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Tailwind
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      TanStackQuery
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Axios
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      React-Hook-Form
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Awesome-React-Reveal
                    </p>
                  </div>
                  <div>
                    <a href="https://dream-finder.vercel.app/" target="blank">
                      <button className="btn btn-neutral btn-circle">
                        <BsBoxArrowUpRight />
                      </button>
                    </a>
                    <a
                      href="https://github.com/taskinahmadalfaruqe/Dream-Finder"
                      target="blank"
                    >
                      <button className="btn ml-4 btn-circle">
                        <FaGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl">
          <div className="pt-2 overflow-y-hidden">
            <div className="flex flex-col items-center justify-center">
              <div className=" p-2 flex max-lg:flex-col w-full">
                <div className="lg:w-1/2 lg:m-4 flex items-center">
                  <img
                    className="w-full  border-2 p-2 rounded-lg"
                    src={p1}
                    alt="PPP image"
                  />
                </div>
                <div className="space-y-4 lg:w-1/2 p-2">
                  <div className=" mt-5 flex items-center">
                    <h3 className="text-xl lg:text-4xl inline-block font-medium ">
                      PrimePropertyPlus |
                    </h3>{" "}
                    <p className="text-gray-600 font-medium h-full">
                      Full Stack
                    </p>
                  </div>
                  <p className="text-base leading-5 text-gray-700">
                    It is a real estate project management website where real
                    estate projects can be bought and sold. Here admin role
                    agent role and user all are set and payment gateway is also
                    integrated. The main purpose of creating this website was to
                    facilitate the safe buying and selling of various types of
                    valuable properties online.
                  </p>
                  <div className="w-full  flex flex-wrap gap-4">
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      React
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      MongoDB
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Firebase
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Express
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Stripe
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Tailwind
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      TanStackQuery
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Axios
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      React-Hook-Form
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Awesome-React-Reveal
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://prime-property-pulse-8e97d.web.app/"
                      target="blank"
                    >
                      <button className="btn btn-neutral btn-circle">
                        <BsBoxArrowUpRight />
                      </button>
                    </a>
                    <a
                      href="https://github.com/SiamIslamSagor/prime-property-plus-client"
                      target="blank"
                    >
                      <button className="btn ml-4 btn-circle">
                        <FaGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl">
          <div className="pt-2 overflow-y-hidden">
            <div className="flex flex-col items-center justify-center">
              <div className=" p-2 flex flex-row-reverse max-lg:flex-col w-full">
                <div className="lg:w-1/2 lg:m-4 flex items-center">
                  <img
                    className="w-full  border-2 p-2 rounded-lg"
                    src={p2}
                    alt="PPP image"
                  />
                </div>
                <div className="space-y-4 lg:w-1/2 p-2">
                  <div className=" mt-5 flex items-center">
                    <h3 className="text-xl lg:text-4xl inline-block font-medium ">
                      FoodHub |
                    </h3>{" "}
                    <p className="text-gray-600 font-medium h-full">
                      Full Stack
                    </p>
                  </div>
                  <p className="text-base leading-5 text-gray-700">
                    It's a food management website where deals can be added well
                    and with flights from them they can add food here and have a
                    feed options dashboard to match those who will fly them. The
                    main purpose of this website was to provide food for the
                    poor and starving and to ensure that food does not go to
                    waste.
                  </p>
                  <div className="w-full  flex flex-wrap gap-4">
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      React
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      MongoDB
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Firebase
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Express
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Node
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Tailwind
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      DaisyUI
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Axios
                    </p>
                  </div>
                  <div>
                    <a href="https://food-hub-6f2e6.web.app/" target="blank">
                      <button className="btn btn-neutral btn-circle">
                        <BsBoxArrowUpRight />
                      </button>
                    </a>
                    <a
                      href="https://github.com/SiamIslamSagor/food-hub-client"
                      target="blank"
                    >
                      <button className="btn ml-4 btn-circle">
                        <FaGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl">
          <div className="pt-2 overflow-y-hidden">
            <div className="flex flex-col items-center justify-center">
              <div className=" p-2 flex max-lg:flex-col w-full">
                <div className="lg:w-1/2 lg:m-4 flex items-center">
                  <img
                    className="w-full  border-2 p-2 rounded-lg"
                    src={p3}
                    alt="PPP image"
                  />
                </div>
                <div className="space-y-4 lg:w-1/2 p-2">
                  <div className=" mt-5 flex items-center">
                    <h3 className="text-xl lg:text-4xl inline-block font-medium ">
                      CarMaster |
                    </h3>{" "}
                    <p className="text-gray-600 font-medium h-full">
                      Front End
                    </p>
                  </div>
                  <p className="text-base leading-5 text-gray-700">
                    This is a car selling website where the functionality of
                    selling a particular car is added by adding complete
                    details. The main purpose of creating this website was to
                    make the convenience of shopping online.
                  </p>
                  <div className="w-full  flex flex-wrap gap-4">
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      React
                    </p>

                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Firebase
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      MongoDB
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Express
                    </p>

                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Tailwind
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      DaisyUI
                    </p>
                    <p className="bg-gray-200 px-4 py-1 text-base rounded-3xl  text-gray-600 font-medium">
                      Axios
                    </p>
                  </div>
                  <div>
                    <a href="https://car-master-d5418.web.app/" target="blank">
                      <button className="btn btn-neutral btn-circle">
                        <BsBoxArrowUpRight />
                      </button>
                    </a>
                    <a
                      href="https://github.com/SiamIslamSagor/car-master-client"
                      target="blank"
                    >
                      <button className="btn ml-4 btn-circle">
                        <FaGithub />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <div className="pt-2 overflow-y-hidden">
            <div className="flex flex-col items-center justify-center">
              <div>
                <div className="card rounded-none rounded-tr-3xl rounded-bl-3xl max-w-[500px] bg-base-100  group  border-4 ease-in-out hover:-translate-y-2 duration-[350ms] h-[520px]">
                  <figure>
                    <img
                      className="group-hover:scale-110 duration-1000  rounded-tr-3xl rounded-bl-3xl h-80 max-sm:max-w-[370px] max-w-[480px]"
                      src={p2}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="flex flex-1 flex-col p-6 gap-2 leading-4 font-medium">
                    It's a food management website where deals can be added well
                    and with flights from them they can add food here and have a
                    feed options dashboard to match those who will fly them. The
                    main purpose of this website was to provide food for the
                    poor and starving and to ensure that food does not go to
                    waste.
                  </div>
                  <div
                    className=" mb-8 mr-8
             text-right"
                  >
                    <a href="https://food-hub-6f2e6.web.app/" target="blank">
                      <button className="btn btn-neutral btn-circle">
                        <BsBoxArrowUpRight />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2 overflow-y-hidden">
            <div className="flex flex-col items-center justify-center">
              <div>
                <div className="card rounded-none rounded-tr-3xl rounded-bl-3xl max-w-[500px] bg-base-100  group  border-4 ease-in-out hover:-translate-y-2 duration-[350ms] h-[520px]">
                  <figure>
                    <img
                      className="group-hover:scale-110 duration-1000  rounded-tr-3xl rounded-bl-3xl h-80 max-sm:max-w-[370px] max-w-[480px]"
                      src={p3}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="flex flex-1 flex-col p-6 gap-2 leading-4 font-medium">
                    This is a car selling website where the functionality of
                    selling a particular car is added by adding complete
                    details. The main purpose of creating this website was to
                    make the convenience of shopping online.
                  </div>
                  <div
                    className=" mb-8 mr-8
             text-right"
                  >
                    <a href="https://car-master-d5418.web.app/" target="blank">
                      <button className="btn btn-neutral btn-circle">
                        <BsBoxArrowUpRight />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default Work;
