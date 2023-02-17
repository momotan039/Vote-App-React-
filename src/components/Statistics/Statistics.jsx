 function Statistics({user,changeScreen}){
    return <div className="container-data">
    <h1>Statistics {user.name}</h1>
    <button onClick={()=>changeScreen(1)}>back</button>
    </div>
}
export default Statistics