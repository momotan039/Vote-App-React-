import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import UserPage from './components/UserPage/UserPage'

function App() {
  let [currentUser, setCurrentUser] = useState(null)

const showVotingPage=(user)=>{
  setCurrentUser({...user})
}

  return (
    <div className="App">
        <>
        <Header/>
        <main className='container'>
          <div className="center">
            {
              !currentUser && <Login  onceFindUser={(user)=>showVotingPage(user)}/>
            }
            {
              currentUser && <UserPage user={currentUser}/>
            }
          </div>
        </main>
        <Footer/>
        </>
    </div>
  )
}

export default App
