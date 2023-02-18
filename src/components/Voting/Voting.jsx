import { useRef, useState } from "react";
import { parties, users } from "../../data";
import PopUp from "../PopUP/PopUp";
import "./Voting.css";
import { tools } from "./Voting-functions.js";
import PartiesContainer from "./PartiesContainer";

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
    <main className="container-data">
      <h1>the voting closed {props.votedUsers.length}</h1>
        <PartiesContainer voteParty={(p)=>tools.selectParty(p,setIsVoted)} parties={parties}/>
        {/* <select
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
        </button> */}
        {popupMessage && (
          <PopUp
            isVoted={candidate}
            closePopUp={closePopUp.current}
            buttonText={popUpButtonText}
            message={popupMessage}
          />
        )}
      {isVoted && (
        <div className="scale container-data">
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
    </main>
  );
}
export default Voting;
