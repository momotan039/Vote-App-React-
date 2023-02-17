import './UserPage.css'
function UserPage(props){
   debugger
   return<div className="user-page">
        <h1>Welcome Back {props.user.name}</h1>
        <h2>Select One of these options:</h2>
        <div className="controls">
        {
         (props.user.type==="admin")&&
         <button onClick={()=>props.changeScreen(3)}>show statistics</button>
        }
        <button onClick={()=>props.changeScreen(2)}>go to vote</button>
        </div>
   </div>
}

export default UserPage