import { rtop } from "../assets";
import { news } from "../constants";
import { styles } from "../styles";
import { FaArrowRightLong } from "react-icons/fa6";

const Politics = () => {
  const politicsNews = news?.filter(
    (n) => n?.category === "politics" && n?.stat != "latest"
  );
  return (
    <div className={`w-full ${styles.padding} h-auto flex justify-between`}>
      <div className="flex flex-col gap-3">
        <div
          className={`flex font-serif ${styles?.sectionHeadText} items-center gap-3`}
        >
          <p>Politics</p>
          <FaArrowRightLong className="bg-[#04594D] p-1 text-white rounded-full text-3xl" />
        </div>
        <div
          className={`flex w-full h-[300px] items-center justify-between ${styles.paddingY}`}
        >
          <div className="w-[53%] h-full relative">
            <img
              src={politicsNews?.[0]?.img}
              className="w-full h-full object-cover"
              alt="img"
            />
          </div>
          <div className="w-[43%] h-full flex flex-col gap-3">
            <p>{politicsNews?.[0]?.title}</p>
            <p>{politicsNews?.[0]?.content}</p>
            <div className="flex gap-3">
              <p>By {politicsNews?.[0]?.author}</p>
              <p>{politicsNews?.[0]?.date}</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-[25%] border border-black p-2 h-auto flex flex-col gap-3">
        <div className="w-full h-[70px] flex gap-2">
          <img
            src={rtop}
            alt="recent top"
            className="w-[10%] h-[50%] object-contain"
          />
          <div className="text-white font-serif flex items-center justify-center text-[22px] h-[50%] w-[80%] rounded-lg bg-[#04594D]">
            Recent Updates
          </div>
        </div>
      </div>
    </div>
  );
};
export default Politics;
