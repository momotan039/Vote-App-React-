import { users } from "../../data"
import './Statistics.css'
function Statistics({ user, changeScreen,votedUsers}) {
    const myVotedUsers=votedUsers.filter(u=>u.votedFor===user.name)
    const didVoteUser=(u)=>{
        const _user=myVotedUsers.find(f=>f.email===u.email)
        if(_user)
        return "Yes"
        return "No"
    }
    return <>
        <div className="container-data">
            <h1>Statistics for {user.name}</h1>
            <h2>Total Votes:{votedUsers.length}</h2>
            <button onClick={() => changeScreen(1)}>back</button>
        </div>
        <div className="table-continer">
        <table id="table-statistics">
            <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>did vote</th>
            </tr>
            </thead>
           <tbody>
           {
                users.map((u,i)=>{
                    return <tr key={i}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{didVoteUser(u)}</td>
                    </tr>
                })
            }
           </tbody>
        </table>
        </div>
    </>
}
export default Statistics