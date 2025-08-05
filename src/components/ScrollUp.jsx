import { BiChevronsUp } from "react-icons/bi";

const ScrollUp = ({ showButton, scrollToTop }) => {
  return (
    <>
      {showButton && (
        <div
          onClick={scrollToTop}
          className={` justify-center items-center fixed right-8 z-[10000] top-[90%]  cursor-pointer rounded-full  animate-bounce ${
            showButton ? "flex" : "hidden"
          }`}
        >
          <BiChevronsUp className="text-white" size={50} />
        </div>
      )}
    </>
  );
};

export default ScrollUp;
