const SideHero = ({ category }: { category: string }) => {
  return (
    <div className="w-full h-[300px] sm:h-[450px] flex items-center justify-center bg-[#161618]">
      <p className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#EC008C] to-[#9733EE] font-medium text-3xl sm:text-[40px]">
        {category}
      </p>
    </div>
  );
};
export default SideHero;
