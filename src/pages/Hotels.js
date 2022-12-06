import '../css/hotels.css'
import one from '../images/hotels/vv.jpg'
import two from '../images/hotels/tt.jpg'
import three from '../images/hotels/cc.jpg'
import {useEffect} from 'react'
import { useMyContext } from "../hooks/useMyContext"


const Hotels = () => {

    const {dispatch} = useMyContext()

    useEffect(()=>{
        dispatch({type:'SET_PROJECT', payload: '/projects/hotels'})
    },[dispatch])

    return ( 
        <div className="hotels">
        <div className="hotels-left">
            <img src={one} alt="bgjkhlk"/>
        </div>
        <div className="hotels-right">
            <div className="right-top">
                <div className="hotel-heading">
                    <h1>HOTELS</h1>
                </div>
                    <div className="hotel-para">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem assumenda perspiciatis 
                            tempora quis asperiores totam perferendis impedit voluptates itaque optio eligendi ex
                            nam dolor aut autem labore facilis, non dolorum. Accusamus in quasi quibusdam delectus 
                            soluta perferendis harum unde velit. 
                        </p>
                </div>
            </div>
            <div className="right-btm">
                <img src={two} alt="jwfb"/>
                <img src={three} alt="hwrj"/>
            </div>
        </div>
    </div>
     );
}
 
export default Hotels;