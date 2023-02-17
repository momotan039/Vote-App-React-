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
    setCurrentUser(_userJson)
  }

  let [currentScreen, setCurrentScreen] = useState(0)
  let [currentUser, setCurrentUser] = useState(undefined)
  let [showVoting, setShowVoting] = useState(false)

  useEffect(() => {
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
              changeUser={(u) => handelChangeUser(u)}
              user={currentUser}
              numberScreen={currentScreen} 
              changeScreen={(num)=>setCurrentScreen(num)}
              />
          </div>
        </main>
        <Footer />
      </>
    </div>
  )
}

export default App
