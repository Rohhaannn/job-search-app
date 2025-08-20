import { LuPlus } from "react-icons/lu";
import { PiPencilSimpleLine } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";



export interface EducationData {
  degree: string;
  institution: string;
  location: string;
  duration: string;
}

const Education = ({ education }: { education: EducationData[] }) => {
  return (
    <div className="w-[90%] max-w-md mx-auto text-white my-2">
      <div className="bg-[#24294d] rounded-lg p-4">
        <div className="flex flex-row justify-between items-center text-sm gap-5 mb-2">
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="text-[#9999ff]">
              <FaSchool size={18} />
            </div>
            <div>
              <span className="text-gray-300 text-base"> Education </span>
            </div>
          </div>
          <div className="text-[#9999ff]">
            <LuPlus size={18} />
          </div>
        </div>

        <div className="w-full border-t border-gray-500"></div>

        {education.map((edu, index) => (
          <div key={index} className="flex flex-row justify-between my-4">
            <div className="flex flex-row gap-4 ">
              <div className="bg-[#9999ff] h-fit p-4 rounded-xl">
                <IoIosSchool size={32} />
              </div>
              <div className="flex flex-col justify-center text-gray-300">
                <p className="font-bold"> {edu.degree} </p>
                <span className="flex flex-row justify-start items-start gap-1 italic">
                  <p>{edu.institution}</p>
                  <p>|</p>
                  <p>{edu.location}</p>
                </span>
                <span className="text-sm italic">
                  <p> {edu.duration} </p>
                </span>
              </div>
            </div>
            <div className="text-[#9999ff]">
              <PiPencilSimpleLine size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;