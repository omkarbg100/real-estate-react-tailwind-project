import React from "react";
import AboutImage from "../assets/brand_img.png";

function About() {
  return (
    <div id="About" className="flex justify-center content-center md:min-h-screen  m-auto md:p-16 p-8">
      <div>
        <div className="flex flex-col justify-evenly  m-auto items-center p-4 pb-8">
          <h1 className="text-4xl">
            About <span className="">Our Brand</span>
          </h1>
          <span className="text-wrap w-80 text-center">
            Passionate About Properties, Dedicated to Your Vision
          </span>
        </div>
        <div className="flex flex-col justify-evenly h-auto  m-auto md:flex-row p-4 ">
          <img
            src={AboutImage}
            alt="brand image"
            className=" h-4/5  m-auto   md:h-4/5 p-8 w-3/4 md:w-3/5 xl:w-5/12"
          />
          <div className="p-0 m-4 flex flex-col items-center justify-center md:p-8">
            <div className="grid grid-cols-2 gap-4 xl:gap-8">
              <span>
                {" "}
                <h1 className="text-3xl font-bold md:text-4xl">10+</h1>
                <p className="md:text-2xl text-black">Years of Excellence</p>
              </span>
              <span>
                {" "}
                <h1 className="text-3xl font-bold md:text-4xl">12+</h1>
                <p className="md:text-2xl text-black">Projects Completed</p>
              </span>
              <span>
                {" "}
                <h1 className="text-3xl font-bold md:text-4xl">20+</h1>
                <p className="md:text-2xl text-black">Mn. Sq. Ft. Delivered</p>
              </span>
              <span>
                {" "}
                <h1 className="text-3xl font-bold md:text-4xl">25+</h1>
                <p className="md:text-2xl text-black">Ongoing Projects</p>
              </span>
            </div>
            <div className="h-auto flex items-center flex-col  justify-evenly">
              <div>
                <p className="text-wrap font-sans text-1xl m-auto max-w-4/5 p-16 md:p-2 xl:p-12 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div><a
                  href="#"
                  className="  md:p-4 p-2 m-auto my-4 md:max-8 border-blue-400 border-2 rounded-sm text-white bg-blue-500"
                >
                  Learn More
                </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
