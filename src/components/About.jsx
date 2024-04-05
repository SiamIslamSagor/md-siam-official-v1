/* eslint-disable react/no-unescaped-entities */
// import myPic from "../assets/clearPic.jpg";
import myPic from "../assets/me1.jpg";
const About = () => {
  return (
    <section id="about" className="my-36 container mx-auto">
      <div className="flex items-center justify-center flex-col">
        <p className="px-5 font-medium py-1 rounded-full bg-base-300 inline mb-8">
          About me
        </p>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="my-5">
            <img
              className=" max-w-[340px] rounded-lg shadow-2xl"
              src={myPic}
              alt="author pic"
            />
          </div>
          <div className="my-5 md:w-3/6">
            <h3 className="text-3xl mb-5 font-medium">
              Curious about me? Here you have it:
            </h3>
            <p className="xl:hidden">
              <strong>
                I'm Md Siam Islam Sagor, a passionate MERN-STACK Developer
              </strong>{" "}
              with a strong foundation in both front-end and back-end
              development. I'm currently pursuing a Diploma in Engineering (CSE)
              at Bangladesh Polytechnic Institute, Rajshahi, and I'm eager to
              leverage my skills and knowledge to build innovative web
              applications.
              <br />
              <br />
              <strong>
                My expertise lies in React, React Router, and building
                responsive single-page applications (SPAs).
              </strong>{" "}
              I'm also comfortable working with JavaScript, CSS3, HTML5, and
              various UI libraries like Tailwind CSS. For back-end development,
              I have a familiarity with technologies like Express.js, Node.js,
              and MongoDB.
              <br />
              <br />
              <strong>
                Beyond technical skills, I prioritize effective communication,
                complex problem-solving, strategic time management, and
                teamwork.
              </strong>
              These interpersonal skills ensure I can collaborate effectively
              within a team environment.
            </p>
            <p className="max-xl:hidden">
              <strong>
                I'm Md Siam Islam Sagor, a passionate MERN-STACK Developer
              </strong>{" "}
              with a strong foundation in both front-end and back-end
              development. I'm currently pursuing a Diploma in Engineering (CSE)
              at Bangladesh Polytechnic Institute, Rajshahi, and I'm eager to
              leverage my skills and knowledge to build innovative web
              applications.
              <br />
              <br />
              <strong>
                My expertise lies in React, React Router, and building
                responsive single-page applications (SPAs).
              </strong>{" "}
              I'm also comfortable working with JavaScript, CSS3, HTML5, and
              various UI libraries like Tailwind CSS. For back-end development,
              I have a familiarity with technologies like Express.js, Node.js,
              and MongoDB.
              <br />
              <br />
              <strong>
                Beyond technical skills, I prioritize effective communication,
                complex problem-solving, strategic time management, and
                teamwork.
              </strong>
              These interpersonal skills ensure I can collaborate effectively
              within a team environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
