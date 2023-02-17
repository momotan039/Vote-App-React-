function Screen() {
  
  const screens=[
    <Login onceFindUser={(user) => showUserPage(user)} />,
    <UserPage showVoting={() => showVotingPage()} user={currentUser} />,
    <Voting user={currentUser} />
  ]
const getCurrentScree=()=>{
  return screens[props.numberScreen]
}
 return getCurrentScree()
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
