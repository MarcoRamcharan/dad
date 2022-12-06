import {Outlet} from 'react-router-dom'
import  ProjectsNavbar from './ProjectsNavbar'
import Footer from './Footer'
import {useEffect} from 'react'

const MainLayout = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(()=>{
        scrollToTop()
    },[])


    return ( 
        <div className="projectsLayout">
            <ProjectsNavbar/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;

