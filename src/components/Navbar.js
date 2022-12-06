import '../css/navbar&banner.css'
import {Link} from 'react-router-dom'


const Navbar = ({toggle, isOpen}) => {
    return ( 
        <div className="navbar">
            <h5>EL-SHADDAI<br></br>INTERIORS</h5>
            <div className="links">
                <Link to='/projects'>PROJECTS</Link>
                <Link to='/gallery'>GALLERY</Link>
                <Link to='/contact'>CONTACT</Link>
            </div>
            <div className='menu-icon'>
                <h2 onClick={toggle} style={{color: "white"}}>{!isOpen ? <i class="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</h2>
            </div>
        </div>
     );
}
 
export default Navbar;



