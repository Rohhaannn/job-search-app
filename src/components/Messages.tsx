import { GoArrowLeft } from "react-icons/go";
import { HiOutlineShare } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Navbar from "./common/Navbar";

const Messages = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto text-white min-h-screen overflow-y-hidden">
      <div className="p-4">
        <div className="flex flex-row justify-between items-center">
          <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-[#24294d]">
            <GoArrowLeft size={24} />
          </button>
          <div>
            <h1> Messages </h1>
          </div>
          <div className="p-2 rounded-full hover:bg-[#24294d]">
            <HiOutlineShare size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold mb-4"> No Messages Yet </h2>
        <p className="text-gray-400 px-6 text-center">Start a conversation with someone to see messages here.</p>
      </div>
      <Navbar />
    </div>
  );
};

export default Messages;