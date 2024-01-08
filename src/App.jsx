import { useState } from "react";
import "./App.css";
import Businessman from "../src/assets/businessman.png";
import { RiSettings4Fill } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Reject from "../src/assets/reject.png";
import { FaSearch } from "react-icons/fa";

import JobThumbnail from "./components/JobThumbnail";
import JobPage from "./components/JobPage";
import ConnectThumbnail from "./components/ConnectThumbnail";

function App() {
  const [jobClicked, setJobClicked] = useState();
  return (
    <>
      <div className="h-full pt-20 flex justify-center">
        <div className="xl:w-[1128px] lg:w-[959px] md:w-[859px]">
          <div className="flex justify-between space-x-6">
            <div className="w-[225px] max-h-[385px] px-4 rounded-md bg-slate-400">
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
                    <li className="cursor-pointer pl-4 pb-6 flex space-x-2">
                      <FaBookmark className="h-6 w-6 opacity-65" />
                      <p className="text-slate-700 font-sans font-medium">
                        My Jobs
                      </p>
                    </li>
                    <li className="cursor-pointer pl-4 pb-6 flex space-x-2">
                      <RiSettings4Fill className="h-6 w-6 opacity-65" />
                      <p className="text-slate-700 font-sans font-medium">
                        Preferences
                      </p>
                    </li>
                    <li className="cursor-pointer pl-4 pb-6 flex space-x-2">
                      <AiFillSafetyCertificate className="h-6 w-6 opacity-65" />
                      <p className="text-slate-700 font-sans font-medium">
                        Add skills
                      </p>
                    </li>
                    <li className="cursor-pointer pl-4 flex space-x-2">
                      <MdPostAdd className="h-6 w-6 opacity-65" />
                      <p className="text-slate-700 font-sans font-medium">
                        Resume Builder
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`${
                jobClicked
                  ? "flex-grow"
                  : "xl:w-[555px] lg:w-[387px] md:w-[610px]"
              } flex flex-col space-y-6 mb-6`}
            >
              {!jobClicked && (
                <>
                  <div className="flex flex-col justify-between rounded-md bg-slate-400 h-[110px] py-6 px-4">
                    <div className="flex justify-between">
                      <p className="text-slate-700 font-sans font-medium">
                        Suggested Searches
                      </p>
                      <img
                        src={Reject}
                        className="h-[24px] opacity-65 cursor-pointer"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex space-x-2 px-4 py-1 rounded-full border-slate-700 border-[1.5px] hover:border-slate-100 hover:text-slate-100 text-slate-700 cursor-pointer">
                        <FaSearch className="h-[24px] opacity-65" />
                        <p className="font-sans font-normal">Self-Employed</p>
                      </div>
                      <div className="flex space-x-2 px-4 py-1 rounded-full border-slate-700 border-[1.5px] hover:border-slate-100 hover:text-slate-100 text-slate-700 cursor-pointer">
                        <FaSearch className="h-[24px] opacity-65" />
                        <p className="font-sans font-normal">Marketing</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="py-6 px-4 max-w-[880px] rounded-md bg-slate-400">
                {jobClicked ? (
                  <>
                    <JobPage
                      jobClicked={jobClicked}
                      setJobClicked={setJobClicked}
                    />
                  </>
                ) : (
                  <>
                    <div className="">
                      <p className="text-slate-700 font-sans font-medium">
                        All Jobs
                      </p>
                      <p className="text-slate-700 font-sans font-normal text-md">
                        Based on your profile and search history
                      </p>
                    </div>
                    <JobThumbnail
                      job="Junior Web Developer"
                      company="ABC Company"
                      location="Philippines"
                      setup="On-Site"
                      setJobClicked={setJobClicked}
                    />
                    <JobThumbnail
                      job="Marketing Associate"
                      company="DEF Company"
                      location="Australia"
                      setup="Remote"
                      setJobClicked={setJobClicked}
                    />
                    <JobThumbnail
                      job="Javascript Developer"
                      company="XYZ Company"
                      location="Philippines"
                      setup="Remote"
                      setJobClicked={setJobClicked}
                    />
                    <JobThumbnail
                      job="Web Developer"
                      company="123 Company"
                      location="Philippines"
                      setup="Remote"
                      setJobClicked={setJobClicked}
                    />
                    <JobThumbnail
                      job="Software Engineer"
                      company="456 Company"
                      location="Philippines"
                      setup="Remote"
                      setJobClicked={setJobClicked}
                    />
                    <JobThumbnail
                      job="Software Engineer"
                      company="789 Company"
                      location="Philippines"
                      setup="Remote"
                      setJobClicked={setJobClicked}
                    />
                    <JobThumbnail
                      job="Software Engineer"
                      company="987 Company"
                      location="Philippines"
                      setup="Remote"
                      setJobClicked={setJobClicked}
                    />
                    <JobThumbnail
                      job="Software Engineer"
                      company="654 Company"
                      location="Philippines"
                      setup="Remote"
                      setJobClicked={setJobClicked}
                    />
                    <JobThumbnail
                      job="Software Engineer"
                      company="321 Company"
                      location="Philippines"
                      setup="Remote"
                      setJobClicked={setJobClicked}
                    />
                  </>
                )}
              </div>
            </div>
            {!jobClicked && (
              <>
                <div className="py-6 px-4 rounded-md bg-slate-400 w-[300px] max-h-[550px] lg:block hidden">
                  <p className="text-slate-700 font-sans font-medium pb-4">
                    Suggested Connections
                  </p>
                  <ul className="flex flex-col space-y-6">
                    <ConnectThumbnail
                      name="Juan Dela Cruz"
                      mutuals="12"
                      id="0"
                    />
                    <ConnectThumbnail
                      name="Juan Dela Cruz"
                      mutuals="17"
                      id="1"
                    />
                    <ConnectThumbnail
                      name="Juan Dela Cruz"
                      mutuals="6"
                      id="2"
                    />
                    <ConnectThumbnail
                      name="Juan Dela Cruz"
                      mutuals="9"
                      id="3"
                    />
                    <ConnectThumbnail
                      name="Juan Dela Cruz"
                      mutuals="38"
                      id="0"
                    />
                    <ConnectThumbnail
                      name="Juan Dela Cruz"
                      mutuals="16"
                      id="1"
                    />
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
