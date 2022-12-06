import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MainLayout from './components/MainLayout'
import ProjectsLayout from './components/ProjectsLayout'
import Estates from './pages/Estates'
import Developments from './pages/Developments'
import Residential from './pages/Residential'
import Hotels from './pages/Hotels'
import Gallery from './pages/Gallery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='gallery' element={<Gallery/>}/>
        </Route>
        <Route path='/projects/' element={<ProjectsLayout/>}>
          <Route index element={<Estates/>}/>
          <Route path='estates' element={<Estates/>}/>
          <Route path='developments' element={<Developments/>}/>
          <Route path='residential' element={<Residential/>}/>
          <Route path='hotels' element={<Hotels/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
