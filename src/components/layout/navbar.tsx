import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="shadow-sm shadow-black/20">
      <div className="container mx-auto flex h-fit w-full items-center justify-between gap-8 py-1">
        <Link href={"/"} className="rounded">
          <Image
            src={"/logo.svg"}
            alt={""}
            width={0}
            height={0}
            className="h-20 w-20"
          />
        </Link>
        <div className="flex w-full flex-row items-center gap-2">
          {/* <button className=" group rounded px-2 py-1"> */}
          {/* </button> */}
          <div className="flex w-full flex-row items-center gap-4 border-x border-x-black-600/30">
            <div className="group flex w-full flex-row items-center gap-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black-600/75 group-hover:scale-110"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>

              <input
                placeholder="Search..."
                className="w-full border-none p-2 text-black-600/75 outline-none placeholder:text-black-300/75"
                value={search}
                onChange={(e) => {
                  setSearch(e.currentTarget.value);
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSearch("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-black-600/75  ${
                    search.length > 0 ? "visible" : "hidden"
                  }`}
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <button className="group rounded px-2 py-1">
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
