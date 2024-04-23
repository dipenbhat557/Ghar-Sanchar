import { news } from "../constants";
import { styles } from "../styles";

interface News {
  title: string;
  content: string;
  author: string;
  date: string;
  stat: string;
  category: string;
  img: string;
}

const BreakingNews = () => {
  const breakingNews: News[] = news?.filter((n, i) => n?.stat === "breaking");
  return (
    <div className={`${styles.paddingX} my-2  h-[70px]`}>
      <div className="bg-[#1E1E1E] flex items-center justify-around w-full h-full">
        <button className="text-[10px] h-[60%] w-[15%] bg-white font-light">
          Breaking News
        </button>
        <p className="text-white w-[80%] text-center">
          {breakingNews?.[0]?.title}
        </p>
      </div>
    </div>
  );
};
export default BreakingNews;
