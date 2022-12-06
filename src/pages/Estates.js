import '../css/estates.css'
import one from '../images/estates/4.jpg'
import two from '../images/estates/2.jpg'
import three from '../images/estates/estate10.png'
import four from '../images/estates/estate1.jpg'
import five from '../images/estates/estate2.jpg'
import six from '../images/estates/estate8.jpg'
import {useEffect} from 'react'
import { useMyContext } from "../hooks/useMyContext"

const Estates = () => {

    const {dispatch} = useMyContext()

    useEffect(()=>{
        dispatch({type:'SET_PROJECT', payload: '/projects/estates'})
    },[dispatch])


    return ( 
        <div className="estates">
        <div className="estate-block one">
            <img src={one} alt="rfrr"/>
            <div className="estate-info">
                <div className="estate-heading">
                    <h1>ESTATE WORK</h1>
                </div>
                <div className="estate-para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi provident aut ad nesciunt non 
                        repellat soluta, id minus ratione repellendus consectetur nemo reiciendis laudantium at, dicta
                        est molestias quam! Obcaecati, similique fugiat. Expedita dolorum nisi possimus et ex praesentium
                        placeat!</p>
                </div>
            </div>
        </div>
        <div className="estate-block two">
            <div className="images-top">
                <img src={two} alt="jkefkj"/>
                <img src={three} alt="jfh"/>
            </div>
            <img src={four} alt="djkjf"/>
        </div>
        <div className="estate-block three">
            <img className="image-top" src={five} alt="kjhf"/>
            <img className="image-btm" src={six} alt="kjsf"/>
        </div>
    </div>
     );
}
 
export default Estates;