import './PopUp.css'
function PopUp({showImage,img,message,buttonText,closePopUp}){

    debugger

    return <div id="popup-container">
        <div className="content">
            {
                showImage&&
                <img id='imgVoted' src={img}/>
            }
            <h2 className='message'>{message}</h2>
            <div className="controls">
                <button onClick={()=>closePopUp()}>{buttonText??'Ok'}</button>
            </div>
        </div>
    </div>
}

export default PopUp