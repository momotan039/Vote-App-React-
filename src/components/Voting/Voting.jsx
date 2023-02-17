import { useRef, useState } from "react";
import { users } from "../../data";
import PopUp from "../PopUP/PopUp";
import "./Voting.css";
function Voting(props) {
  const checkUserVoted=()=>{
    const user=props.votedUsers.find(u=>u.email===props.user.email)
    if(!user)
    return false

    return true
  }
  const admins = users.filter((u) => u.type === "admin");
  const [candidate,setCandidate]=useState(undefined)
  const [popUpButtonText,setPopUpButtonText]=useState(undefined)
  const [popupMessage,setPopupMessage]=useState(undefined)
  const [isVoted,setIsVoted]=useState(checkUserVoted())

  
  const changeVote=()=>{
    let votedUsers=props.votedUsers.filter(u=>u.email!==props.user.email);
    localStorage.removeItem('votedUsers')
    localStorage.setItem('votedUsers',JSON.stringify(votedUsers))
    props.changeVotedUsers(votedUsers)
    setCandidate(undefined)
    setIsVoted(false)
  }
  

  // useRef to make the funciton assignable
  const closePopUp = useRef();

  const logout=()=>{
    localStorage.removeItem("user")
    props.changeScreen(0)
  }

  const voteToCandidate=()=>{
    if(!candidate)
    {
      setPopupMessage("Please Select Candidate before Voting!!")
      closePopUp.current=()=>setPopupMessage(undefined)
      return
    }
    // save the user to the localStorage
    const user=props.user
    user['votedFor']=candidate
    props.votedUsers.push(user)
    localStorage.setItem("votedUsers",JSON.stringify(props.votedUsers))

    if(props.user.type==='user')
    {
    setPopUpButtonText("Log Out")
    setPopupMessage("Thank's , you voted sucessfully , all you have to do is Log out")
    closePopUp.current=()=>{
      logout()
     }
    }
    else{
      setPopUpButtonText("Ok")
      setPopupMessage("Thank's , you voted sucessfully")
      closePopUp.current=()=>{
        setPopupMessage(undefined)
       }
    }
    setIsVoted(true)
  }

  const selectOption=(select)=>{
    setCandidate(select.value)
  }

  return (
    <div className="container-data">
    <div id="voting">
      <select value={props.user.votedFor} className="select-candidate" disabled={isVoted} onChange={(e)=>selectOption(e.target)}>
      <option value="">Select Candidate</option>
        {
            admins.map((a,i)=>{
               return <option key={i} value={a.name}>{a.name}</option>
            })
        }
       </select>
       <button className={!isVoted?'voteBtn':'voteBtnDisable'} onClick={voteToCandidate}>Vote Now</button>
       {
        popupMessage&&<PopUp closePopUp={closePopUp.current} buttonText={popUpButtonText} message={popupMessage} />
       }
    </div>
    {
      isVoted && <div className="container-data">
      <h1>you already voted to {props.user.votedFor}</h1>
      {
        props.user.type==='admin'&&
        <button onClick={()=>props.changeScreen(3)}>go to statistics</button>
      }
      <button onClick={changeVote}>Change vote</button>
      <button onClick={logout}>logout</button>
      </div>
    }
    </div>

  );
}
export default Voting;
