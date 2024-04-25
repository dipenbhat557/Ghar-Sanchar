import { useNavigate } from "react-router-dom";
import { github, logo1, something, twitter, youtube } from "../assets";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#161618] h-[240px] flex flex-col justify-between">
      <div className="w-full h-[80%] flex justify-between items-center">
        <div className="flex w-[40%] sm:w-[25%] h-full justify-around flex-col items-center">
          <div className="w-[60%] h-[20%]">
            <img
              src={logo1}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between w-[80%] h-[20%]">
            <div className="w-[20%] cursor-pointer  h-[90%]">
              <img
                src={twitter}
                alt="twitter"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[20%] cursor-pointer  h-[90%]">
              <img
                src={github}
                alt="github"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[20%] cursor-pointer  h-[90%]">
              <img
                src={something}
                alt="something"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[20%] cursor-pointer  h-[90%]">
              <img
                src={youtube}
                alt="youtube"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-[30%] sm:w-[40%] h-[80%] sm:h-[10%] flex flex-col sm:flex-row justify-around">
          <p
            onClick={() => navigate("/politics")}
            className="cursor-pointer font-semibold text-white"
          >
            Politics
          </p>
          <p
            onClick={() => navigate("/travel")}
            className="font-semibold cursor-pointer  text-white"
          >
            Travel
          </p>
          <p
            onClick={() => navigate("/business")}
            className="font-semibold text-white cursor-pointer "
          >
            Business
          </p>
          <p
            onClick={() => navigate("/economy")}
            className="font-semibold text-white cursor-pointer "
          >
            Economy
          </p>
          <p
            onClick={() => navigate("/lifestyle")}
            className="font-semibold text-white cursor-pointer "
          >
            Life Style
          </p>
        </div>
      </div>
      <div className="mx-auto w-[80%] sm:w-[40%] py-2 text-slate-300 border-t border-slate-300 flex items-center justify-center">
        Copyright @2024 SajiloDev
      </div>
    </div>
  );
};
export default Footer;
