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
    debugger
    if(votedUser)
    setCurrentUser(votedUser)
    else
    setCurrentUser(_userJson)
  }
  const getVotedUsers = () => {
    const votedUsers = JSON.parse(localStorage.getItem('votedUsers'))
    debugger
    if (votedUsers)
      setVotedUsers(votedUsers)
  }

  let [currentScreen, setCurrentScreen] = useState(0)
  let [currentUser, setCurrentUser] = useState(undefined)
  let [votedUsers, setVotedUsers] = useState([])

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
        <main className='container'>
          <div className="center">
            <Screen
              votedUsers={votedUsers}
              changeUser={(u) => handelChangeUser(u)}
              user={currentUser}
              numberScreen={currentScreen}
              changeScreen={(num) => setCurrentScreen(num)}
            />
          </div>
        </main>
        <Footer />
      </>
    </div>
  )
}

export default App
