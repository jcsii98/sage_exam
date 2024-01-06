import Reject from "../assets/reject.png";

export default function JobPage(props) {
  const { jobClicked, setJobClicked } = props;
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-start space-x-4">
          <div className="w-20 h-20 bg-white"></div>
          <div className="flex flex-col">
            <p className="text-slate-700 font-sans font-medium text-xl cursor-pointer">
              {jobClicked.job}
            </p>
            <p className="text-white font-sans font-medium">
              {jobClicked.company}
            </p>
            <p>
              {jobClicked.location} ({jobClicked.setup})
            </p>
          </div>
        </div>

        <img
          onClick={() => setJobClicked()}
          src={Reject}
          className="h-[24px] opacity-65"
        />
      </div>
      <div className="pt-4 flex flex-col space-y-4">
        <p className="text-slate-700 font-sans font-medium text-xl">
          Job Description
        </p>
        <p className="">
          Requirements: Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Rem consectetur, magnam officiis magni harum id at ipsum, et
          vel, sint dolor quibusdam eum distinctio reprehenderit asperiores
          beatae animi? Sint, eveniet.
        </p>
        <p>
          Qualifications: Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ex mollitia blanditiis facilis, aperiam amet rem dolorem
          repellendus earum maxime obcaecati eius vero hic aut voluptate quis,
          eos dolorum, impedit repudiandae.
        </p>
      </div>
      <button className="py-4 px-4 rounded-lg border-2 border-slate-700">
        Apply
      </button>
    </>
  );
}
