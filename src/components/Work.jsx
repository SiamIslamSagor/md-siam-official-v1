/* eslint-disable react/no-unescaped-entities */
import p1 from "../assets/projects/project1.png";
import p2 from "../assets/projects/project2.png";
import p3 from "../assets/projects/project3.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Work = () => {
  return (
    <section className="mb-20">
      <p className="text-center mb-20">
        <span className="px-5 font-medium py-1 rounded-full bg-base-300 inline mb-10">
          Recent Works
        </span>
      </p>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="pt-2 overflow-y-hidden">
            <div className="flex flex-col items-center justify-center">
              <div>
                <div className="card rounded-none rounded-tr-3xl rounded-bl-3xl max-w-[500px] bg-base-100  group  border-4 ease-in-out hover:-translate-y-2 duration-[350ms] h-[520px]">
                  <figure>
                    <img
                      className="group-hover:scale-110 duration-1000  rounded-tr-3xl rounded-bl-3xl h-80 max-sm:max-w-[370px] max-w-[480px]"
                      src={p1}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="flex flex-1 flex-col p-6 gap-2 leading-4 font-medium">
                    It is a real estate project management website where real
                    estate projects can be bought and sold. Here admin role
                    agent role and user all are set and payment gateway is also
                    integrated. The main purpose of creating this website was to
                    facilitate the safe buying and selling of various types of
                    valuable properties online.
                  </div>
                  <div className=" mb-8 mr-8 text-right">
                    <a
                      href="https://prime-property-pulse-8e97d.web.app/"
                      target="blank"
                    >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
