import { useRef, useState } from "react";
import { parties, users } from "../../data";
import PopUp from "../PopUP/PopUp";
import "./Voting.css";
import { tools } from "./Voting-functions.js";
import PartiesContainer from "./PartiesContainer";

function Voting(props) {
  
  const checkUserVoted = () => {
    const user = props.votedUsers.find((u) => u.email === props.user.email);
    debugger
    if (!user) return false;
    return true;
  };

  const admins = users.filter((u) => u.type === "admin");
  const [candidate, setCandidate] = useState(undefined);
  const [popUpButtonText, setPopUpButtonText] = useState(undefined);
  const [popupMessage, setPopupMessage] = useState(undefined);
  const [isVoted, setIsVoted] = useState(false);
  const [IsBallotIn, setIsBallotIn] = useState(checkUserVoted);
  const insertBallot=()=>{
    setIsBallotIn(true)
    setIsVoted(false)
     // save the user to the localStorage
     const user = props.user
     user['votedFor'] = candidate
     props.votedUsers.push(user)
     localStorage.setItem("votedUsers", JSON.stringify(props.votedUsers))
  }
  // useRef to make the funciton re-assignable
  const closePopUp = useRef();

  return (
    <main className="container-data">
      <h1>the voting closed {props.votedUsers.length}</h1>
      <PartiesContainer
        votedUsers={props.votedUsers}
        unVoteParty={(fun) => tools.UnVoteCandidate(fun)}
        candidate={candidate} isVoted={isVoted}
        voteParty={(p) => tools.selectParty(p, setIsVoted, setCandidate)}
        parties={parties}
        IsBallotIn={IsBallotIn}
         />
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
         
          <button onClick={() => tools.changeVote(props, setCandidate, setIsVoted)}>
            Change vote
          </button>

          <button onClick={insertBallot}>
            Done
          </button>

        </div>
      )}

      {
        IsBallotIn&&
        <div className="scale container-data">
          <h1>You voted to : {props.user.votedFor}</h1>
          {props.user.type === "admin" && (
            <button onClick={() => props.changeScreen(3)}>
              go to statistics
            </button>
          )}
          <button onClick={() => tools.logout(props)}>logout</button>
        </div>
      }
    </main>
  );
}
export default Voting;
