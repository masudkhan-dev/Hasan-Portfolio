import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="bg-[#06223F]">
      <div className="container mx-auto">
        <div className=" pb-16 rounded-xl mt-16">
          {/* Title */}
          <div className=" pt-20 px-5 md:px-10">
            <div className="flex justify-end items-center gap-5 ">
              <div className="bg-[#efeff0] h-2 w-32"></div>
              <h2 className="text-2xl md:text-4xl text-white uppercase  font-extrabold">
                Get In Touch
              </h2>
            </div>
            <div className="flex justify-end">
              <h2 className="text-3xl md:text-5xl text-[#ffffff5b] uppercase  font-extrabold">
                Get In Touch
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-20">
            <div className="mx-5 md:mx-10">
              <form action="" className="flex flex-col gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full h-10 p-5 bg-[#06223F] border-2 border-white outline-none text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-10 p-5 bg-[#06223F] border-2 border-white outline-none text-white"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Message"
                    className="w-full p-5 bg-[#06223F] border-2 border-white outline-none text-white"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn w-full"
                  />
                </div>
              </form>
            </div>
            <div className="text-white mx-5 md:mx-10 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <CgMail className="text-white text-xl" />
                <h2>Safinahmedhaasan@gmail.com</h2>
              </div>
              <div className="flex items-center gap-2">
                <IoCall className="text-white text-xl" />
                <h2>+8801321-768486</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaSquareWhatsapp className="text-white text-xl" />
                <h2>whatsapp</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-white text-xl" />
                <h2>Linkedin</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaFacebook className="text-white text-xl" />
                <h2>Facebook</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaInstagram className="text-white text-xl" />
                <h2>Instagram</h2>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center py-10">
          <h2>All Rights reserve &copy; Safin Ahmed Hasan </h2>
        </footer>
      </div>
    </main>
  );
};

export default Contact;
