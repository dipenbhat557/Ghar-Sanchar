const Subscription = () => {
  const handleSubscribe = () => {};
  return (
    <div className="flex flex-col w-[100%] h-[330px] sm:h-[300px] justify-center gap-4 items-center text-white mt-6 bg-[#161618] pt-4">
      <p className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#EC008C] to-[#9733EE] font-medium text-3xl sm:text-[40px]">
        Subscribe
      </p>
      <p className="w-[40%] sm:w-[25%] text-center font-semibold text-[12px] md:text-[16px] md:leading-loose m-2">
        Subscribe to stay tuned for new information related to our company and
        latest updates. Let's do it!
      </p>
      <div className="my-2 mb-6 flex-wrap justify-center items-center flex flex-row">
        <input
          type="text"
          placeholder="Enter your mail address"
          className="p-2 px-4 sm:px-10 rounded-xl text-black"
        />
        <button
          onClick={handleSubscribe}
          className=" hover:shadow-md hover:shadow-slate-500 bg-gradient-to-r from-[#DA22FF] to-[#9733EE] font-bold text-white  mt-2  ml-3 p-2 px-4 shadow-lg shadow-black  rounded-xl"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Subscription;
