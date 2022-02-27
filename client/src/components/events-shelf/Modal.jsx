function Modal({details,clickHandler,show}){
    const {name, logolink, d2clink, description, knowmore} = details;
    return (
    <div className={show?"events-modal show":"events-modal"}>
        <div className="events-modal-container">
        <span className='events-modal-close' onClick={()=>{clickHandler()}}>X</span>
            <div className="events-modal-page1">
                <img src={logolink} height="50%" width="20%" alt="Minimal logo" />
                <button onClick={()=>{window.location=d2clink}} >Register</button>
            </div>
        <div className="events-modal-page2"><div className='events-modal-description'>{name}{description}</div><button onClick={()=>{window.location=knowmore}}>Know More</button></div>
        </div>
    </div>
);
}
export default Modal;