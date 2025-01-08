import './Frame.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Pillar from '../assets/_/Pillar.png'
import '../zindexes.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from '../primaryContent/About'
import StartPrimary from '../primaryContent/StartPrimary'
import AboutSecondary from '../secondaryContent/AboutSecondary'
import EmptyPage from './EmptyPage'
import Women from '../primaryContent/Women'


function Frame() {
  return (
    <div className="frame">
      <Navbar />
      <img src={Pillar} alt="Pillar left" className="pillarLeft"></img>
      <img src={Pillar} alt="Pillar right" className="pillarRight"></img>
      <div className="pillarBackgroundDiv">

        <img src={Pillar} alt="background pillar" className="pillarBackground1"></img>
        <img src={Pillar} alt="background pillar" className="pillarBackground2"></img>
        <img src={Pillar} alt="background pillar" className="pillarBackground3"></img>
      </div>
      <div className="content">

        <div className="primaryContent">
          <Routes>
            <Route path="/about" exact Component={About}>
            </Route>
            <Route path="/" exact Component={StartPrimary}>
            </Route>
            <Route path="/women" exact Component={Women}>
            </Route>
            <Route path="/men" exact Component={EmptyPage}>
            </Route>
            <Route path="/unisex" exact Component={EmptyPage}>
            </Route>
          </Routes>
        </div>
        <div className="secondaryContent">
          <Routes>
            <Route path="/about" exact Component={AboutSecondary}>
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Frame;