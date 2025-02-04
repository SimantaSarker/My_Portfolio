const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center  w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-400">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[970px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold w-[90%]">
              <p>Hi , I am Simanta Nice to meet you. Please take a look...</p>
            </div>
            <div className="text-xl">
              <p>I am passionate about building excellent software that improves of those around me.I specialize is creating software for clients ranging from individuals  and small business all the way to large enterprise corporations. What would you do if you had a software export available at your fingertips</p>
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default About;
