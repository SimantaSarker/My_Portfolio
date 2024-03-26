import workImg from "../assets/projects/language.png";
import action from "../assets/projects/action.png";
import food from "../assets/projects/food.png";

const Work = () => {



  return (
    <div name="work" className="w-full md:h-screen text-gray-300  bg-[#0a192f] ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline  border-b-4 text-pink-400">
            Projects
          </p>
          <p className="py-3">Check out of My Recent Projects</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded h-full">
        <div className="card  h-[85%]  bg-base-100 shadow-xl hover:scale-90  hover:bg-[#273d39] duration-500">
            <figure className="h-1/2">
              <img src={workImg} alt="Shoes" className="w-full h-full" />
            </figure>
            <div className="card-body bg-[#1b3151] h-1/2">
              <h2 className="card-title text-white text-3xl">
                Foregion language Learning Platform
              </h2>

              <div className="card-actions justify-evenly my-4">
                <a href="https://assignment-12-c7c47.web.app/">
                  <button className="btn btn-outline btn-info btn-sm ">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/SimantaSarker/Language-Academy">
                  <button className="btn btn-outline btn-info btn-sm">
                    Client
                  </button>
                </a>
                <a href="https://github.com/SimantaSarker/Language-Academy-Server">
                  <button className="btn btn-outline btn-info btn-sm">
                    Server
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card  h-[85%] bg-base-100 shadow-xl hover:scale-90  hover:bg-[#273d39] duration-500">
            <figure className="h-1/2">
              <img src={action} alt="Shoes" className="w-full h-full" />
            </figure>
            <div className="card-body bg-[#1b3151] h-1/2 ">
              <h2 className="card-title text-white text-3xl">
              Online Toys marketplace
              </h2>

              <div className="card-actions justify-evenly my-4 ">
                <a href="https://assingnment-11.web.app/">
                  <button className="btn btn-outline btn-info btn-sm ">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/SimantaSarker/Action-Toys-Universe">
                  <button className="btn btn-outline btn-info btn-sm">
                    Client
                  </button>
                </a>
                <a href="https://github.com/SimantaSarker/Action-Toys_Server">
                  <button className="btn btn-outline btn-info btn-sm">
                    Server
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card  h-[85%] bg-base-100 shadow-xl hover:scale-90  hover:bg-[#273d39] duration-500 ">
            <figure className="h-1/2">
              <img src={food} alt="Shoes" className="w-full h-full" />
            </figure>
            <div className="card-body bg-[#1b3151] h-1/2">
              <h2 className="card-title text-white text-3xl">
                Find best Chef
              </h2>

              <div className="card-actions justify-evenly my-4">
                <a href="https://assignment-10-yummy-food.web.app/">
                  <button className="btn btn-outline btn-info btn-sm ">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/SimantaSarker/Yummy-Food-Zone">
                  <button className="btn btn-outline btn-info btn-sm">
                 Client
                  </button>
                </a>
                <a href="https://github.com/SimantaSarker/Yummy-Food-Zone-Server">
                  <button className="btn btn-outline btn-info btn-sm">
                 Server
                  </button>
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
