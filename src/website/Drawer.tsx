"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import { Dayjs } from "dayjs";

//assets
import plus from "../../public/dashboard/plus.png";
import close from "../../public/dashboard/close.png";
import fullscreen from "../../public/dashboard/fullscreen.png";
import share from "../../public/dashboard/share.png";
import fav from "../../public/dashboard/fav.png";
import status from "../../public/dashboard/status.png";
import priority from "../../public/dashboard/priority.png";
import deadline from "../../public/dashboard/deadline.png";
import pencil from "../../public/dashboard/pencil.png";
import BasicDatePicker from "./DatePickerComponent";

type Anchor = "top" | "left" | "bottom" | "right";

export default function DrawerFromRight() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  type formDataProps = {
    title: string;
    status: string;
    priority: string;
    deadline: string;
    description: string;
  };

  const [formData, setFormData] = React.useState<formDataProps>({
    title: "",
    status: "",
    priority: "",
    deadline: "",
    description: "",
  });

  console.log(formData);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format("YYYY-MM-DD");
      setFormData({ ...formData, deadline: formattedDate });
    } else {
      setFormData({ ...formData, deadline: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const form = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 670 }}
      role="presentation"
      className=" pt-4 flex flex-col px-6 gap-[27px] "
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-start py-2 pr-2 gap-4 ">
          <Image
            src={close.src}
            height={close.height}
            width={close.width}
            alt="/close"
            className="cursor-pointer"
            onClick={toggleDrawer(anchor, false)}
          />
          <Image
            src={fullscreen.src}
            height={fullscreen.height}
            width={fullscreen.width}
            alt="/fullscreen"
            className="cursor-pointer"
          />
        </div>

        <div className="flex items-center gap-4  ">
          <h2 className="rounded-[4px] p-2 flex items-center gap-2  bg-[#F4F4F4] font-inter font-normal text-[16px] leading-[19.36px] text-[#797979] ">
            {" "}
            Share{" "}
            <Image
              src={share.src}
              height={share.height}
              width={share.width}
              alt="/share"
              className="cursor-pointer"
            />{" "}
          </h2>
          <h2 className="rounded-[4px] p-2 flex items-center gap-2  bg-[#F4F4F4] font-inter font-normal text-[16px] leading-[19.36px] text-[#797979] ">
            {" "}
            Favorite
            <Image
              src={fav.src}
              height={fav.height}
              width={fav.width}
              alt="/fav"
              className="cursor-pointer"
            />
          </h2>
        </div>
      </div>

      <form className=" flex flex-col gap-8 " onSubmit={handleSubmit}>
        <input
          className=" w-full border-none outline-none font-barlow font-semibold text-[48px] leading-[57.6px] text-[#CCCCCC] "
          id="taskName"
          name="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <div className=" flex flex-col items-start gap-8 ">
          <div className=" flex items-start gap-[60px] ">
            <Li icon={status.src} text="Status" />
            <select
              className="font-inter font-normal text-[16px] leading-[24px]  px-4 py-2 rounded-[3px] outline-none border border-gray-400 w-[259px] "
              onChange={handleInputChange}
              name="status"
              value={formData.status}
            >
              <option>Not selected</option>
              <option value="todo">Todo</option>
              <option value="in progress">In Progress</option>
              <option value="under review">Under review</option>
              <option value="finished">Finished</option>
            </select>
          </div>

          <div className=" flex items-start gap-[60px] ">
            <Li icon={priority.src} text="Priority" />
            <select
              className="font-inter font-normal text-[16px] leading-[24px]  px-4 py-2 rounded-[3px] outline-none border border-gray-400 w-[259px]"
              onChange={handleInputChange}
              name="priority"
              value={formData.priority}
            >
              <option>Not selected</option>

              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          <div className=" flex items-start gap-[60px] ">
            <Li icon={pencil.src} text="Description" />
            <textarea
              placeholder="Enter Description here"
              className=" font-inter font-normal text-[16px] leading-[24px]  resize-y border border-gray-300 p-2 rounded-md outline-none w-[259px] "
              onChange={handleInputChange}
              name="description"
              value={formData.description}
            ></textarea>
          </div>

          <div className="w-full flex items-start gap-[60px] ">
            <Li icon={deadline.src} text="Deadline" />
            <BasicDatePicker
              value={formData.deadline}
              onChange={(date) => setFormData({ ...formData, deadline: date })}
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <button
            className="w-[73%] rounded-lg border p-2 font-inter font-medium text-[20px] leading-[24.2px] text-[#FFFFFF] py-[14px] flex items-center justify-center gap-2  "
            style={{
              background: "linear-gradient(180deg, #4C38C2 0%, #2F2188 100%)",
              boxShadow: "0px 1px 8px 0px #00000040",
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            className=" rounded-lg border p-2 font-inter font-medium text-[20px] leading-[24.2px] text-[#FFFFFF] py-[14px] flex items-center justify-center gap-2  "
            style={{
              background: "linear-gradient(180deg, #4C38C2 0%, #2F2188 100%)",
              boxShadow: "0px 1px 8px 0px #00000040",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            Create new task
            <Image
              src={plus.src}
              height={plus.height}
              width={plus.width}
              alt="/plus"
            />
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {form(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

interface LiProps {
  icon: string;
  text: string;
}

const Li = ({ icon, text }: LiProps) => (
  <div className="w-[135px] flex items-center gap-6 ">
    <Image src={icon} alt={text} height={24} width={24} />

    <h2 className=" font-inter font-normal text-[16px] leading-[19.36px] text-[#666666]  ">
      {" "}
      {text}{" "}
    </h2>
  </div>
);
