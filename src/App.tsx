import React, {useState} from 'react';
import './App.scss';
import ProjectCard from "./component/project_card";

function App() {
    let [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <div>
            <button className="z-30 fixed right-5 top-5 border-2 border-zinc-400 h-14 w-14 rounded-full" onClick={() => setIsNavVisible(!isNavVisible)}>
                <div className={`h-0.5 w-5 bg-zinc-400 absolute transition-all left-4 ${isNavVisible ? 'rotate-45 top-6' : 'top-4'}`}></div>
                <div className={`h-0.5 w-5 bg-zinc-400 absolute transition-all left-4 ${isNavVisible ? 'opacity-0' : 'top-6'}`}></div>
                <div className={`h-0.5 w-5 bg-zinc-400 absolute transition-all left-4 ${isNavVisible ? '-rotate-45 top-6' : 'top-8'}`}></div>
            </button>
            <nav className={`z-20 nav ${isNavVisible ? 'nav-visible' : 'nav-invisible'}`}>
                <div className="grid gap-5">
                    <a className="sm:text-7xl text-5xl font-extrabold tracking-tighter hover:text-zinc-300 transition-all" onClick={() => setIsNavVisible(false)} href="/">Main</a>
                    <a className="sm:text-7xl text-5xl font-extrabold tracking-tighter hover:text-zinc-300 transition-all" onClick={() => setIsNavVisible(false)} href="#about">About Me</a>
                    <a className="sm:text-7xl text-5xl font-extrabold tracking-tighter hover:text-zinc-300 transition-all" onClick={() => setIsNavVisible(false)} href="#skills">Skills</a>
                    <a className="sm:text-7xl text-5xl font-extrabold tracking-tighter hover:text-zinc-300 transition-all" onClick={() => setIsNavVisible(false)} href="#projects">Projects</a>
                    <a className="sm:text-7xl text-5xl font-extrabold tracking-tighter hover:text-zinc-300 transition-all" onClick={() => setIsNavVisible(false)} href="#contact">Contact Me</a>
                </div>
            </nav>
            <header className="h-screen flex flex-col p-5 justify-center items-center gap-3">
                <div>
                    <h1 className="sm:text-7xl text-5xl font-extrabold tracking-tighter">Hi!</h1>
                    <h1 className="sm:text-7xl text-5xl font-extrabold tracking-tighter">I am MD Gaziur Rahman Noor</h1>
                    <h2 className="text-3xl font-extrathin tracking-tighter"><i>Programmer. Student. Problem Solver.</i>
                    </h2>
                </div>
            </header>
            <div id="about" className="p-10 flex flex-wrap gap-20 items-center justify-between bg-white text-black">
                <h1 className="sm:text-7xl text-5xl font-extrabold tracking-tighter">About Me</h1>
                <p className="font-semibold tracking-tighter text-2xl max-w-3xl">
                    I'm a student and a programmer originating from Bangladesh. I have interest in
                    problem solving, reading CS books, learning about the low level stuff that powers
                    modern technology and making cool websites.
                    <br/>
                    <br/>
                    Current status: Preparing for College
                </p>
            </div>
            <div id="projects" className="bg-indigo-900">
                <div className="p-10 flex flex-wrap gap-20 items-center justify-between">
                    <h1 className="font-extrabold tracking-tighter sm:text-7xl text-5xl">Projects</h1>
                    <p className="font-semibold tracking-tighter text-2xl max-w-3xl">
                        Projects I've worked on since I've started programming seriously in 2020
                    </p>
                </div>
                <div className="projects-grid">
                    <ProjectCard name="Findex" repo="mdgaziur/findex"
                                 status="Maintained"
                                 description="Highly customizable application finder with high performance. Written in Rust and uses GTK"
                                 colspan="col-span-3"
                                 tech="Rust GTK3"
                    ></ProjectCard>
                    <ProjectCard name="NerdTree Website" repo="nerdtree-org/nerdtree"
                                 status="Under development"
                                 description="Web infrastructure for NerdTree"
                                 colspan="col-span-4"
                                 tech="Rust Actix-Web Svelte SCSS TailwindCSS"
                    ></ProjectCard>
                    <ProjectCard name="Rig Language" repo="mdgaziur/riglang"
                                 status="Under development"
                                 description="Statically typed imperative scripting language"
                                 colspan="col-span-4"
                                 tech="Rust"
                    ></ProjectCard>
                    <ProjectCard name="FerricOxide OS" repo="mdgaziur/ferricoxide-os"
                                 status="Under development"
                                 description="Operating system made for learning purpose"
                                 colspan="col-span-3"
                                 tech="Rust"
                    ></ProjectCard>
                </div>
            </div>
            <div id="skills" className="bg-zinc-900">
                <h1 className="p-10 pb-0 sm:text-7xl text-5xl tracking-tighter font-extrabold">Skills</h1>
                <h2 className="p-10 sm:text-5xl text-3xl tracking-tighter font-bold mt-10">Languages:</h2>
                <div className="pt-5 pl-1 pr-1 pb-1 md:grid flex flex-col grid-cols-7 gap-1">
                    <h3 className="bg-amber-700 p-10 col-span-2 text-center text-4xl tracking-tighter font-extrabold">Rust</h3>
                    <h3 className="bg-blue-500 p-10 col-span-1 text-center text-4xl tracking-tighter font-extrabold">C</h3>
                    <h3 className="bg-blue-700 p-10 col-span-2 text-center text-4xl tracking-tighter font-extrabold">C++</h3>
                    <h3 className="bg-yellow-600 p-10 col-span-2 text-center text-4xl tracking-tighter font-extrabold">Python</h3>
                    <h3 className="bg-yellow-500 p-10 col-span-3 text-center text-4xl tracking-tighter font-extrabold">Javascript</h3>
                    <h3 className="bg-blue-800 p-10 col-span-4 text-center text-4xl tracking-tighter font-extrabold">Typescript</h3>
                </div>
                <h2 className="p-10 sm:text-5xl text-3xl tracking-tighter font-bold mt-10">Technologies:</h2>
                <div className="pt-5 pl-1 pr-1 pb-1 md:grid flex flex-col grid-cols-7 gap-1">
                    <h3 className="bg-amber-500 p-10 col-span-3 text-center text-4xl tracking-tighter font-extrabold">Actix Web</h3>
                    <h3 className="bg-orange-600 p-10 col-span-2 text-center text-4xl tracking-tighter font-extrabold">Svelte</h3>
                    <h3 className="bg-blue-500 p-10 col-span-2 text-center text-4xl tracking-tighter font-extrabold">React</h3>
                    <h3 className="bg-blue-700 p-10 col-span-2 text-center text-4xl tracking-tighter font-extrabold">PostgreSQL</h3>
                    <h3 className="bg-pink-700 p-10 col-span-2 text-center text-4xl tracking-tighter font-extrabold">SCSS</h3>
                    <h3 className="bg-cyan-500 p-10 col-span-3 text-center text-4xl tracking-tighter font-extrabold">TailwindCSS</h3>
                    <h3 className="bg-green-400 p-10 col-span-4 text-center text-4xl tracking-tighter font-extrabold">GTK3</h3>
                    <h3 className="bg-blue-600 p-10 col-span-3 text-center text-4xl tracking-tighter font-extrabold">Docker</h3>
                </div>
            </div>
            <div id="contact">
                <h1 className="p-10 sm:text-7xl text-5xl tracking-tighter font-extrabold">Contact Information</h1>
                <div className='flex flex-wrap sm:text-4xl text-2xl tracking-tighter font-extrabold gap-0.5 pt-0.5 pb-0.5 bg-black'>
                    <a className='sm:pt-20 sm:pb-20 sm:p-10 p-5 text-center flex-1 text-zinc-300 hover:text-zinc-500' style={{background:'rgb(17,17,17)'}} target="_blank" rel="noreferrer" href="https://facebook.com/real.mdgaziur.rahmannoor">Facebook</a>
                    <a className='sm:pt-20 sm:pb-20 sm:p-10 p-5 text-center flex-1 text-zinc-300 hover:text-zinc-500' style={{background:'rgb(17,17,17)'}} target="_blank" rel="noreferrer" href="https://twitter.com/mdgaziurrahman7">Twitter</a>
                    <a className='sm:pt-20 sm:pb-20 sm:p-10 p-5 text-center flex-1 text-zinc-300 hover:text-zinc-500' style={{background:'rgb(17,17,17)'}} target="_blank" rel="noreferrer" href="https://github.com/mdgaziur">Github</a>
                    <a className='sm:pt-20 sm:pb-20 sm:p-10 p-5 text-center flex-1 text-zinc-300 hover:text-zinc-500' style={{background:'rgb(17,17,17)'}} target="_blank" rel="noreferrer" href="https://linkedin.com/in/mdgaziur">LinkedIn</a>
                    <a className='sm:text-4xl flex items-center text-lg text-center sm:pt-20 sm:pb-20 sm:p-10 p-2 flex-1 text-zinc-300 hover:text-zinc-500' style={{background:'rgb(17,17,17)'}} target="_blank" rel="noreferrer" href="mailto:mdgaziurrahmannoor@gmail.com">mdgaziurrahmannoor@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default App;
