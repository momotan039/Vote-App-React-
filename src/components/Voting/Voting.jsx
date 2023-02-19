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

    setCandidate(user.votedFor)
    return true;
  };

  const [candidate, setCandidate] = useState(undefined);
  const [popupMessage, setPopupMessage] = useState(undefined);
  const [isVoted, setIsVoted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [IsBallotIn, setIsBallotIn] = useState(checkUserVoted);

  const insertBallot=()=>{
    setIsBallotIn(true)
    setIsVoted(false)
    //show popup 
    setShowPopUp(true)
    setPopupMessage("thanks for voting")
     // save the user to the localStorage
     const user = props.user
     user['votedFor'] = candidate
     props.votedUsers.push(user)
     localStorage.setItem("votedUsers", JSON.stringify(props.votedUsers))
  }


  return (
    <div className="container-data">
      <h1>the voting closed {props.votedUsers.length}</h1>
      <PartiesContainer
        votedUsers={props.votedUsers}
        unVoteParty={(fun) => tools.UnVoteCandidate(fun)}
        candidate={candidate} isVoted={isVoted}
        voteParty={(p) => tools.selectParty(p, setIsVoted, setCandidate)}
        parties={parties}
        IsBallotIn={IsBallotIn}
         />

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
          showPopUp&&
          <PopUp
          isVoted={candidate}
          closePopUp={()=>setShowPopUp(false)}
          message={popupMessage}
          buttonText="complete"
        />
        }
      {
        IsBallotIn&&
       <>
         
        <div className="scale container-data">
          <h1>You already voted to : {candidate}</h1>
          {props.user.type === "admin" && (
            <button onClick={() => props.changeScreen(3)}>
              go to statistics
            </button>
          )}
          <button onClick={() => tools.logout(props)}>logout</button>
        </div>
       </>
      }
    </div>
  );
}
export default Voting;
