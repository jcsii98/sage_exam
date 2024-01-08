import User1 from "../assets/user1.png";
import User2 from "../assets/user2.png";
import User3 from "../assets/user3.png";
import User4 from "../assets/user4.png";

export default function ConnectThumbnail(props) {
  const { name, mutuals, id } = props;
  const usersArray = [User1, User2, User3, User4];
  return (
    <>
      <li className="flex items-center space-x-4">
        <div className="h-14 w-14">
          <img className="cursor-pointer" src={usersArray[id]} />
        </div>
        <div className="flex flex-col">
          <p className="text-slate-700 font-sans font-medium cursor-pointer">
            {name}
          </p>
          <p className="text-slate-600 font-sans font-normal text-sm cursor-pointer">
            {mutuals} mutual connections
          </p>
        </div>
      </li>
    </>
  );
}
