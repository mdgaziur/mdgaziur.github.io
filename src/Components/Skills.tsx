import C from "../LanguageIcons/c.png";
import CPP from "../LanguageIcons/cpp.png";
import Rust from "../LanguageIcons/rust.png";
import Javascript from "../LanguageIcons/javascript.png";
import Typescript from "../LanguageIcons/typescript.png";
import Python from "../LanguageIcons/python.png";

import MongoDB from "../DatabaseLogos/mongodb.png";
import PostgreSQL from "../DatabaseLogos/postgresql.png";

import ArchLinux from "../OSLogos/archlinux.png";
import Ubuntu from "../OSLogos/ubuntu.png";

export function Skills() {
  return (
    <div
      className="min-h-screen pt-20"
      id="skills"
    >
      <h1 className="sm:text-6xl text-3xl text-center font-semibold antialiased text-white">
        My Skills
      </h1>

      <div className="p-10">
        <h1 className="text-white font-semibold sm:text-xl">
          Programming Languages
        </h1>
        <div className="flex flex-wrap">
          <img
            src={C}
            alt="The C Programming Language"
            className="sm:h-20 sm:w-20 h-10 w-10 m-5"
            title="C"
          ></img>
          <img
            src={CPP}
            alt="The C++ Programming Language"
            className="sm:h-20 sm:w-20 h-10 w-10 m-5"
            title="C++"
          ></img>
          <img
            src={Rust}
            alt="The Rust Programming Language"
            className="sm:h-20 sm:w-20 h-10 w-10 m-5"
            title="Rust"
          ></img>
          <img
            src={Typescript}
            alt="The Typescript Programming Language"
            className="sm:h-20 sm:w-20 h-10 w-10 m-5"
            title="Typescript"
          ></img>
          <img
            src={Python}
            alt="The Python Programming Language"
            title="Python"
            className="sm:h-20 sm:w-20 h-10 w-10 m-5"
          ></img>
          <img
            src={Javascript}
            alt="The Javascript Programming Language"
            className="sm:h-20 sm:w-20 h-10 w-10 m-5"
            title="Javascript"
          ></img>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-white font-semibold sm:text-3xl text-xl">Database</h1>

        <div className="flex flex-wrap">
          <img
            src={MongoDB}
            alt="MongoDB"
            title="MongoDB"
            className="sm:h-20 sm:w-20 h-10 w-10 m-5"
          ></img>
          <img
            src={PostgreSQL}
            alt="PostgreSQL"
            className="sm:h-20 sm:w-20 h-10 w-10 m-5"
            title="PostgreSQL"
          ></img>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-white font-semibold text-3xl">
          OS
        </h1>
        
        <div className="flex flex-wrap items-center">
          <img
            src={ArchLinux}
            alt="Arch Linux"
            className="sm:w-20 sm:h-20 w-10 h-10 m-5"
            title="Arch Linux"
          ></img>
          <img
            src={Ubuntu}
            alt="Ubuntu Linux"
            className="sm:w-20 sm:h-20 w-10 h-10 m-5"
            title="Ubuntu Linux"
          ></img>
        </div>
      </div>
    </div>
  );
}
