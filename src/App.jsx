import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Screen from './components/Screen/Screen'


function App() {

  const getCurrentUser = () => {
    const _user = localStorage.getItem('user')
    if (!_user)
      return _user

    const _userJson = JSON.parse(_user)
    setCurrentScreen(1)

    const votedUser=votedUsers.find(u=>u.email===_userJson.email)
    if(votedUser)
    setCurrentUser(votedUser)
    else
    setCurrentUser(_userJson)
  }
  const getVotedUsers = () => {
    const votedUsers = JSON.parse(localStorage.getItem('votedUsers'))
    if (votedUsers)
      setVotedUsers(votedUsers)
  }

  let [currentScreen, setCurrentScreen] = useState(0)
  let [currentUser, setCurrentUser] = useState(undefined)
  let [votedUsers, setVotedUsers] = useState([])
  let [countVotes, setCountVotes] = useState(0)
  const maxVotes=2

  useEffect(() => {
    getVotedUsers()
    getCurrentUser()
  }, [])


  const handelChangeUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setCurrentUser({ ...user })
    setCurrentScreen(1)
  }

  return (
    <div className="App">
      <>
        <Header />
          <div className="container">
            <Screen
              votedUsers={votedUsers}
              changeVotedUsers={(vu)=>setVotedUsers(vu)}
              changeUser={(u) => handelChangeUser(u)}
              user={currentUser}
              numberScreen={currentScreen}
              changeScreen={(num) => setCurrentScreen(num)}
            />
          </div>
        <Footer />
      </>
    </div>
  )
}

export default App
