type ProjectCardProps = {
  name: string,
  smallDesc: string,
  image: string,
  repo: string
};

export function ProjectCard({ name, smallDesc, image, repo }: ProjectCardProps) {
  return (
    <div
      className="sm:p-5 p-2.5 flex flex-col justify-center items-center sm:ml-5 mt-5 first:ml-0 1th rounded-lg"
      style={{
        background: "#101010",
        width: "290px",
        height: "400px"
      }}
    >
      <img src={image} alt={name+" logo"} className="w-28 mb-10" />
      <div>
        <h1 className="sm:text-2xl text-xl m-0 p-0 text-white text-center subpixel-antialiased font-semibold">
          {name}
        </h1>
        <p className="text-center sm:mt-5 text-white antialiased p-0">
          {smallDesc}
        </p>
        <div className="flex justify-center">
          <button
            className="flex-shrink-0 antialiased bg-red-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-gray-900 m-2"
            type="button"
            onClick={() => {
              window.open(
                repo,
                "_blank"
              );
            }}
          >
            Repository
          </button>
        </div>
      </div>
    </div>
  );
}
