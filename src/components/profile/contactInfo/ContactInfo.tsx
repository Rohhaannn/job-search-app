import { CiUser } from "react-icons/ci";
import { PiPencilSimpleLine } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail, FiPhone } from "react-icons/fi";

// Define the interface for the contact information data
export interface ContactInfoData {
  location: string;
  phone: string;
  email: string;
}

const ContactInfo = ({ contact }: { contact: ContactInfoData }) => {
  return (
    <div className="w-[90%] max-w-md mx-auto text-white">
      <div className="bg-[#24294d] rounded-lg p-4">
        <div className="flex flex-row justify-between items-center text-sm gap-5 mb-2">
          <div className="flex flex-row justify-start items-center gap-2">
            <div className="text-[#9999ff]">
              <CiUser size={18} />
            </div>
            <div>
              <span className="text-gray-300 text-base">Contact Info</span>
            </div>
          </div>
          <div className="text-[#9999ff]">
            <PiPencilSimpleLine size={18} />
          </div>
        </div>

        <div className="w-full border-t border-gray-500"></div>

        <div className="flex flex-col gap-y-2 py-2 text-gray-400 ">
          <div className="flex flex-row justify-start items-center gap-2">
            <span>
              <HiOutlineLocationMarker size={18} />
            </span>
            <span>
              {contact.location}
            </span>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <span>
              <FiPhone size={18} />
            </span>
            <span>
              {contact.phone}
            </span>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <span>
              <FiMail size={18} />
            </span>
            <span>
              {contact.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;