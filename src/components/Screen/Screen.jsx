import Login from '../Login/Login'
import Statistics from '../Statistics/Statistics'
import UserPage from '../UserPage/UserPage'
import Voting from '../Voting/Voting'

function Screen(props) {
  const user=props.user
  const screens=[
    <Login onceFindUser={(u)=>props.changeUser(u)}/>,
    <UserPage changeScreen={(num)=>props.changeScreen(num)} user={user} />,
    <Voting changeVotedUsers={props.changeVotedUsers} votedUsers={props.votedUsers}  changeScreen={(num)=>props.changeScreen(num)} user={user} />,
    <Statistics votedUsers={props.votedUsers} changeScreen={(num)=>props.changeScreen(num)} user={user}/>,
  ]
const getCurrentScreen=()=>{
  return screens[props.numberScreen]
}
 return getCurrentScreen()
  // return (
  //   <>
  //     {!currentUser && <Login onceFindUser={(user) => showUserPage(user)} />}
  //     {currentUser && (
  //       <UserPage showVoting={() => showVotingPage()} user={currentUser} />
  //     )}
  //     {showVoting && <Voting user={currentUser} />}
  //   </>
  // );
}

export default Screen;
