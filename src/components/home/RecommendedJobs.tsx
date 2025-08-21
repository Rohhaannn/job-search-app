import { FaRegBookmark } from "react-icons/fa6";
import { TbHexagon3D } from "react-icons/tb";

export interface RecommendedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  timeAgo: string;
  tags: string[];
}

const RecommendedJobs = ({ job }: { job: RecommendedJob }) => {
  return (
    <a
      href="/job-description"
      className="max-w-lg bg-[#24294d] rounded-lg block"
    >
      <div className="relative flex flex-row gap-5 p-4 my-4 mx-4">
        <div className="bg-[#9999ff] p-4 rounded-lg">
          <TbHexagon3D size={32} />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold"> {job.title} </p>
          <span className="flex flex-row justify-start items-start gap-1 italic">
            <p>{job.company}</p>
            <p>|</p>
            <p>{job.location}</p>
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <FaRegBookmark />
        </div>
      </div>

      <div className="flex flex-row text-sm justify-around items-center ">
        {job.tags.map((tag) => (
          <span key={tag} className="bg-[#2e3461] px-4 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-row justify-between items-center p-4">
        <div>
          <span className="text-base"> {job.salary} </span>
        </div>
        <div>
          <span> {job.timeAgo} </span>
        </div>
      </div>
    </a>
  );
};

export default RecommendedJobs;