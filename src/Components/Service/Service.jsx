import Marquee from "react-fast-marquee";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaWordpress,
  FaPhp,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";

const Service = () => {
  return (
    <main>
      <div className=" container mx-auto mt-10">
        {/* title */}

        <div className="mt-10 mx-5">
          <div className="flex justify-start items-center gap-5 ">
            <h2 className="text-2xl md:text-4xl text-title font-extrabold uppercase">
              My Services
            </h2>
            <div className="bg-[#06223F] h-2 md:h-4 w-24 md:w-32"></div>
          </div>
          <h2 className="text-[#06223f31] font-bold text-3xl md:text-5xl -mt-2 uppercase">
            My Services
          </h2>
        </div>

        {/* body */}
        <div className="flex flex-col gap-16">
          <div className="mt-16">
            <Marquee
              gradient={false}
              speed={80}
              delay={0}
              play={true}
              direction="right"
            >
              <div className="flex justify-center items-center gap-5 py-5">
                <FaHtml5 className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  HTML
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <FaCss3Alt className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  CSS
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <RiTailwindCssFill className="text-4xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  Tailwind CSS
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <FaBootstrap className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  Bootstrap
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <IoLogoJavascript className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  JavaScript
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <SiTypescript className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  Typescript
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <FaReact className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  React Js
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <TbBrandRedux className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  Redux Js
                </h2>
              </div>
            </Marquee>
          </div>

          <div className="">
            <Marquee
              gradient={false}
              speed={80}
              delay={0}
              play={true}
              direction="left"
            >
              <div className="flex justify-center items-center gap-5">
                <FaNodeJs className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  Node Js
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <SiExpress className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  Express Js
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5 py-5">
                <DiMongodb className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  MongoDB
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <FaWordpress className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  Wordpress
                </h2>
              </div>
              <div className="flex justify-center items-center gap-5">
                <FaPhp className="text-3xl md:text-5xl font-bold text-[#06223f31] ml-5" />
                <h2 className="text-3xl md:text-5xl font-bold text-[#06223f31] ">
                  Php
                </h2>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
