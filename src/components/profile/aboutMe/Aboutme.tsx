import { PiPencilSimpleLine } from "react-icons/pi"
import { BsCardText } from "react-icons/bs";

export interface AboutMeData {
  aboutMe: string;
}

const Aboutme = ({ aboutMe }: { aboutMe: string }) => {
  return (
    <div className="w-[90%] max-w-md mx-auto text-white my-2">
      <div className="bg-[#24294d] rounded-lg p-4">
        <div className="flex flex-row justify-between items-center text-sm gap-5 mb-2">
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="text-[#9999ff]">
              <BsCardText size={18} />
            </div>
            <div>
              <span className="text-gray-300 text-base"> About Me </span>
            </div>
          </div>
          <div className="text-[#9999ff]">
            <PiPencilSimpleLine size={18} />
          </div>
        </div>
        <div className="w-full border-t border-gray-500"></div>
        <div>
          <p className="text-gray-400 text-sm py-2">
            {aboutMe}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;