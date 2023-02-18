import { users } from "../../data"
import MyChart from "../Chart/MyChart"
import './Statistics.css'
function Statistics({ user, changeScreen,votedUsers}) {
    const myVotedUsers=votedUsers.filter(u=>u.votedFor===user.name)
    const didVoteUser=(u)=>{
        const _user=myVotedUsers.find(f=>f.email===u.email)
        if(_user)
        return "Yes"
        return "No"
    }
    const getRandomColor=()=>{
        const r=Math.floor(Math.random()*255)
        const g=Math.floor(Math.random()*255)
        const b=Math.floor(Math.random()*255)
        return `rgb(${r} ${g} ${b} /50%)`
    }
    return <>
        <MyChart votedUsers={votedUsers}/>
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
                    return <tr style={{backgroundColor:getRandomColor()}} key={i}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{didVoteUser(u)}</td>
                    </tr>
                })
            }
           </tbody>
        </table>
        </div>
        <div className="container-data">
            <h1>Statistics for {user.name}</h1>
            <h2>Total Votes:{votedUsers.length}</h2>
            <button onClick={() => changeScreen(1)}>back</button>
        </div>
    </>
}
export default Statistics