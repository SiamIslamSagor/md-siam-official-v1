/* eslint-disable react/no-unescaped-entities */
import myPic from "../assets/clearPic.jpg";
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
              Hello, I'm Siam, a dedicated MERN Stack Developer with a passion
              for creating impactful web applications. Though I may not have
              formal job experience, my journey has been centered around honing
              my skills in building robust Single Page Applications (SPAs) using
              MongoDB, Express.js, React, and Node.js. 💻 Technical Proficiency:
              I've immersed myself in the MERN Stack, showcasing mastery in
              MongoDB, Express.js, React, and Node.js, architecting robust and
              scalable applications. 🌐 SPA Development Specialist: Adept in
              crafting Single Page Applications (SPAs) for a seamless and
              dynamic user experience. 🐞 Debugging Authority: Known for my
              analytical prowess, I resolve intricate issues to optimize
              application performance. 🎨 Tailwind CSS Expert: Comfortably
              leveraging Tailwind CSS, I architect elegant and responsive user
              interfaces. 📱 Responsive Design Advocate: Committed to delivering
              intuitive, cross-device user experiences through responsive design
              principles.
            </p>
            <p className="max-xl:hidden">
              🚀 Passionate MERN Stack Developer | Expert in SPA Development &
              Responsive Design Hello, I'm Siam, a dedicated MERN Stack
              Developer with a passion for creating impactful web applications.
              Though I may not have formal job experience, my journey has been
              centered around honing my skills in building robust Single Page
              Applications (SPAs) using MongoDB, Express.js, React, and Node.js.
              💻 Technical Proficiency: I've immersed myself in the MERN Stack,
              showcasing mastery in MongoDB, Express.js, React, and Node.js,
              architecting robust and scalable applications. 🌐 SPA Development
              Specialist: Adept in crafting Single Page Applications (SPAs) for
              a seamless and dynamic user experience. 🐞 Debugging Authority:
              Known for my analytical prowess, I resolve intricate issues to
              optimize application performance. 🎨 Tailwind CSS Expert:
              Comfortably leveraging Tailwind CSS, I architect elegant and
              responsive user interfaces. 📱 Responsive Design Advocate:
              Committed to delivering intuitive, cross-device user experiences
              through responsive design principles. 💹 Commitment to Excellence:
              While my professional journey is just beginning, my dedication to
              quality, innovation, and continuous learning drives me to excel in
              every project. Let's connect to discuss how my expertise in
              #MERNStack, #SPADevelopment, #WebDeveloper, #TailwindCSS, and
              #ResponsiveDesign can elevate your digital initiatives. 🌟
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
