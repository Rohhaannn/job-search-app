import { HiOutlineShare } from "react-icons/hi"
import Aboutme from "./aboutMe/Aboutme"
import ContactInfo from "./contactInfo/ContactInfo"
import Education from "./education/Education"
import Experience from "./experience/Experience"
import { GoArrowLeft } from "react-icons/go"
import Navbar from '../../components/common/Navbar'
import data from '../../data/data.json';
import { useNavigate } from "react-router-dom";

const profileSection = () => {


  const aboutMeText = data.profile.aboutMe;
  const contactInfoData = data.profile.contactInfo;
  const experienceData = data.profile.experience;
  const educationData = data.profile.education;

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto text-white min-h-screen overflow-y-hidden">

      <div className="flex flex-row justify-between items-center p-4">  
        <button onClick={handleBackClick} className="p-2 rounded-full hover:bg-[#24294d]">
          <GoArrowLeft size={24} />
        </button>
        <div>
          <h1> Profile </h1>       
        </div>
        <div className="p-2 rounded-full hover:bg-[#24294d]">
          <HiOutlineShare size={20} />       
        </div>  
      </div>

      <div className="my-4">
        <img
          src="https://project-assets-phi.vercel.app/assets/amonex-images/mypic.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mt-4"
        />
        <h1 className="text-xl text-center mt-2"> {data.profile.name} </h1>
        <p className="text-center text-gray-400"> {data.profile.role} </p>
      </div>

      <ContactInfo contact={contactInfoData} />
      <Aboutme aboutMe={aboutMeText} />
      <Experience experience={experienceData}/>
      <Education education={educationData}/>

      <Navbar/>
    </div>
  )
}

export default profileSection
