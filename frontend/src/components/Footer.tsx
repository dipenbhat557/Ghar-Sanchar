import { github, logo, something, twitter, youtube } from "../assets";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#8E4042D4] to-[#04594DD4] h-[240px] flex flex-col justify-between">
      <div className="w-full h-[80%] flex justify-between items-center">
        <div className="flex w-[25%] h-full justify-around flex-col items-center">
          <div className="w-[60%] h-[20%]">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-between w-[80%] h-[20%]">
            <div className="w-[20%] h-[90%]">
              <img
                src={twitter}
                alt="twitter"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[20%] h-[90%]">
              <img
                src={github}
                alt="github"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[20%] h-[90%]">
              <img
                src={something}
                alt="something"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[20%] h-[90%]">
              <img
                src={youtube}
                alt="youtube"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] h-[10%] flex justify-around">
          <p className="font-semibold text-white">Politics</p>
          <p className="font-semibold text-white">Travel</p>
          <p className="font-semibold text-white">Business</p>
          <p className="font-semibold text-white">Economy</p>
          <p className="font-semibold text-white">Life Style</p>
        </div>
      </div>
      <div className="mx-auto w-[40%] py-2 text-slate-300 border-t border-slate-300 flex items-center justify-center">
        Copyright @2024 SajiloDev
      </div>
    </div>
  );
};
export default Footer;
