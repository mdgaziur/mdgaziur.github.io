import CodeMountainLogo from "../ProjectImages/codemountain.png";
import EJLatexLogo from "../ProjectImages/ejlatex.png";
import Chip8RS from "../ProjectImages/chip8rs.png";
import Chaterminal from "../ProjectImages/chaterminal.png";
import Watchman from "../ProjectImages/watchman.png";
import Shortee from "../ProjectImages/shortee.png";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <div
      className="pt-20 max-w-7xl"
      id="projects"
    >
      <h1 className="sm:text-6xl text-3xl text-center font-semibold antialiased text-white">
        My Projects
      </h1>

      <div className="flex flex-wrap sm:p-10 justify-center">
        <ProjectCard
          name="CodeMountainOJ"
          smallDesc="A free and open source online judge for everyone"
          repo="https://github.com/CodeMountainOJ/CodeMountain"
          image={CodeMountainLogo}
        />
        <ProjectCard
          name="Chip8-RS"
          smallDesc="Chip8 interpreter written in Rust"
          repo="https://github.com/mdgaziur/chip8-rs"
          image={Chip8RS}
        />
        <ProjectCard
          name="Chaterminal"
          smallDesc="Decentralized, simple chat application that runs in terminal"
          repo="https://github.com/mdgaziur/chaterminal"
          image={Chaterminal}
        />
        <ProjectCard
          name="Watchman"
          smallDesc="Simple file watcher utility that runs command when file change detected"
          repo="https://github.com/mdgaziur/watchman"
          image={Watchman}
        />
        <ProjectCard
          name="Shortee"
          smallDesc="Simple URL shortener"
          repo="https://github.com/mdgaziur/shortee"
          image={Shortee}
        />
        <ProjectCard
          name="EditorJS LaTeX"
          smallDesc="LaTeX block support for EditorJS"
          repo="https://github.com/mdgaziur/editorjs-latex"
          image={EJLatexLogo}
        />
      </div>
    </div>
  );
}
