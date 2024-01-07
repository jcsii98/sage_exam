import Reject from "../assets/reject.png";

export default function JobThumbnail(props) {
  const { job, company, location, setup, setJobClicked } = props;
  const jobInfo = {
    job: job,
    company: company,
    location: location,
    setup: setup,
  };
  return (
    <>
      <div className="py-4 border-b-[1.5px] border-slate-500">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-white"></div>
            </div>
            <div className="flex flex-col">
              <p
                className="text-slate-700 font-sans font-medium cursor-pointer"
                onClick={() => setJobClicked(jobInfo)}
              >
                {job}
              </p>
              <p className="text-white font-sans font-normal text-sm">
                {company}
              </p>
              <p className="text-slate-600 font-sans font-normal text-sm">
                {location} ({setup})
              </p>
            </div>
          </div>

          {/* <div className="">
            <img src={Reject} className="h-[24px] opacity-65" />
          </div> */}
        </div>
      </div>
    </>
  );
}
