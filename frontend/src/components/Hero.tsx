import { news } from "../constants";

const Hero = () => {
  let heroNews = [];

  heroNews = news?.filter((n) => n?.stat === "latest");

  return (
    <div className="w-full h-[550px] mb-5 flex items-center justify-between">
      <div className="w-[48%] h-[70%] relative">
        <div className="w-full h-full bg-slate-900 opacity-20 absolute" />
        <img
          src={heroNews?.[0]?.img}
          alt="hero img 1"
          className="w-full h-full object-cover"
        />
        <p className="text-[20px] w-[80%] font-serif  bottom-10 left-5 text-white font-semibold absolute">
          {heroNews?.[0]?.title}
        </p>
        <div className="flex w-full h-[20] bottom-2 left-5 absolute gap-3">
          <p className="text-[12px] text-[#FDFDFD]">
            By {heroNews?.[0]?.author}
          </p>
          <p className="text-[12px] text-[#FDFDFD]">{heroNews?.[0]?.date}</p>
        </div>
      </div>
      <div className="w-[48%]  h-full flex flex-col justify-between">
        <div className="w-full bg-[#1A1A1A] h-[50%] flex justify-around items-center">
          <div className="w-[30%] h-full flex flex-col gap-2">
            <p className="w-full p-3 h-[80%] line-clamp-6 text-white  leading-relaxed">
              {heroNews?.[1]?.content}
            </p>
            <div className="flex w-full h-[10%] justify-center gap-2">
              <p className="text-[#FDFDFD] text-[12px]">
                By {heroNews?.[1]?.author}
              </p>
              <p className="text-[#FDFDFD] text-[12px]">
                {heroNews?.[1]?.date}
              </p>
            </div>
          </div>

          <div className="w-[60%] h-full relative">
            <div className="w-full h-full bg-slate-900 opacity-20 absolute" />
            <img
              src={heroNews?.[1]?.img}
              alt="hero img 2"
              className="w-full h-full object-cover"
            />
            <p className="text-[20px] w-[80%] font-serif  bottom-10 left-5 text-white font-semibold absolute">
              {heroNews?.[1]?.title}
            </p>
          </div>
        </div>
        <div className="w-full h-[40%] flex justify-between">
          <div className="w-[38%] h-full relative">
            <div className="w-full h-full bg-slate-900 opacity-20 absolute" />
            <img
              src={heroNews?.[2]?.img}
              alt="hero img 3"
              className="w-full h-full object-cover"
            />
            <p className="text-[20px] w-[80%] font-serif  bottom-10 left-5 text-white font-semibold absolute">
              {heroNews?.[2]?.title}
            </p>
          </div>
          <div className="w-[58%] h-full flex flex-col justify-around ">
            <p className="text-[20px] font-semibold font-serif">
              {heroNews?.[2]?.title}
            </p>
            <div className="flex gap-3">
              <p className="text-slate-400 text-[12px]">
                By {heroNews?.[2]?.author}
              </p>
              <p className="text-slate-400 text-[12px]">
                {heroNews?.[2]?.date}
              </p>
            </div>
            <p className="text-[#04594D] font-serif line-clamp-3">
              {heroNews?.[2]?.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
