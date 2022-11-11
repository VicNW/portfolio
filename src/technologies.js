import './App.css';
import Skills from './skills'


export default function Technologies(props) {
    return (
    <div className='tech_div'>
        <h2 className='term_h2'>Technologies</h2>
        <Skills
        skill='HTML'
        group='advanced'
        level='level80' />
        <Skills
        skill='CSS'
        group='advanced'
        level='level80' />
        <Skills
        skill='Bootstrap'
        group='advanced'
        level='level60' />
        <Skills
        skill='Tailwind'
        group='mid-level'
        level='level40' />
        <Skills
        skill='Javascript & React'
        group='mid level'
        level='level40' />
        <Skills
        skill='Python & Django'
        group='mid level'
        level='level40' />
        <Skills
        skill='SQL'
        group='mid level'
        level='level40' />
        <Skills
        skill='Shell Scripting'
        group='mid level'
        level='level60' />
        <Skills
        skill='DevOps and Deployment'
        group='mid level'
        level='level60' />
        <Skills
        skill='Puppet'
        group='beginner'
        level='level20' />

        {/* <div className='big_add'> */}
            {/* <h2 className='add'>Additional technologies and skills</h2> */}
            {/* <ul> */}
                {/* <li>Html</li> */}
                {/* <li>CSS, Sass, Bootstrap & Tailwind</li> */}
                {/* <li>Javascript & React</li> */}
                {/* <li>Python & Django</li> */}
                {/* <li>DevOps and Deployment</li> */}
            {/* </ul> */}
        {/* </div> */}
    </div>
    );
}