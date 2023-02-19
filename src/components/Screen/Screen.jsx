import Login from '../Login/Login'
import Statistics from '../Statistics/Statistics'
import UserPage from '../UserPage/UserPage'
import Voting from '../Voting/Voting'

function Screen({user,changeUser,changeScreen,votedUsers,changeVotedUsers,numberScreen}) {
  const screens=[
    <Login onceFindUser={(u)=>changeUser(u)}/>,
    <UserPage changeScreen={(num)=>changeScreen(num)} user={user} />,
    <Voting changeVotedUsers={changeVotedUsers} votedUsers={votedUsers}  changeScreen={(num)=>changeScreen(num)} user={user} />,
    <Statistics votedUsers={votedUsers} changeScreen={(num)=>changeScreen(num)} user={user}/>,
  ]
const getCurrentScreen=()=>{
  return screens[numberScreen]
}
if(numberScreen>=2)
 return getCurrentScreen()
 else return <main>{getCurrentScreen()}</main>
}

export default Screen;
