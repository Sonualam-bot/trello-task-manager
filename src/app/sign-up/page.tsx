"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

function SignOut() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  type loginProps = {
    fullname: string;
    email: string;
    password: string;
  };

  const [formData, setFormData] = useState<loginProps>({
    fullname: "",
    email: "",
    password: "",
  });

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main
      className=" w-full h-screen pt-[50px] px-[396px]  "
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #AFA3FF 100%)",
      }}
    >
      <form
        onSubmit={handleFormSubmit}
        className=" w-[648px] flex  flex-col gap-8 p-[60px] rounded-2xl border border-solid border-[#CECECE] "
        style={{
          background: "linear-gradient(180deg, #F7F7F7 0%, #F0F0F0 100%)",
        }}
      >
        <h1 className=" font-barlow font-semibold text-5xl leading-[57.6px] text-center  ">
          Welcome to <span className=" text-[#4534AC] ">Workflo</span>!
        </h1>

        <div className="flex flex-col gap-[22px] ">
          <div className="flex flex-col gap-6 relative ">
            <input
              type="text"
              placeholder="Full name"
              className=" w-full rounded-lg py-4 px-3 bg-[#EBEBEB] animate-dissolve border-none outline-none caret-[#999999]  "
              name="fullname"
              value={formData.fullname}
              onChange={(e) => handleUserInput(e)}
            />
            <input
              type="text"
              placeholder="Your email"
              className=" w-full rounded-lg py-4 px-3 bg-[#EBEBEB] animate-dissolve border-none outline-none caret-[#999999]  "
              name="email"
              value={formData.email}
              onChange={(e) => handleUserInput(e)}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className=" w-full rounded-lg py-4 px-3 bg-[#EBEBEB] animate-dissolve border-none outline-none caret-[#999999] "
              name="password"
              value={formData.password}
              onChange={(e) => handleUserInput(e)}
            />

            <div
              className="absolute right-4 bottom-5 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VscEyeClosed /> : <VscEye />}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`w-full rounded-lg border border-solid p-2 text-white ${
                formData?.email !== "" && formData?.password !== ""
                  ? "opacity-100"
                  : "opacity-50"
              } `}
              style={{
                background:
                  "linear-gradient(180deg, #4C38C2 0%, #2F2188 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))",

                boxShadow: "0px 12px 16px 0px #BABABA33 inset",
              }}
            >
              Sign up
            </button>
          </div>
        </div>

        <p className="text-center">
          Already have an account? Create{" "}
          <span className=" font-inter text-[#0054A1] font-normal text-[20px] leading-[24.2px] text-center animate-dissolve ">
            Log in.
          </span>
        </p>
      </form>
    </main>
  );
}

export default SignOut;
