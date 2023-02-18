import PartyCard from "./PartyCard"

function PartiesContainer({ parties, voteParty }) {
        return <div id="parties">
                {
                        parties.map((p, i) => {
                                return <PartyCard voteMe={() => voteParty(p.name)} party={p} key={i} />
                        })
                }
        </div>
}

export default PartiesContainer