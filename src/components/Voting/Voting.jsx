import { users } from "../../data";
import "./Voting.css";
function Voting(props) {
  const admins = users.filter((u) => u.type === "admin");
  const isVoted = true;
  return (
    <>
      <select>
      <option>Select Candidate</option>
        {
            admins.map(a=>{
                <option value={a.name}>{a.name}</option>
            })
       }
       </select>
    </>
  );
}
export default Voting;
