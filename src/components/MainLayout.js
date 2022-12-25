import {Outlet, useNavigate} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import {useEffect, useState} from 'react'


const MainLayout = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [width, setWidth] = useState('0px')
    const [opacity, setOpacity] = useState(0)

    const navigate = useNavigate()

    const toggle = () =>{
        setIsOpen(!isOpen)
        if(isOpen){
            setWidth('90vh')
            setOpacity(1)
        }else{
            setWidth('0vh')
            setOpacity(0)
        }
    }

    console.log(opacity)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(()=>{
        scrollToTop()
    },[])


    const navi = (link) =>{
        setIsOpen(!isOpen)
        setWidth('0vh')
        setOpacity(0)
        navigate(link)
    }



    return ( 
        <div className="mainLayout">
            <div style={{height: width}} className="menu">
                <p onClick={()=>{navi('/')}}>HOME</p>
                <p onClick={()=>{navi('/projects')}}>PROJECTS</p>
                <p onClick={()=>{navi('/gallery')}}>GALLERY</p>
                <p onClick={()=>{navi('/contact')}}>CONTACT</p>
            </div>
            <Navbar isOpen={isOpen} toggle={toggle}/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;