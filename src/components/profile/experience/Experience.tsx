import { BsBriefcase } from "react-icons/bs";
import { Gi3dStairs } from "react-icons/gi";
import { LuPlus } from "react-icons/lu";
import { PiPencilSimpleLine } from "react-icons/pi";


export interface ExperienceData {
  role: string;
  company: string;
  location: string;
  duration: string;
}

const Experience = ({ experience }: { experience: ExperienceData[] }) => {
  return (
    <div className="w-[90%] max-w-md mx-auto text-white my-2">
      <div className="bg-[#24294d] rounded-lg p-4">
        <div className="flex flex-row justify-between items-center text-sm gap-5 mb-2">
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="text-[#9999ff]">
              <BsBriefcase size={18} />
            </div>
            <div>
              <span className="text-gray-300 text-base"> Experience </span>
            </div>
          </div>
          <div className="text-[#9999ff]">
            <LuPlus size={18} />
          </div>
        </div>

        <div className="w-full border-t border-gray-500"></div>

        {experience.map((exp, index) => (
          <div key={index} className="flex flex-row justify-between py-4">
            <div className="flex flex-row gap-4 ">
              <div className="bg-[#9999ff] h-fit p-4 rounded-xl">
                <Gi3dStairs size={32} />
              </div>
              <div className="flex flex-col justify-center text-gray-300">
                <p className="font-bold"> {exp.role} </p>
                <span className="flex flex-row justify-start items-start gap-1 italic">
                  <p>{exp.company}</p>
                  <p>|</p>
                  <p>{exp.location}</p>
                </span>
                <span className="text-sm italic">
                  <p> {exp.duration} </p>
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

export default Experience;