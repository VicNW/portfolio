import './App.css';
import data from './project_data'
import Project_cards from './project_cards'

export default function Project(props) {

    const projects = data.map(items =>{
        return (
          <Project_cards
            {...items}
          />
        )
      }
      )

    return (
    <div className='project_div'>
        <h2 className='project_h2'>Projects</h2>

        <div className='card_grid'>
            {projects}
        </div>

    </div>
    );
}