import React from "react";

function Home() {
  return (
    <div>
      <div className="space-y-12">
        <section className="h-screen flex justify-center items-center">
          <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl ">
            <h1 className="text-5xl font-bold leading-none sm:text-7xl mb-4">
            Explore homes that fit your dreams
            </h1>
            <div className="flex flex-wrap justify-center">
              <a className="px-6 py-3 m-3 text-lg font-semibold rounded border  border-blue-500 dark:bg-violet-600 dark:text-gray-50  hover:text-blue-500" href="#Projects">
                Projects
              </a>
              <a className="px-6 py-3 m-3 text-lg border rounded  bg-blue-500 hover:bg-blue-500" href="#Contact">
                Contact us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
