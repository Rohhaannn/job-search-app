
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobDetailsPage from './pages/JobDetailsPage';
import ProfilePage from './pages/ProfilePage';
import Jobs from './components/Jobs';
import Messages from './components/Messages';
import Navbar from './components/common/Navbar';
import data from './data/data.json';

const JobDetailsWrapper = () => {
  const jobDescriptionData = data.jobDescription;

  if (jobDescriptionData) {
    return <JobDetailsPage jobData={jobDescriptionData} />;
  }

  return <div>Job not found!</div>;
};

const App = () => {
  return (
    <div className='relative'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/job-description/:id" element={<JobDetailsWrapper />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Navbar />
    </div>
  );
};

export default App;