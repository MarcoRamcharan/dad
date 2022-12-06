import '../css/contact.css'
import { useEffect } from 'react'


const Contact = () => { 

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(()=>{
        scrollToTop()
    },[])


    return ( 
        <div className="contact">
            <div className="contact-box-one">
                <div>
                <h1>HOW CAN WE HELP YOU</h1>
                <p>Contact Us today for all your Interior design and Cabinet needs. With over 20 years<br></br>
                     experience in the game, we provide great input and insite to our clients.<br></br>
                     We look foward to you creating a relationship with you.
                </p>
                </div>
            </div>
            <div className="contact-box-two">
                <div className="contact-body">
                <h1>GET IN TOUCH WITH US</h1>
                    <div className="contact-box">
                        <div className="contact-group">
                            <div className="group">
                                <span style={{color:''}} className='icon'><i class="fa-solid fa-user-tie"></i></span>
                                <p>SANJEEV</p>
                            </div>
                            <div className="group">
                                <span style={{color:'purple'}} className='icon'><i className="fa-solid fa-phone"></i></span>
                                <p>073 388 9591</p>
                            </div>
                            <div className="group">
                                <span style={{color:'red'}} className='icon'><i className="fa-solid fa-envelope"></i></span>
                                <p>el-shaddai@gmail.com</p>
                            </div>
                            <div className="group">
                                <span style={{color:'green'}} className='icon'><i className="fa-brands fa-whatsapp"></i></span>
                                <p>073 388 95951</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-box">

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;