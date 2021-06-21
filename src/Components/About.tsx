import Me from "../me.jpeg";

export function About() {
  return (
    <div
      className="sm:h-screen pt-20 max-w-7xl"
      id="about"
    >
      <h1 className="sm:text-6xl text-3xl text-center font-semibold antialiased text-white">
        About Me
      </h1>
      <div className="flex flex-wrap sm:flex-nowrap m-5 justify-center sm:justify-start">
        <img className="rounded-lg w-40 h-40 sm:w-80 sm:h-80 mb-5 sm:mb-0" src={Me} alt="Me" />
        <div className="sm:m-10">
          <p className="text-white font-semibold sm:text-xl subpixel-antialiased">
            Hello! I'm MD Gaziur Rahman Noor. Currently Living in Sylhet,
            Bangladesh. I'm a student. I also do programming.
            In leisure time, I read books, play Minecraft or chat with friends.
            I started programming in 2017. I was 11 years old then 😅. Nowadays, I do programming at least
            4 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
