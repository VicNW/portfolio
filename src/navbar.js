import './App.css';

import linkedin from './img/Union.png';
import github from './img/github.svg';
import twitter from './img/81609.png';
import logo from './img/Vector.png';


export default function NavBar() {
    return (
      <div className='big_header'>
        <div className='header'>
          <img src={logo} className='logo'/>

          <div className='headers'>
            <h2>Projects</h2>
            <h2 className='mid'>Terminologies</h2>
            <h2>About me</h2>
          </div>

          <div className='socials'>
              <div className='social_div'><img src={linkedin} className='linkedin'/></div>
              <div className='social_div'><img src={github} className='github'/></div>
              <div className='social_div'><img src={twitter} className='twitter'/></div>
            
            
          </div>
          </div>
        </div>
    );
}