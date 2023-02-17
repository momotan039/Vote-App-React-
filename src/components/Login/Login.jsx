import { useState } from 'react'
import { users } from '../../data.js'
import PopUp from '../PopUP/PopUp.jsx'
import './Login.css'
function Login(props) {

    let user = {}
    let [findUser, setFindUser] = useState(true)

    const handelForm = (e) => {
        e.preventDefault()
        const _user = users.find(u => u.email === user.email && u.password === user.password)

        if (!_user)
        {
            setFindUser(false)
            return
        }

        // localStorage.setItem(user,_user)
        props.onceFindUser(_user)
    }

    const changeInput = (input) => {
        user[input.name] = input.value
    }

    return (
        <>
            <div className='login'>
                <form>
                    <div className="row center">
                        <h1 className='title'>Login To App</h1>
                    </div>

                    <div className="row">
                        <span>Email:</span>
                        <input name='email' onInput={(e) => changeInput(e.target)} placeholder='Enter Your Email..' />
                    </div>

                    <div className="row">
                        <span>Password:</span>
                        <input name='password' onInput={(e) => changeInput(e.target)} type="password" placeholder='Enter Your Password...' />
                    </div>

                    <div className="row center">
                        <button onClick={handelForm}>Login</button>
                    </div>
                </form>
            </div>
            {
                !findUser && <PopUp closePopUp={()=>setFindUser(true)} message='Email or password not correct..Please try again!!' />
            }
        </>


    )
}

export default Login