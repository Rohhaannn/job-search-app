import data from "../data/data.json";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineShare } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import RecommendedJobs from "./home/RecommendedJobs";
import Navbar from "./common/Navbar";

const Jobs = () => {
  const recommendedJobs = data.home.recommendedJobs;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto text-white min-h-screen p-4">
      <div className="flex flex-row justify-between items-center">     
        <button
          onClick={handleBackClick}
          className="p-2 rounded-full hover:bg-[#24294d]"
        >
          <GoArrowLeft size={24} />       
        </button>  
        <div>
          <h1> Find Suitabe Job </h1>       
        </div>
        <div className="p-2 rounded-full hover:bg-[#24294d]">
          <HiOutlineShare size={20} />       
        </div>
      </div>
      <div className="p-1.5">
        {recommendedJobs.map((job) => (
          <RecommendedJobs key={job.id} job={job} />
        ))}
      </div>
      <Navbar />   
    </div>
  );
};

export default Jobs;
