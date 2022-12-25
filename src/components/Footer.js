import '../css/footer.css'
import {Link} from 'react-router-dom'


const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-top">
                <div className="footer-box one">
                    <div className="footerNav">
                        <div style={{textAlign:'center'}}>
                            <Link to='/'>HOME</Link>
                            <Link to='/about'>ABOUT</Link>
                            <Link to='/contact'>CONTACT</Link>
                            <Link to='/projects'>PROJECTS</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-box two">
                    <div className="footerContact">
                        <h4>CONTACT US</h4>
                        <p>073 388 9591</p>
                        <p>mihhud@gmail.com</p>
                    </div>
                </div>
                <div className="footer-box three">
                    <div className="footerAddress">
                        <h4>ADDRESS</h4>
                        <p>109 Longbury drive</p>
                        <p>Rydalvale, Phoenix</p>
                        <p>4068</p>
                    </div>
                </div>
            </div>
            <div className="footer-btm">
                <p>Copyright © 2022 El-Shaddai Interiors</p>
            </div>
        </div>
     );
}
 
export default Footer;