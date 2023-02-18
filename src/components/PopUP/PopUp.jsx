import './PopUp.css'
function PopUp(props){

    debugger

    return <div id="popup-container">
        <div className="content">
            {
                props.isVoted&&
                <img id='imgVoted' src="/src/assets/15316-vote-blue.gif"/>
            }
            <h2 className='message'>{props.message}</h2>
            <div className="controls">
                <button onClick={()=>props.closePopUp()}>{props.buttonText??'Ok'}</button>
            </div>
        </div>
    </div>
}

export default PopUp