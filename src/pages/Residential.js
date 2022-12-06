import '../css/residential.css'
import one from '../images/residential/22.jpg'
import two from '../images/residential/222.jpg'
import {useEffect} from 'react'
import { useMyContext } from "../hooks/useMyContext"

const Residential = () => {

    const {dispatch} = useMyContext()

    useEffect(()=>{
        dispatch({type:'SET_PROJECT', payload: '/projects/residential'})
    },[dispatch])

    return ( 
        <div className="residential">
        <div className="left box">
            <div className="left-top">
                <div className="residential-heading">
                    <h1>RESIDENTIAL</h1>
                </div>
                <div className="residential-para">
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ab quo sit perferendis. Esse voluptas 
                            modi vero. Delectus et sapiente magnam, nam tempora voluptates aliquam, dolorum rerum dicta ratione, 
                            iure quidem sit vel ut vitae tenetur qui. Reprehenderit quasi dolorem harum, quod ratione, molestiae 
                            ducimus, consequatur ipsam suscipit atque voluptates.</p>
                    </div>
                </div>
            </div>
            <div className="left-btm">
                <img src={one} alt="jh"/>
                <img src={two} alt="huhu"/>
            </div>
        </div>
        <div className="right box">
        </div>
    </div>
     );
}
 
export default Residential;