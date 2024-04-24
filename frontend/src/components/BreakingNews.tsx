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

const BreakingNews = ({ bgColor }: { bgColor: string }) => {
  const breakingNews: News[] = news?.filter((n) => n?.stat === "breaking");
  return (
    <div className={`${styles.padding} my-2  h-[120px]`}>
      <div
        className={`bg-[${bgColor}] flex items-center justify-around w-full h-full`}
      >
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
