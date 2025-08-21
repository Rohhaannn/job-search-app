import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineShare } from "react-icons/hi";
import { TbHexagon3D } from "react-icons/tb";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";


export interface JobDescription {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  description: string;
  responsibilities: string[];
}

const JobDetails = ({ jobData }: { jobData: JobDescription }) => {

  const [activeTab, setActiveTab] = useState("jobDetails");
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto text-white overflow-y-hidden">
      <div className="flex flex-row justify-between items-center p-4">
        <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-[#24294d]">
          <GoArrowLeft size={24} />
        </button>
        <div>
          <h1> Job Description </h1>
        </div>
        <div className="p-2 rounded-full hover:bg-[#24294d]">
          <HiOutlineShare size={20} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 ">
        <div className="bg-[#9999ff] text-black p-4 mt-5 rounded-lg">
          <TbHexagon3D size={36} />
        </div>
        <h1 className="text-xl"> {jobData.title} </h1>
        <div className="flex fex-row gap-2 items-center text-white italic">
          <p>{jobData.company}</p>
          <p>|</p>
          <p>{jobData.location}</p>
        </div>
        <span> {jobData.salary} </span>
        <div className="flex flex-row gap-2 text-sm justify-around items-center ">
          {jobData.tags.map((tag) => (
            <span key={tag} className="bg-[#2e3461] px-4 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-row py-4 px-8 my-5 justify-center ">
        <button
          type="button"
          className={`p-2  cursor-pointer ${
            activeTab === "jobDetails" ? "bg-[#9999ff] text-black" : ""
          }`}
          onClick={() => setActiveTab("jobDetails")}
        >
          Job Details
        </button>
        <button
          type="button"
          className={`p-2  cursor-pointer ${
            activeTab === "aboutCompany" ? "bg-[#9999ff] text-black" : ""
          }`}
          onClick={() => setActiveTab("aboutCompany")}
        >
          About Company
        </button>
      </div>

      <div className="mx-4">
        {activeTab === "jobDetails" && (
          <div>
            <div>
              <h1 className="text-xl">Job Description</h1>
              <p className="text-sm my-2 text-justify">{jobData.description}</p>
            </div>
            <div>
              <h1 className="text-xl my-4">Key Responsibilities</h1>
              <ul className="text-sm list-disc list-inside">
                {jobData.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="my-2">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === "aboutCompany" && (
          <div>
            <h1 className="text-xl">About Company</h1>
            <p className="text-sm my-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat cupiditate quis ad ducimus nam incidunt unde cum laboriosam. Voluptatibus, nemo animi! Sit nihil velit voluptas, ea sequi natus a eos! Nostrum, soluta cum quidem aliquam delectus nisi aut sequi tempore facere quos explicabo autem veniam id, labore placeat repellat amet. Nobis aut iusto adipisci quod explicabo aspernatur est mollitia nostrum dignissimos, at recusandae corrupti cumque molestiae a, iure quam, exercitationem quas totam laudantium possimus sit quia qui? Porro voluptas ipsa reiciendis et, optio laborum culpa ut atque ullam ad accusamus neque placeat delectus tempore explicabo ab illum sequi nam nesciunt labore, enim, recusandae necessitatibus excepturi magnam. Illo asperiores, facere sed eligendi nostrum odit et ex nobis recusandae maxime perferendis reiciendis reprehenderit voluptates assumenda explicabo repellendus non quaerat, dolorem sunt deserunt dignissimos ea veritatis? Voluptate natus ea qui nulla culpa ullam omnis saepe magnam libero. Similique quaerat nostrum sit eaque!
            </p>
          </div>
        )}


        <Button />

      </div>
    </div>
  );
};

export default JobDetails;