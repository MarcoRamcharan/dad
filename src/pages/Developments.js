import '../css/developments.css'
import one from '../images/developments/2.jpg'
import two from '../images/developments/1.jpg'
import three from '../images/developments/dev1.jpg'
import four from '../images/developments/3.jpg'
import five from '../images/developments/4.jpg'
import {useEffect} from 'react'
import { useMyContext } from "../hooks/useMyContext"


const Developments = () => {

    const {dispatch} = useMyContext()

    useEffect(()=>{
        dispatch({type:'SET_PROJECT', payload: '/projects/developments'})
    },[dispatch])

    return ( 
        <div className="developments">
        <div className="devBox one">
            <div className="one-top">
            <div className="dev-heading">
                <h1>DEVELOPMENTS</h1>
            </div>
            <div className="dev-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita voluptatum repellat facere 
                    magni laboriosam ipsam a. Ratione magnam consectetur iusto perspiciatis. Dolores harum id 
                    similique, illo nesciunt cupiditate expedita enim quaerat.
                </p>
            </div>
            </div>
            <img src={one} alt="jhdj"/>
        </div>
        <div className="devBox two">
            <img src={two} alt="rufyr"/>
            <img src={three} alt="dufh"/>
        </div>
        <div className="devBox three">
            <img src={four} alt="rkjrl"/>
            <img src={five} alt="kfhjlrk"/>
        </div>
    </div>
     );
}
 
export default Developments;