import { useState } from "react"

function PartyCard({ party,voteMe,unVoteMe,isVotedUser,selectedParty,votedUsers,IsBallotIn}) {
    debugger
    const getTotalVotes=()=>{

        let votes=votedUsers.filter(f=>f.votedFor===party.name).length

        if(!selectedParty||!voted)
            return votes;
        
        if(selectedParty===party.name)
        ++votes
        else
        {
             --votes
            unVoteMe(setVoted)
        }

        return votes
    }

    let [voted,setVoted]=useState(false)

    const getImagePath=()=>{
        return '/src/assets/'+party.name+'.jpg'
    }
    const handelVoteMe=()=>{
        setVoted(true)
        voteMe()
    }
    
    return <div className="party scale">
        <h2>{party.name}</h2>
        <div style={{backgroundImage:`url(${party.img})`, height:"50px", width:"50px", backgroundPosition:"center", backgroundSize:"cover"}}></div>
        <h2>total votes:{getTotalVotes()}</h2>
        <div className="controls">
            <button className={isVotedUser||IsBallotIn ? "voteBtnDisable" : "voteBtn"} onClick={handelVoteMe}>Vote</button>
        </div>
    </div>
}
export default PartyCard