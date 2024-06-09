import Marquee from "react-fast-marquee";

// svg files
import figma from "../../../public/Service/figma.1029bdd0.svg";
import javascript from "../../../public/Service/javascript.b181c09e.svg";
import firebase from "../../../public/Service/firebase.00a078b9.svg";
import html from "../../../public/Service/html.017306fd.svg";
import css from "../../../public/Service/css.18a757c4.svg";
import Typescript from "../../../public/Service/typescript.e2083e1d.svg";
import bootstrap from "../../../public/Service/bootstrap.c61c87af.svg";
import tailwind from "../../../public/Service/tailwind.0327ce72.svg";
import git from "../../../public/Service/git.50ce77c0.svg";
import mongoDB from "../../../public/Service/mongoDB.bdbfe282.svg";
import react from "../../../public/Service/react.63480b3c.svg";
import nextJS from "../../../public/Service/nextJS.5d08e3a4.svg";
import nodeJS from "../../../public/Service/Node.js.svg";
import redux from "../../../public/Service/redux-svgrepo-com.svg";
import wordpress from "../../../public/Service/wordpress-icon.svg";
import php from "../../../public/Service/new-php-logo.svg";
import expressJS from "../../../public/Service/express-svgrepo-com.svg";
import github from "../../../public/Service/github-142-svgrepo-com.svg";
import bun from "../../../public/Service/Bun.svg";
import npm from "../../../public/Service/NPM.svg";
import vscode from "../../../public/Service/Visual Studio Code (VS Code).svg";
import photoshop from "../../../public/Service/Adobe_Photoshop_CC_icon.svg";

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
          <h2 className="text-[#06223f31] font-bold text-5xl md:text-9xl-mt-2 uppercase">
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
              direction="left"
            >
              <div className="flex gap-10">
                <img src={html} alt="" className="w-20 h-20" />
                <img src={css} alt="" className="w-20 h-20" />
                <img src={bootstrap} alt="" className="w-20 h-20" />
                <img src={tailwind} alt="" className="w-20 h-20" />
                <img src={javascript} alt="" className="h-20 w-20" />
                <img src={Typescript} alt="" className="h-20 w-20" />
                <img src={react} alt="" className="h-20 w-20" />
                <img src={redux} alt="" className="h-20 w-20" />
                <img src={nextJS} alt="" className="h-20 w-20" />

                <img src={nodeJS} alt="" className="h-20 w-20" />
                <img src={expressJS} alt="" className="h-20 w-20" />
                <img src={mongoDB} alt="figma" className="w-20 h-20" />
                <img src={php} alt="" className="h-20 w-20" />
                <img src={wordpress} alt="" className="h-20 w-20" />

                <img src={photoshop} alt="" className="h-20 w-20" />
                <img src={figma} alt="figma" className="w-20 h-20" />
                <img src={firebase} alt="" className="h-20 w-20" />
                <img src={git} alt="" className="h-20 w-20" />
                <img src={github} alt="" className="h-20 w-20" />
                <img src={bun} alt="" className="h-20 w-20" />
                <img src={npm} alt="" className="h-20 w-20" />
                <img src={vscode} alt="" className="h-20 w-20 mr-10" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Service;
