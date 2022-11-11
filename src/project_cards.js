import './App.css';

export default function Project_cards(props) {
    return (
        <div className='card'>
                <div className='cardimg'><img src={props.img}/></div>
                
                <h3>{props.title}</h3>
                <div className='line'></div>
                <p> {props.description}</p>
                <a href={props.link} target='blank'><button>Link to repo</button></a>
            </div>
    )
}