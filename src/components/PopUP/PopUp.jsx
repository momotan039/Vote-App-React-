import './PopUp.css'
function PopUp(props){

    debugger

    return <div id="popup-container">
        <div className="content">
            <h2 className='message'>{props.message}</h2>
            <div className="controls">
                <button onClick={()=>props.closePopUp()}>{props.buttonText??'Ok'}</button>
            </div>
        </div>
    </div>
}

export default PopUp