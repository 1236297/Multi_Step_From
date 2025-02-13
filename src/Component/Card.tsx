import React from "react";

const Header = () => {
  return (
    <body className="bg-[#bfe2fd] flex justify-center items-center">
  <main className="bg-white h-[600px] w-[900px] rounded-xl shadow-xl  flex flex  items-center">
    <div className="  z-0 ml-3 flex  justify-center item-center  bg-[url(./src/assets/images/bg-sidebar-desktop.svg)] h-[568px] w-[274px]">
      <div className=" flex flex-col mt-10">
        <div className=" flex ">
          <button className=" mt-3 mr-5  text-white text-xl outline outline-offset-0 outline-white rounded-full  w-[35px] h-[35px]">
            1
          </button>
          <div className=" z-10">
            <label className=" text-gray-300 font-ligth">Step 1</label>{" "}
            <h4 className=" text-white text-xl font-bold">Your info</h4>
          </div>{" "}
        </div>
        <div className=" flex mt-5">
          <button className=" mt-3 mr-5  text-white text-xl outline outline-offset-0 outline-white rounded-full  w-[35px] h-[35px]">
            2
          </button>
          <div className=" z-10 ">
            <label className=" text-gray-300 font-ligth">Step 2</label>{" "}
            <h4 className=" text-white text-xl font-bold">Select plan</h4>
          </div>{" "}
        </div>
        <div className=" flex mt-5">
          <button className=" mt-3 mr-5  text-white text-xl outline outline-offset-0 outline-white rounded-full  w-[35px] h-[35px]">
            3
          </button>
          <div className=" z-10 ">
            <label className=" text-gray-300 font-ligth">Step 3</label>{" "}
            <h4 className=" text-white text-xl font-bold">Add-ons</h4>
          </div>{" "}
        </div>
        <div className=" flex mt-5">
          <button className=" mt-3 mr-5  text-white text-xl outline outline-offset-0 outline-white rounded-full  w-[35px] h-[35px]">
            4
          </button>
          <div className=" z-10">
            <label className=" text-gray-300 font-ligth">Step 4</label>{" "}
            <h4 className=" text-white text-xl font-bold"> Summary </h4>
          </div>{" "}
        </div>
      </div>

      {/* Step 2 Select plan Step 3 Add-ons Step 4 Summary */}
    </div>
  </main>
</body>;
    
  );
};

export default Header;