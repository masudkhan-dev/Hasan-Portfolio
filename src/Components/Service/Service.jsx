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
          <h2 className="text-[#06223f31] font-bold text-6xl md:text-9xl-mt-2 uppercase">
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
              className="flex gap-5"
            >
              <FaHtml5 className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <FaCss3Alt className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <RiTailwindCssFill className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <FaBootstrap className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <IoLogoJavascript className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <SiTypescript className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <FaReact className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <TbBrandRedux className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <FaNodeJs className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <SiExpress className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <DiMongodb className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <FaWordpress className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
              <FaPhp className="text-6xl md:text-9xl font-bold text-[#06223f31] ml-5" />
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
