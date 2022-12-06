import {Link, useNavigate} from 'react-router-dom'
import '../css/projectsNavbar.css'
import { useMyContext } from "../hooks/useMyContext"

const ProjectsNavbar = () => {

    const {dispatch, project} = useMyContext()

    const navigate = useNavigate()

    const handleChange = (e) => {
        navigate(e.target.value)
        dispatch({type: 'SET_PROJECT', payload: e.target.value})
        }
    

    return ( 
        <>
        <div className="projectsNavbar">
        <h3>EL-SHADDAI<br></br>INTERIORS</h3>
        <div className="links">
            <Link to='/projects/estates'>ESTATES</Link>
            <Link to='/projects/developments'>DEVELOPMENTS</Link>
            <Link to='/projects/residential'>RESIDENTIAL</Link>
            <Link to='/projects/hotels'>HOTELS</Link>
        </div>
        <div className='selectNavbar'>
        <select value={project} onChange={handleChange}>
            <option value='/projects/estates'>ESTATES</option>
            <option value='/projects/developments'>DEVELOPMENTS</option>
            <option value='/projects/hotels'>HOTELS</option>
            <option value='/projects/residential'>RESIDENTIAL</option>
        </select>
        </div>
        <Link to='/'>HOME</Link>
    </div>
    <div className="mobilebar" id='mobilebar'>
            <Link to='/projects/estates'>ESTATES</Link>
            <Link to='/projects/developments'>DEVELOPMENTS</Link>
            <Link to='/projects/residential'>RESIDENTIAL</Link>
            <Link to='/projects/hotels'>HOTELS</Link>
    </div>
    </>
     );
}
 
export default ProjectsNavbar;

