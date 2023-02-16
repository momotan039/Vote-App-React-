import { useState } from 'react'
import { users } from '../../data.js'
import './Login.css'
function Login(props) {
    //  const [dataForm,setDataForm]=useState({
    //     email:'',
    //     password:''
    //  })
    const user = {
        email: '',
        password: ''
    }
    const handelForm = (e) => {
        e.preventDefault()
        
}

    return (
        <div className='login'>
            <form>

                <div className="row">
                    <h1 className='title'>Login To App</h1>
                </div>

                <div className="row">
                    <span>Email:</span>
                    <input placeholder='Enter Your Email..' />
                </div>

                <div className="row">
                    <span>Password:</span>
                    <input type="password" placeholder='Enter Your Password...' />
                </div>

                <div className="row">
                    <button onClick={handelForm}>Login</button>
                </div>

                <div className="row error-messeage">
                    <h1>Email or password not correct..Please try again!!</h1>
                </div>
            </form>
        </div>
    )
}

export default Login