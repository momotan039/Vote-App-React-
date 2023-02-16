import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Login from './components/Login/Login'

function App() {

  return (
    <div className="App">
        <>
        <Header/>
        <main className='container'>
          <div className="center">
            <Login/>
          </div>
        </main>
        <Footer/>
        </>
    </div>
  )
}

export default App
