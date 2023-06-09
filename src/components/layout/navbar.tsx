import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="shadow-sm shadow-black/20">
      <div className="container mx-auto flex h-fit w-full items-center justify-between gap-8 py-2">
        <Image
          src={"/logo.svg"}
          alt={""}
          width={0}
          height={0}
          className="h-14 w-14"
        />
        <div className="flex flex-row items-center justify-end gap-4">
          <button className="bg-red-500/ group rounded px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-125 group-hover:text-black-600"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>{" "}
          </button>
          <button className="bg-red-500/ group rounded px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-125 group-hover:text-black-600"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <div className="flex h-full w-full flex-row">
//   <input
//     className="flex w-full rounded px-2  outline outline-1 outline-black/50"
//     placeholder="search"
//   />
// </div>
