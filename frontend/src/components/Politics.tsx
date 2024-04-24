import { rtop } from "../assets";
import { styles } from "../styles";

const Politics = () => {
  return (
    <div className={`w-full ${styles.padding} h-auto flex justify-between`}>
      <div className="flex flex-col gap-3">
        <div className={`flex font-serif ${styles?.sectionHeadText}`}>
          <p>Politics</p>
        </div>
        <div></div>
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
