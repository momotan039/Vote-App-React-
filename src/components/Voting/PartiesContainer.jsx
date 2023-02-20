import PartyCard from "./PartyCard"

function PartiesContainer({ parties, voteParty, isVoted, candidate,unVoteParty,votedUsers,IsBallotIn }) {
        return <div id="parties">
                {
                        parties.map((p, i) => {
                                return <PartyCard
                                        isVotedUser={isVoted}
                                        voteMe={() => voteParty(p.name)}
                                        party={p} 
                                        selectedParty={candidate}
                                        unVoteMe={(fun)=>unVoteParty(fun)}
                                        votedUsers={votedUsers}
                                        IsBallotIn={IsBallotIn}
                                        classEffect={'scale-'+i}
                                         key={i} />
                        })
                }
        </div>
}

export default PartiesContainer