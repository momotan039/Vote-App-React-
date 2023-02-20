import { useRef, useState } from "react";
import { parties, users } from "../../data";
import PopUp from "../PopUP/PopUp";
import "./Voting.css";
import { tools } from "./Voting-functions.js";
import PartiesContainer from "./PartiesContainer";

function Voting(props) {

  const handelCheckUserVoted = () => {
   return tools.checkUserVoted(props,setCandidate)
  }
  
  const handelInsertBallot = () => {
    tools.insertBallot(setIsBallotIn, setIsVoted, setShowPopUp, setPopupMessage, props, candidate)
  }

  const [candidate, setCandidate] = useState(undefined);
  const [popupMessage, setPopupMessage] = useState(undefined);
  const [isVoted, setIsVoted] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [IsBallotIn, setIsBallotIn] = useState(handelCheckUserVoted);




  return (
    <div className="container-data">

      {/* <h1>the voting closed {props.votedUsers.length}</h1> */}

      <PartiesContainer
        votedUsers={props.votedUsers}
        unVoteParty={(fun) => tools.UnVoteCandidate(fun)}
        candidate={candidate} isVoted={isVoted}
        voteParty={(p) => tools.selectParty(p, setIsVoted, setCandidate)}
        parties={parties}
        IsBallotIn={IsBallotIn}
      />

      {isVoted && (
        <div className="scale-3 container-data">

          <button onClick={() => tools.changeVote(props, setCandidate, setIsVoted)}>
            Change vote
          </button>

          <button onClick={handelInsertBallot}>
            Done
          </button>

        </div>
      )}

      {
        showPopUp &&
        <PopUp
          showImage={candidate}
          closePopUp={() => setShowPopUp(false)}
          message={popupMessage}
          buttonText="complete"
          img={'/vote2.gif'}
        />
      }

      {
        IsBallotIn &&
        <>

          <div className="scale-3 container-data">
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
