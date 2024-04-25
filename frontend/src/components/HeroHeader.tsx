import { useNavigate } from "react-router-dom";
import { logo2 } from "../assets";
import { styles } from "../styles";

const HeroHeader = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.padding} flex justify-between items-center w-full h-[100px]`}
    >
      <div className="w-[15%] h-[80%] ">
        <img
          src={logo2}
          onClick={() => navigate("/")}
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[50%] h-[70%] flex items-center">
        <input
          type="text"
          placeholder="Search for headlines"
          className="bg-[#04594D] text-white pl-4 w-[80%] h-full placeholder:text-slate-400 placeholder:text-[14px] "
        />
        <button className=" text-white h-full w-[15%] text-[18px] bg-[#8E4042]">
          SEARCH
        </button>
      </div>
    </div>
  );
};
export default HeroHeader;
