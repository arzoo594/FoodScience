import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcon = () => {
  return (
    <div className="flex items-center gap-4">
      <FaFacebook className="text-3xl text-[#1877F2] hover:scale-110 transition-transform cursor-pointer" />

      <FaInstagramSquare className="text-3xl text-[#E4405F] hover:scale-110 transition-transform cursor-pointer" />

      <AiFillTikTok className="text-3xl text-black dark:text-white hover:scale-110 transition-transform cursor-pointer" />

      <FaYoutube className="text-3xl text-[#FF0000] hover:scale-110 transition-transform cursor-pointer" />

      <FaXTwitter className="text-3xl text-black dark:text-white hover:scale-110 transition-transform cursor-pointer" />
    </div>
  );
};

export default SocialIcon;
