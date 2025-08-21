import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import {  LuMenu, LuBellDot  } from 'react-icons/lu';
import SearchBar from '../components/common/SearchBar';
import JobCard from '../components/home/JobCard';
import RecommendedJobs from '../components/home/RecommendedJobs';
import data from '../data/data.json';
import { useNavigate } from 'react-router-dom';


const HomePage: React.FC = () => {

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const suggestedJobs = data.home.suggestedJobs;
  const recommendedJobs = data.home.recommendedJobs;

  const handleSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-lg mx-auto text-white min-h-screen">

      <Navbar />

      <main className="p-4 sm:px-6 md:px-8">
        <div className='flex justify-between items-center mb-6 '>
          <div>
            <LuMenu size={24}/>
          </div>
          <div className='flex flex-row justify-between items-center gap-5'>
            <span>
              <LuBellDot size={20}/>
            </span>

            <button
              onClick={handleProfileClick}
              className='cursor-pointer bg-transparent border-none p-0'
              aria-label="Go to profile"
              tabIndex={0}
              type="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProfileClick();
                }
              }}
            >
              <img src="https://project-assets-phi.vercel.app/assets/amonex-images/mypic.png" alt="Profile" className="w-8 h-8 rounded-full" />
            </button>

          </div>
        </div>

        <h1 className='text-2xl text-white '> Let&apos;s Find Job </h1>

        <div className="relative mt-4">
          <SearchBar/>
        </div>


        <div className="mt-5">
          <div className='flex flex-row justify-between items-center mb-4'>
            <h1 className='text-xl'>
              Suggested for you
            </h1>
            <span className='text-[#9999ff] text-[12px] underline'>
              View All
            </span>
          </div>


          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)`}}
            >
              {suggestedJobs.map((job) => (
                <div key={job.id} className="flex-shrink-0 w-full">
                  <JobCard job={job} />
                </div>
              ))}c
            </div>


            <div className="flex justify-center mt-3 gap-2">
              {suggestedJobs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? 'bg-white' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>


        <div className="mt-8 flex flex-col gap-4">
          <div className='flex flex-row justify-between items-center mb-4'>
            <h1 className='text-xl'>
              Recommended Jobs
            </h1>
            <span className='text-[#9999ff] text-[12px] underline'>
              View All
            </span>
          </div>
          {recommendedJobs.map((job) => (
            <RecommendedJobs key={job.id} job={job} />
          ))}

        </div>
      </main>
    </div>
  );
};

export default HomePage;
