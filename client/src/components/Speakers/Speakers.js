import React from 'react';
import SpeakerCard from './SpeakerCard';
import './Speakers.css';
import Pict from '../Images/VanshajMittal.png';

function Speakers() {
  return (
    <>
    <div className='container'>
        <div className='headtx'>SPEAKER <div style={{color:'#68D4E8'}}>SESSIONS</div></div>
    </div>
    <div className="container">
        <div className='row' style={{marginTop:'114px'}}>
            <div className='col-md-4'><SpeakerCard name={'Speaker Name'} details={'Details'} date={'Date and Time'} picture={Pict} lk={'#'}/></div>
            <div className='col-md-4'><SpeakerCard name={'Speaker Name'} details={'Details'} date={'Date and Time'} picture={Pict} lk={'#'}/></div>
            <div className='col-md-4'><SpeakerCard name={'Speaker Name'} details={'Details'} date={'Date and Time'} picture={Pict} lk={'#'}/></div>
        </div>
        <div className='row'></div>
        <div className='row' style={{marginTop:'120px', marginBottom:'50px'}}>
            <div className='col-md-4'><SpeakerCard name={'Speaker Name'} details={'Details'} date={'Date and Time'} picture={Pict} lk={'#'}/></div>
            <div className='col-md-4'><SpeakerCard name={'Speaker Name'} details={'Details'} date={'Date and Time'} picture={Pict} lk={'#'}/></div>
            <div className='col-md-4'><SpeakerCard name={'Speaker Name'} details={'Details'} date={'Date and Time'} picture={Pict} lk={'#'}/></div>
        </div>
    </div>
    </>
  )
}

export default Speakers 