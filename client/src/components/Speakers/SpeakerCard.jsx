import React from 'react';


function SpeakerCard(props) {
  return (
        <div className="card relative">
            <div className="tbc"></div>
            <img className='pic' src={props.picture} alt=''></img>
            <a className='linked' href={props.lk}><i className="fa-brands fa-linkedin" style={{color:'#68D4E8',fontSize:'37.58px'}}></i></a>
            <div className='name'>{props.name}</div>
            <div className='details'>{props.details}</div>
            <div className='date'>{props.date}</div>
        </div>
  )
}

export default SpeakerCard