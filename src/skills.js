import './App.css';

export default function Skills(props) {
    return (
        <div className='skills_scale'>
            <div className='scale_text'>
                <h4>{props.skill}</h4>
                <p>{props.group}</p>  
            </div>
            <div className='scale'>
                <div className="level" id={props.level}></div>
            </div>

        </div>
    );
}