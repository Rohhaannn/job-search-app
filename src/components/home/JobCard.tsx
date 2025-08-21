import { Gi3dStairs } from "react-icons/gi";
import { LuStar } from "react-icons/lu";
import { Link } from 'react-router-dom';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  timeAgo: string;
  tags: string[];
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Link
      to={`/job-description/${job.id}`}
      className="max-w-lg bg-[#24294d] rounded-lg block"
    >
      <div className="flex flex-row gap-4 p-4 ">
        <div className="bg-[#9999ff] p-4 rounded-lg">
          <Gi3dStairs size={28} />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold"> {job.title} </p>
          <span className="flex flex-row justify-start items-start gap-1 italic">
            <p>{job.company}</p>
            <p>|</p>
            <p>{job.location}</p>
          </span>
        </div>
      </div>

      <div className="flex flex-row text-sm justify-around items-center">
        {job.tags.map((tag) => (
          <span key={tag} className="bg-[#2e3461] px-4 py-1 rounded-md">
            {tag}
          </span>
        ))}
        <span className="bg-[#2e3461] px-4 py-1 rounded-md">
          {job.salary}
        </span>
      </div>

      <div className="flex flex-row justify-between items-center p-4">
        <div>
          <span className="text-[10px]"> {job.timeAgo} </span>
        </div>
        <div>
          <LuStar size={16} />
        </div>
      </div>
    </Link>
  );
};

export default JobCard;