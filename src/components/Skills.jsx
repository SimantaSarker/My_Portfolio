import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import mongoDb from "../assets/mongo.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import express from "../assets/express.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div>
          <p className="font-bold inline border-b-4 border-pink-400 text-4xl">
            Skills
          </p>
          <p className="py-4 text-xl">
            These are the technology that I have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-12 text-center py-8">
          <div className="shadow-md shadow-[#1c487d] hover:scale-110  hover:bg-[#273d39] duration-500 py-2">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#1c487d] hover:scale-110 hover:bg-[#273d39] duration-500 py-2">
            <img src={CSS} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#1c487d] hover:scale-110 hover:bg-[#273d39] duration-500 py-2">
            <img src={Javascript} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#1c487d] hover:scale-110 hover:bg-[#273d39] duration-500 py-2">
            <img src={ReactImg} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#1c487d] hover:scale-110 hover:bg-[#273d39] duration-500 py-2">
            <img src={node} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#1c487d] hover:scale-110 hover:bg-[#273d39] duration-500 py-2">
            <img src={mongoDb} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">MONGODB</p>
          </div>
          <div className="shadow-md shadow-[#1c487d] hover:scale-110 hover:bg-[#273d39] duration-500 py-2">
            <img src={express} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#1c487d] hover:scale-110 hover:bg-[#273d39] duration-500 py-2">
            <img src={firebase} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#1c487d] hover:scale-110 hover:bg-[#273d39] duration-500 py-2">
            <img src={tailwind} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
