import { useState } from "react";
import "./App.css";
import Businessman from "../src/assets/businessman.png";
import { RiSettings4Fill } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Reject from "../src/assets/reject.png";
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="h-full flex items-center">
        <div className="mx-auto xl:w-[1128px] lg:w-[959px]">
          <div className="flex justify-between">
            <div className="rounded-md bg-slate-400 w-[225px] max-h-[385px] px-4">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center h-32">
                  <div className="w-24 h-24">
                    <img src={Businessman}></img>
                  </div>
                </div>
                <div className="w-full pb-4 border-b-[1px]">
                  <p className="text-center text-slate-700 font-sans font-semibold">
                    Jose Saribong
                  </p>
                </div>
                <div className="w-full py-6">
                  <ul>
                    <li className="pl-4 pb-6 flex space-x-2">
                      <FaBookmark className="h-6 w-6 opacity-65" />
                      <p className="text-slate-700 font-sans font-medium">
                        My Jobs
                      </p>
                    </li>
                    <li className="pl-4 pb-6 flex space-x-2">
                      <RiSettings4Fill className="h-6 w-6 opacity-65" />
                      <p className="text-slate-700 font-sans font-medium">
                        Preferences
                      </p>
                    </li>
                    <li className="pl-4 pb-6 flex space-x-2">
                      <AiFillSafetyCertificate className="h-6 w-6 opacity-65" />
                      <p className="text-slate-700 font-sans font-medium">
                        Add skills
                      </p>
                    </li>
                    <li className="pl-4 flex space-x-2">
                      <MdPostAdd className="h-6 w-6 opacity-65" />
                      <p className="text-slate-700 font-sans font-medium">
                        Resume Builder
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="xl:w-[555px] lg:w-[387px] flex flex-col space-y-6">
              <div className="rounded-md bg-slate-400 h-[110px] py-6 px-4 flex flex-col justify-between">
                <div className="flex justify-between">
                  <p className="text-slate-700 font-sans font-medium">
                    Suggested Searches
                  </p>
                  <img src={Reject} className="h-[24px] opacity-65" />
                </div>
                <div className="flex space-x-4">
                  <div className="flex space-x-2 px-4 py-1 rounded-full border-slate-700 border-[1.5px]">
                    <FaSearch className="h-[24px] opacity-65" />
                    <p className="text-slate-700 font-sans font-normal">
                      Self-Employed
                    </p>
                  </div>
                  <div className="flex space-x-2 px-4 py-1 rounded-full border-slate-700 border-[1.5px]">
                    <FaSearch className="h-[24px] opacity-65" />
                    <p className="text-slate-700 font-sans font-normal">
                      Marketing
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-md bg-slate-400 py-6 px-4">
                <div className="">
                  <p className="text-slate-700 font-sans font-medium">
                    All Jobs
                  </p>
                  <p className="text-slate-700 font-sans font-normal text-md">
                    Based on your profile and search history
                  </p>
                </div>
                <div className="py-4 border-b-[1.5px] border-slate-500">
                  <div className="flex justify-between">
                    <div className="flex space-x-4">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-white"></div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-slate-700 font-sans font-medium">
                          Junior Web Developer
                        </p>
                        <p className="text-white font-sans font-normal text-sm">
                          ABC Company
                        </p>
                        <p className="text-slate-600 font-sans font-normal text-sm">
                          Philippines (On-Site)
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <img src={Reject} className="h-[24px] opacity-65" />
                    </div>
                  </div>
                </div>
                <div className="py-4 border-b-[1.5px] border-slate-500">
                  <div className="flex justify-between">
                    <div className="flex space-x-4">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-white"></div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-slate-700 font-sans font-medium">
                          Junior Web Developer
                        </p>
                        <p className="text-white font-sans font-normal text-sm">
                          ABC Company
                        </p>
                        <p className="text-slate-600 font-sans font-normal text-sm">
                          Philippines (On-Site)
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <img src={Reject} className="h-[24px] opacity-65" />
                    </div>
                  </div>
                </div>
                <div className="py-4 border-b-[1.5px] border-slate-500">
                  <div className="flex justify-between">
                    <div className="flex space-x-4">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-white"></div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-slate-700 font-sans font-medium">
                          Junior Web Developer
                        </p>
                        <p className="text-white font-sans font-normal text-sm">
                          ABC Company
                        </p>
                        <p className="text-slate-600 font-sans font-normal text-sm">
                          Philippines (On-Site)
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <img src={Reject} className="h-[24px] opacity-65" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-slate-400 w-[300px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
