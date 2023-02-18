export const logout = (props) => {
    localStorage.removeItem("user")
    props.changeScreen(0)
}

export const selectParty=(party,setIsVoted)=>{
    debugger
    setIsVoted(true)
}

export const voteToCandidate = (candidate,closePopUp,setPopupMessage,setPopUpButtonText,props,setIsVoted) => {
    if (!candidate) {
        setPopupMessage("Please Select Candidate before Voting!!")
        closePopUp.current = () => setPopupMessage(undefined)
        return
    }
    // save the user to the localStorage
    const user = props.user
    user['votedFor'] = candidate
    props.votedUsers.push(user)
    localStorage.setItem("votedUsers", JSON.stringify(props.votedUsers))

    if (props.user.type === 'user') {
        setPopUpButtonText("Log Out")
        setPopupMessage("Thank's , you voted sucessfully , all you have to do is Log out")
        closePopUp.current = () => {
            logout(props)
        }
    } else {
        setPopUpButtonText("Ok")
        setPopupMessage("Thank's , you voted sucessfully")
        closePopUp.current = () => {
            setPopupMessage(undefined)
        }
    }
    setIsVoted(true)
}

export const selectOption = (select,setCandidate) => {
    setCandidate(select.value)
}
export  const changeVote = (props,setCandidate,setIsVoted) => {
    debugger
    let votedUsers = props.votedUsers.filter(
      (u) => u.email !== props.user.email
    );
    localStorage.removeItem("votedUsers");
    localStorage.setItem("votedUsers", JSON.stringify(votedUsers));
    props.changeVotedUsers(votedUsers);
    setCandidate(undefined);
    setIsVoted(false);
  };

export  * as tools from './Voting-functions.js'
