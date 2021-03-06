import { useState } from "react";

export function Header() {
  let [sidebarVisible, setSideBarVisible] = useState(false);

  return (
    <header className="flex bg-black p-2 fixed w-full justify-between content-center top-0 z-50">
      <h3 className="antialiased p-0 m-2 inline-block text-gray-500 font-mono">
        mdgaziur001
      </h3>

      <div
        className="m-2 sm:hidden relative z-50 flex flex-col justify-center"
        onClick={() => setSideBarVisible(!sidebarVisible)}
      >
        <span className="h-0.5 w-4 bg-white block"></span>
        <span className="h-0.5 w-4 mt-1 bg-white block"></span>
        <span className="h-0.5 w-4 mt-1 bg-white block"></span>
      </div>
      <div
        className={`flex-col sm:flex-row items-start ${
          sidebarVisible ? "flex" : "hidden"
        } sm:relative place-items-center sm:block sm:bg-none absolute sm:h-auto left-0 right-0 top-0 bottom-0 h-screen z-40 sm:bg-transparent bg-black`}
      >
        <button className="text-gray-500 sm:p-2 p-5 hover:text-gray-300 transition-colors delay-120 sm:w-auto w-full text-left sm:mt-0 mt-20">
          <a
            href="#introduction"
            onClick={() => setSideBarVisible(!sidebarVisible)}
          >
            Main
          </a>
        </button>
        <button
          className="text-gray-500 sm:p-2 p-5 hover:text-gray-300 transition-colors delay-120 sm:w-auto w-full text-left"
          onClick={() => setSideBarVisible(!sidebarVisible)}
        >
          <a href="#projects">Projects</a>
        </button>
        <button
          className="text-gray-500 sm:p-2 p-5 hover:text-gray-300 transition-colors delay-120 sm:w-auto w-full text-left"
          onClick={() => setSideBarVisible(!sidebarVisible)}
        >
          <a href="#skills">Skills</a>
        </button>
        <button
          className="text-gray-500 sm:p-2 p-5 hover:text-gray-300 transition-colors delay-120 sm:w-auto w-full text-left"
          onClick={() => setSideBarVisible(!sidebarVisible)}
        >
          <a href="#about">About Me</a>
        </button>
        <button
          className="text-gray-500 sm:p-2 p-5 hover:text-gray-300 transition-colors delay-120 sm:w-auto w-full text-left"
          onClick={() => setSideBarVisible(!sidebarVisible)}
        >
          <a href="#contact">Contact Me</a>
        </button>
      </div>
    </header>
  );
}
