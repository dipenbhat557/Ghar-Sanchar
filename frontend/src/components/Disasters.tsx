import { news } from "../constants";
import { styles } from "../styles";
import { FaArrowRightLong } from "react-icons/fa6";

const Disasters = () => {
  const disastersNews = news?.filter((n) => n?.category === "Disasters");

  return (
    <div className={` flex flex-col h-[400px] w-full justify-between`}>
      <div
        className={`flex font-serif ${styles?.sectionHeadText} ${styles?.paddingX} items-center gap-3`}
      >
        <p>Disasters</p>
        <FaArrowRightLong className="bg-[#04594D] p-1 text-white rounded-full text-3xl" />
      </div>
      <div className="w-full h-[80%] flex justify-around items-center">
        {disastersNews?.map((l, i) => {
          return (
            <div key={i} className="h-full w-[23%] relative">
              <div className="w-full h-full bg-slate-900 opacity-10 absolute" />
              <img
                src={l?.img}
                alt="disaster img"
                className="w-full h-full object-cover"
              />
              <div className="text-white right-0 top-0 rounded-bl-xl absolute px-2 py-1 bg-[#04594D]">
                #{l?.category}
              </div>
              <p className="text-white font-serif text-[18px] absolute left-4 bottom-10">
                {l?.title}
              </p>
              <div className="text-[#FDFDFD] text-[10px] gap-3 flex absolute left-4 bottom-4">
                <p> By {l?.author}</p>
                <p>{l?.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Disasters;
