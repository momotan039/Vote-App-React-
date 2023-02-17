import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import UserPage from './components/UserPage/UserPage'
import Voting from './components/Voting/Voting'

function App() {
  let [currentUser, setCurrentUser] = useState(null)
  let [showVoting, setShowVoting] = useState(false)

const showUserPage=(user)=>{
  setCurrentUser({...user})
}
const showVotingPage=()=>{
  setShowVoting(true)
}

  return (
    <div className="App">
        <>
        <Header/>
        <main className='container'>
          <div className="center">
            {
              <Screen numberScreen={0} />
            }
          </div>
        </main>
        <Footer/>
        </>
    </div>
  )
}

export default App
