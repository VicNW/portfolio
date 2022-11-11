import './App.css';
import linkedin from './img/Union.png';
import github from './img/github.svg';
import twitter from './img/81609.png';

export default function Footer() {
    return (
       <div className='footer'>
        <hr/>

        <div className='footer_details'>
            <div className='call'>
                <p>Call me</p>
                <a url="tel:+971565573611">+971-565-573-611</a>
            </div>

            <div className='email'>
                <p>Email</p>
                <a url="mailto:nwosuvictor54@gmail.com">nwosuvictor54@gmail.com</a>
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