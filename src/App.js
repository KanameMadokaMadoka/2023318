import './App.css';

function App() {
  let q=0;

  const showmenu = (e) =>{
    if(q===0){
      document.getElementById('divlist1').classList.add('arrow');
      q=1;
    }else if(q===1){
      document.getElementById('divlist1').classList.remove('arrow');
      q=0;
    }
    console.log(e)
  }

  return (
    
    <div id='sidebar'className="sidebar close">
        <div className="logo-details">
         <i className='bx bxl-c-plus-plus'></i>
         <span className="logo_name">Madoka Home</span>
        </div>
      <ul className="nav-links">
        <li>
          <div className='icon-link'>
           <a href="https://www.gamer.com.tw/">
            <i className='bx bx-game' ></i>
            <span className='link_name'>bahamut</span>
           </a>
          </div>
        </li>
        <li id='divlist1' className='arrow'>
          <div className='icon-link'>
            <a href="https://www.youtube.com/">
            <i className='bx bxs-videos'></i>
            <span className='link_name'>Youtube</span>
            </a>
            <i id='ar'className='bx bx-chevron-down ' onClick={showmenu}></i>
          </div>
          <ul className="sub-menu">
            <li><span className='link_name'>Youtube</span></li>
            <li><a href="https://youtube.com/playlist?list=PLxYt55CGi3AR8ZKVAdTHZEqDYjOcz3jQb"><span>Halo wars 2</span></a></li>
            <li><a href="https://youtube.com/playlist?list=PLvEtC64yhkkjXc5EKY_VYa1PnkfSoHMwn"><span>MapleStory</span></a></li>
            <li><a href="https://youtube.com/playlist?list=PLxYt55CGi3ASRNKITZwdJayBaLG1Y_fd2"><span>Path of Exile</span></a></li>
          </ul>
        </li>
        <li>
          <div className='icon-link'>
            <a href='https://www.w3schools.com/'>
              <i className='bx bxs-graduation' ></i>
              <span className='link_name'>w3school</span>
            </a>
          </div>
        </li>
        <li>
          <div className='icon-link'>
            <a href='https://pc-play.games.dmm.com/play/oshirore/'>
              <i className='bx bxs-castle' ></i>
              <span className='link_name'>御城少女</span>
            </a>
          </div>
        </li>
        <li>
          <div className='icon-link'>
              <a href='https://mail.google.com/mail/u/0/#inbox'>
              <i className='bx bxl-gmail' ></i>
            <span className='link_name'>Gmail</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;