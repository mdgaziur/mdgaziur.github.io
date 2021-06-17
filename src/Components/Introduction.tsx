type props = {
    sidebarVisible: Boolean
};

export function Introduction({ sidebarVisible }: props) {
    return (
        <div className="flex flex-col justify-center items-center sm:m-0 h-screen w-full" id="introduction">
            <div className="p-5">
                <h2 className="sm:text-5xl text-2xl font-semibold text-red-600 antialiased">Hello! I'm</h2>
                <h1 className="sm:text-7xl text-4xl font-semibold text-white antialiased">MD Gaziur Rahman Noor</h1>
                <h2 className="sm:text-5xl text-2xl text-gray-400 font-semibold antialiased">Muslim. Programmer. Student</h2>
            </div>
            <div className="m-10">
                {
                    !sidebarVisible
                    &&
                    <svg className="animate-bounce w-6 h-6 text-red-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                }
            </div>
        </div>
    )
}