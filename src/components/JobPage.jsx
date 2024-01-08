import Reject from "../assets/reject.png";

export default function JobPage(props) {
  const { jobClicked, setJobClicked } = props;
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 bg-white"></div>
          <div className="flex flex-col">
            <p className="text-slate-700 font-sans font-medium text-2xl cursor-pointer">
              {jobClicked.job}
            </p>
            <p className="text-white font-sans font-medium text-xl">
              {jobClicked.company}
            </p>
            <p className="text-slate-600 font-sans font-normal text-md">
              {jobClicked.location} ({jobClicked.setup})
            </p>
          </div>
        </div>
        <img
          onClick={() => setJobClicked()}
          src={Reject}
          className="h-[24px] opacity-65 cursor-pointer"
        />
      </div>
      <div className="pt-4 grid grid-cols-2">
        <div className="flex flex-col space-y-4 border-r-[1px]">
          <p className="text-slate-700 font-sans font-medium text-2xl">
            Job Description
          </p>
          <p className="max-w-80 text-slate-700">
            Requirements: Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Rem consectetur, magnam officiis magni harum id at ipsum, et
            vel, sint dolor quibusdam eum distinctio reprehenderit asperiores
            beatae animi? Sint, eveniet.
          </p>
          <p className="max-w-80 text-slate-700">
            Qualifications: Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ex mollitia blanditiis facilis, aperiam amet rem dolorem
            repellendus earum maxime obcaecati eius vero hic aut voluptate quis,
            eos dolorum, impedit repudiandae.
          </p>
        </div>

        {/* FORM */}
        <div className="flex flex-col space-y-4 pl-4">
          <p className="text-slate-700 font-sans font-medium text-2xl">
            Application Form
          </p>
          <div className="text-sm">
            <input
              className="w-[80%] rounded-md py-2 px-1 focus:outline-none pl-2"
              placeholder="Name"
            ></input>
          </div>
          <div className="text-sm">
            <input
              className="w-[80%] rounded-md py-2 px-1 focus:outline-none pl-2"
              placeholder="Address"
            ></input>
          </div>
          <div className="text-sm">
            <input
              className="w-[80%] rounded-md py-2 px-1 focus:outline-none pl-2"
              placeholder="Work Experience (Years)"
            ></input>
          </div>
          <div className="text-sm">
            <input
              className="w-[80%] rounded-md py-2 px-1 focus:outline-none pl-2"
              placeholder="Asking Salary (PhP / Month)"
            ></input>
          </div>
          <div className="text-sm">
            <button className="w-[80%] py-2 px-2 rounded-lg border-[1.5px] border-slate-700 cursor-pointer hover:bg-slate-700 hover:text-slate-100 hover:border-slate-100">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
