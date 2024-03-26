const Home = () => {
  const handleResume = () => {
    const resumeURL = "Simanta_Resume.pdf";
    const anchor = document.createElement("a");
    anchor.href = resumeURL;
    anchor.download = "Simanta_Resume.pdf";
    anchor.click();
  };

  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-400">Hi my Name is</p>
        <h1 className="uppercase text-4xl sm:text-7xl font-bold text-white">
          Simanta Sarker
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
          Passionate <span className="text-pink-400">Front End and Testing</span> developer
        </h2>
        <p className="text-gray-500 py-4 max-w-[600px] text-2xl">
          Specialization in building in exceptional digital experiences.
          Currently I am focused on responsive MERN web application
        </p>
        <div onClick={handleResume}>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center justify-between hover:bg-pink-600 duration-700 text-2xl gap-3">
            Download Resume{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
