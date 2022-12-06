import '../css/projects.css'
import {Link} from 'react-router-dom'

const Projects = () => {
    return ( 
        <div className="projects">
            <div className="projects-top">
                <div className="projects-top-headings">
                    <p>OUR PROJECTS</p>
                    <h5>VIEW OUR PROJECTS</h5>
                </div>
                <Link to='/gallery'>GALLERY<span class="arrow"><i class="fa-solid fa-arrow-right"></i></span></Link>
            </div>
            <div className="projects-btm">
        
                <div className="project project-development">
                    <div className="project-heading">
                        <div className="project-heading-content">
                            <p>DEVELOPMENT</p>
                        </div>
                    </div>
                        <Link to='/projects/developments'>VIEW</Link>
                </div>
                <div className="project project-residential">
                    <div className="project-heading">
                        <div className="project-heading-content">
                            <p>RESIDENTIAL</p>
                        </div>
                    </div>
                        <Link to='/projects/residential'>VIEW</Link>
                    </div>
                <div className="project project-hotels">
                    <div className="project-heading">
                        <div className="project-heading-content">
                            <p>HOTELS</p>
                    </div>
                    </div>
                            <Link to='/projects/hotels'>VIEW</Link>
                </div>
                <div className="project project-estates">
                    <div className="project-heading">
                        <div className="project-heading-content">
                            <p>ESTATES</p>
                        </div>
                    </div>
                            <Link to='/projects/estates'>VIEW</Link>
                </div>
            </div>
            </div>
     );
}
 
export default Projects;