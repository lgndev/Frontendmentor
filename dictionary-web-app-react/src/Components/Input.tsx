import icon_search from "../assets/images/icon-search.svg";

const Input = () => {
  return (
    <div className="relative w-full mb-[43px]">
      <input
        type="text"
        placeholder="Search for any word..."
        className="focus-visible:outline-0 w-full h-[64px] rounded-[16px] bg-[#F4F4F4] border-[1px] border-solid border-[#F4F4F4] flex justify-start items-center pl-[24px] pr-[24px]"
      />
      <div className="absolute h-full top-[0] right-[0] flex justify-end items-center pr-[24px]">
        <img src={icon_search} alt="search image" className="" />
      </div>
    </div>
  );
};

export default Input;
