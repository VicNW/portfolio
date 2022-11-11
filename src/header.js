import './App.css';
import Picture from './img/my_pfp.jpg';


export default function Header() {
    return (
        <div className='big_hero'>
    <div className='hero'>
        <div className='picture_div'>
            <img src={Picture} className='picture' alt='Picture of Victor Nwosu wearing a black and brown sweater'/>
        </div>
        <div>
            <h1>Fullstack Web Developer with a <span>difference</span></h1>
            <p>Software Engineering to me is about the unseen, writing codes that makes everyday life automated.
On the click of a button you see your dreams come alive and do not need to worry about the how or the why.
Leaving an impression with every contact made.

Are you ready to make magic?...</p>
            <button type='' href="">Download cv</button>
        </div>
    </div>
    </div>
    );
}