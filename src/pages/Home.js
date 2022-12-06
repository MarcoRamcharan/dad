import '../css/home.css'
import Banner from '../components/Banner'
import About from '../components/About'
import Projects from '../components/Projects'

const Home = () => {
    return ( 
        <div className="home">
            <Banner/>
            <Projects/>
            <About/>
        </div>
     );
}
 
export default Home;