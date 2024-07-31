import React from "react";
import Image from "next/image";

//assets
import download from "../../public/dashboard/download.svg";
import user from "../../public/dashboard/user.png";
import notification from "../../public/dashboard/notification.png";
import theme from "../../public/dashboard/theme.png";
import arrow from "../../public/dashboard/arrow.png";
import plus from "../../public/dashboard/plus.png";
import home from "../../public/dashboard/home.png";
import boards from "../../public/dashboard/boards.png";
import setting from "../../public/dashboard/setting.png";
import team from "../../public/dashboard/team.png";
import analytics from "../../public/dashboard/analytics.png";

function Sidebar() {
  return (
    <main className=" h-screen w-[285px]  border-r border-solid border-[#DEDEDE] pt-6 px-4 pb-8 flex flex-col justify-between ">
      <section className="w-full flex flex-col  gap-4 ">
        <div className="w-full flex flex-col gap-2 ">
          {/* user profile  */}
          <div className="w-full flex  gap-2 items-center ">
            <Image
              src={user.src}
              height={user.height}
              width={user.width}
              alt="/profile"
            />
            <h2 className="font-inter font-medium text-[20px] leading-[24.2px] text-[#080808] ">
              Joe Gardner
            </h2>
          </div>
          {/* notify */}
          <div className=" w-full flex  items-center justify-between ">
            <div className="flex py-2 gap-5 ">
              <Image
                src={notification.src}
                height={notification.height}
                width={notification.width}
                alt="/notification"
              />

              <Image
                src={theme.src}
                height={theme.height}
                width={theme.width}
                alt="/theme"
              />

              <Image
                src={arrow.src}
                height={arrow.height}
                width={arrow.width}
                alt="/arrow"
              />
            </div>

            <h3 className=" rounded-[4px] p-2 bg-[#F4F4F4] animate-dissolve  ">
              Logout
            </h3>
          </div>
        </div>

        <div className=" flex flex-col gap-4 ">
          {/* side icons */}
          <div className="flex flex-col items-start gap-2 ">
            <Li icon={home.src} text="Home" />
            <Li icon={boards.src} text="Boards" />
            <Li icon={setting.src} text="Settings" />
            <Li icon={team.src} text="Teams" />
            <Li icon={analytics.src} text="Analytics" />
          </div>
          {/* new task button  */}
          <button
            className=" rounded-lg border p-2 font-inter font-medium text-[20px] leading-[24.2px] text-[#FFFFFF] py-[14px] flex items-center justify-center gap-2  "
            style={{
              background: "linear-gradient(180deg, #4C38C2 0%, #2F2188 100%)",
              boxShadow: "0px 1px 8px 0px #00000040",
            }}
          >
            Create new task
            <Image
              src={plus.src}
              height={plus.height}
              width={plus.width}
              alt="/plus"
            />
          </button>
        </div>
      </section>

      <section className="  flex items-start gap-2 p-2 rounded-lg bg-[#F3F3F3] ">
        <Image
          src={download.src}
          height={download.height}
          width={download.width}
          alt="/download"
        />

        <div className="flex flex-col gap-1 text-[#666666] font-inter ">
          <h2 className=" font-medium text-[20px] leading-[24.2px] ">
            Download the app
          </h2>
          <p className=" font-normal text-[14px] leading-[16.94px] ">
            Get the full experience{" "}
          </p>
        </div>
      </section>
    </main>
  );
}

interface LiProps {
  icon: string;
  text: string;
}

const Li = ({ icon, text }: LiProps) => (
  <div className="flex items-start gap-[14px] py-2 pl-2 ">
    <Image src={icon} alt="/icon" height={24} width={24} />
    <h2 className=" font-inter font-normal text-[20px] leading-[24.2px] text-[#797979] ">
      {" "}
      {text}{" "}
    </h2>
  </div>
);

export default Sidebar;
