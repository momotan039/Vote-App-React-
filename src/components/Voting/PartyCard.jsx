import { useState } from "react"

function PartyCard({ party,voteMe }) {
    let [votes,setVotes]=useState(0)
    let [voted,setVoted]=useState(false)

    const getImagePath=()=>{
        return '/src/assets/'+party.name+'.jpg'
    }
    const handelVoteMe=()=>{
        setVotes(++votes)
        setVoted(true)
        voteMe()
    }
    return <div className="party scale">
        <h2>{party.name}</h2>
        <img src={getImagePath()}/>
        <h2>total votes:{votes}</h2>
        <div className="controls">
            <button className={!voted ? "voteBtn" : "voteBtnDisable"} onClick={handelVoteMe}>Vote</button>
        </div>
    </div>
}
export default PartyCard