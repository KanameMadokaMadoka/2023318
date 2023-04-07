import './App.css';
import React, {useRef} from 'react';

function Homesection() {
  let qq=0;
  const showsidebar= () => {
    if(qq===0){
      document.getElementById('sidebar').classList.add('close');
      qq=1;
    }else if(qq===1){
      document.getElementById('sidebar').classList.remove('close');
      qq=0;
    }
  }

  const AudioRef = useRef(null);
  const handlePlay = () => {
    AudioRef.current.play();
  };
  const handlePause = () => {
    AudioRef.current.pause();
  };

  return (
  <section className="home-section">
  <div className="home-content">
    <i className='bx bx-menu' onClick={showsidebar}></i>
    <span className="text">Drop Down Sidebar</span>
    <audio ref={AudioRef} src='bgm.mp3'/>
    <div className='music'>
    <button className='btn-primary' onClick={handlePlay}>播放</button>  
    <button className='btn-primary' onClick={handlePause}>暫停</button>
    </div>
  </div>
  </section>
)}

export default Homesection;