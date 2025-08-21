

import JobDetails, { type JobDescription } from '../components/job-details/JobDetails';

export interface JobDetailsPageProps {
  jobData: JobDescription;
}

const JobDetailsPage = ({ jobData }: JobDetailsPageProps) => {
  return <JobDetails jobData={jobData} />;
};

export default JobDetailsPage;