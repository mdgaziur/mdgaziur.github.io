export function Introduction() {
  return (
    <div
      className="flex flex-col justify-center items-center sm:m-0 min-h-screen w-full"
      id="introduction"
    >
      <div className="p-5">
        <h2 className="sm:text-5xl text-2xl font-semibold text-red-600 antialiased">
          Hello! I'm
        </h2>
        <div className="sm:mt-5 flex flex-wrap">
          <h1 className="sm:text-7xl text-6xl font-semibold text-white antialiased">
            MD Gaziur Rahman Noor
          </h1>
          <sup className="z-0 relative italic text-sm text-gray-400 font-mono mt-2">
            I use Arch BTW
          </sup>
        </div>
        <h2 className="sm:text-5xl text-2xl text-gray-400 font-semibold antialiased mt-5">
          Muslim. Programmer. Student
        </h2>
        <h3 className="sm:text-4xl text-2xl font-semibold text-white antialiased mt-4">
          Maintainer of{" "}
          <a
            className="font-semibold antialiased underline text-green-500"
            href="https://github.com/CodeMountainOJ/CodeMountain"
          >
            CodeMountainOJ
          </a>
        </h3>
      </div>
    </div>
  );
}
