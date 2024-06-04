import { IoCode } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa";
import { TbBrandGooglePhotos } from "react-icons/tb";

import "./About.css";

const About = () => {
  return (
    <main className="container mx-auto">
      {/* Title */}
      <div className="mt-10 mx-5">
        <div className="flex justify-start items-center gap-5 ">
          <h2 className="text-2xl md:text-4xl text-title font-extrabold uppercase">
            About ME
          </h2>
          <div className="bg-[#06223F] h-2 md:h-4 w-24 md:w-32"></div>
        </div>
        <h2 className="text-[#06223f31] font-bold text-3xl md:text-5xl -mt-2 uppercase">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 my-10 md:my-20">
        <div>
          <div className="card flex justify-center items-center">
            <div className="card1 text-black hover:text-white w-[300px] md:w-[400px] h-[300px] md:h-[300px] shadow-xl hover:shadow-none">
              <IoCode className="text-3xl " />
              <p className="my-5">Mern Stack Developer</p>
              <p className="small">
                Experienced MERN stack developer specializing in MongoDB,
                Express.js, React, and Node.js. Builds efficient web apps with
                seamless communication and interactive UIs for optimal user
                experiences.
              </p>
              <div className="go-corner" href="#">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex justify-center items-center">
            <div className="card1 text-black hover:text-white w-[300px] md:w-[400px] h-[300px] md:h-[300px] shadow-xl hover:shadow-none">
              <FaPenNib className="text-3xl " />
              <p className="my-5">UI / UX DESIGNING</p>
              <p className="small">
                As a web UX/UI designer, I craft seamless digital experiences,
                blending aesthetics with functionality to ensure user
                satisfaction and intuitive interactions, enhancing overall
                usability and visual appeal.
              </p>
              <div className="go-corner" href="#">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card flex justify-center items-center">
            <div className="card1 text-black hover:text-white w-[300px] md:w-[400px] h-[300px] md:h-[300px] shadow-xl hover:shadow-none">
              <TbBrandGooglePhotos className="text-4xl " />
              <p className="my-5">PhotoShop Editing</p>
              <p className="small">
                Creating sleek and captivating web designs with Photoshop, I
                specialize in user-friendly interfaces that elevate the online
                experience through visually stunning and responsive visuals.
                Crafting visually striking, responsive interfaces
              </p>
              <div className="go-corner" href="#">
                <div className="go-arrow">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
