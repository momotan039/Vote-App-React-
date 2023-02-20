import { useEffect, useRef, useState } from "react"
import { parties, users } from "../../data"
import MyChart from "../Chart/MyChart"
import PopUp from "../PopUP/PopUp"
import './Statistics.css'
function Statistics({ user, changeScreen,votedUsers}) {
  
    let [popUpContent,setPopUpContent]=useState(undefined)
    const didVoteUser=(u)=>{
        const _user=votedUsers.find(f=>f.email===u.email)
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
    const getWinner=()=>{
      const arrVotes= parties.map(p=>{
            const votes=votedUsers.filter(v=>v.votedFor===p.name).length
            return {...p,totalVotes:votes}
        })
        //sort it
        arrVotes.sort((p1,p2)=>p2.totalVotes-p1.totalVotes)

        const first=arrVotes[0]
        const second=arrVotes[1]

        const newPopUpContent={}
        if(first.totalVotes>second.totalVotes)
        {
            newPopUpContent.img=first.img
            newPopUpContent.message=`${first.name} party winner till now`
            newPopUpContent.showImage=true
        }
       
        if(first.totalVotes<second.totalVotes)
        {
            newPopUpContent.img=second.img
            newPopUpContent.message=`${second.name} party winner till now`
            newPopUpContent.showImage=true
        }

        if(first.totalVotes===second.totalVotes)
        {
            newPopUpContent.message=`no party winner till now`
            newPopUpContent.showImage=false
        }
        debugger
        setPopUpContent({...newPopUpContent})
    }

    return <div id="statistics">
        <MyChart votedUsers={votedUsers}/>
        <button onClick={getWinner}>Show Winner</button>
        {
            popUpContent&&
            <PopUp
                img={popUpContent.img}
                showImage={popUpContent.showImage}
                buttonText="close"
                message={popUpContent.message}
                closePopUp={()=>setPopUpContent(undefined)}
            />
        }
        <div className="table-continer">
        <table  className="scale-2" id="table-statistics">
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
        <div className="container-data scale-3">
            {/* <h1>Statistics for {user.name}</h1>
            <h2>Total Votes:{votedUsers.length}</h2> */}
            <button onClick={() => changeScreen(1)}>back</button>
        </div>
    </div>
}
export default Statistics