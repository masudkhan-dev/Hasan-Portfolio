import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <main>
      <div className="container mx-auto">
        <div className="mt-5">
          {/* Title */}

          <div className="mt-10 mx-5">
            <div className="flex justify-start items-center gap-5 ">
              <h2 className="text-2xl md:text-4xl text-title font-extrabold uppercase">
                My Portfolio
              </h2>
              <div className="bg-[#06223F] h-2 md:h-4 w-24 md:w-32"></div>
            </div>
            <h2 className="text-[#06223f31] font-bold text-3xl md:text-5xl -mt-2 uppercase">
              My Portfolio
            </h2>
          </div>

          {/* Body */}
          <div className="mt-10">
            <div className="flex flex-col gap-10">
              {/* card 1 */}
              <div className="flex flex-col md:flex-row md:justify-start items-center gap-5">
                <div className=" portfolio w-[320px] md:w-[700px] h-[200px] md:h-[450px]">
                  <div className="overlay"></div>
                  <button className="portfolio-btn">Live Preview</button>
                </div>

                {/*  */}
                <div className="flex  items-center gap-5">
                  <h2 className="text-base md:text-lg font-bold">
                    {" "}
                    Project Title
                  </h2>
                  <div className="bg-[#06223F] h-1 w-16"></div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col md:flex-row md:justify-end items-center gap-5">
                {/* desktop */}
                <div className="md:block hidden">
                  <div className="flex justify-start items-center gap-5 ">
                    <h2 className="text-lg font-bold"> Project Title</h2>
                    <div className="bg-[#06223F] h-1 w-16"></div>
                  </div>
                </div>
                <div className="portfolio2 portfolio w-[320px] md:w-[700px] h-[200px] md:h-[450px]">
                  <div className="overlay"></div>
                  <button className="portfolio-btn">Live Preview</button>
                </div>
                {/* mobile */}
                <div className="block md:hidden">
                  <div className="flex justify-start items-center gap-5 ">
                    <h2 className="text-base font-bold"> Project Title</h2>
                    <div className="bg-[#06223F] h-1 w-16"></div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col md:flex-row md:justify-start items-center gap-5">
                <div className="portfolio3 portfolio w-[320px] md:w-[700px] h-[200px] md:h-[450px]">
                  <div className="overlay"></div>
                  <button className="portfolio-btn">Live Preview</button>
                </div>

                {/*  */}
                <div className="flex items-center gap-5">
                  <h2 className="text-base md:text-lg font-bold">
                    {" "}
                    Project Title
                  </h2>
                  <div className="bg-[#06223F] h-1 w-16"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10 mx-5">
            <Link to="portfolio">
              <button className="btn btn-success">Show More</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
