import { useRef, useState } from "react";
import { users } from "../../data";
import PopUp from "../PopUP/PopUp";
import "./Voting.css";
import { tools } from "./Voting-functions.js";
function Voting(props) {
  const checkUserVoted = () => {
    const user = props.votedUsers.find((u) => u.email === props.user.email);
    if (!user) return false;

    return true;
  };
  const admins = users.filter((u) => u.type === "admin");
  const [candidate, setCandidate] = useState(undefined);
  const [popUpButtonText, setPopUpButtonText] = useState(undefined);
  const [popupMessage, setPopupMessage] = useState(undefined);
  const [isVoted, setIsVoted] = useState(checkUserVoted());

  // useRef to make the funciton re-assignable
  const closePopUp = useRef();

  return (
    <div className="container-data">
      <h1>the voting closed</h1>
      <div id="voting">
        <select
          value={props.user.votedFor}
          className="select-candidate"
          disabled={isVoted}
          onChange={(e) => tools.selectOption(e.target, setCandidate)}
        >
          <option value="">Select Candidate</option>
          {admins.map((a, i) => {
            return (
              <option key={i} value={a.name}>
                {a.name}
              </option>
            );
          })}
        </select>
        <button
          className={!isVoted ? "voteBtn" : "voteBtnDisable"}
          onClick={() =>
            tools.voteToCandidate(
              candidate,
              closePopUp,
              setPopupMessage,
              setPopUpButtonText,
              props,
              setIsVoted
            )
          }
        >
          Vote Now
        </button>
        {popupMessage && (
          <PopUp
            isVoted={candidate}
            closePopUp={closePopUp.current}
            buttonText={popUpButtonText}
            message={popupMessage}
          />
        )}
      </div>
      {isVoted && (
        <div className="container-data">
          <h1>you already voted to {props.user.votedFor}</h1>
          {props.user.type === "admin" && (
            <button onClick={() => props.changeScreen(3)}>
              go to statistics
            </button>
          )}
          <button onClick={()=>tools.changeVote(props, setCandidate, setIsVoted)}>
            Change vote
          </button>
          <button onClick={()=>tools.logout(props)}>logout</button>
        </div>
      )}
    </div>
  );
}
export default Voting;
