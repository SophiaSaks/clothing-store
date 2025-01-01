import './Frame.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Pillar from '../assets/_/Pillar.png'
import '../zindexes.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About'
import Carousel  from './Carousel'


function Frame() {
  return (
    <div className="frame">
      <Navbar />
      <img src={Pillar} alt="Pillar left" className="pillarLeft"></img>
      <img src={Pillar} alt="Pillar right" className="pillarRight"></img>
      <div className="content">
        <div className="primaryContent">
          <Switch>
            <Route path="/about">
            <About></About>
            </Route>
            <Route path="/">
            <Carousel></Carousel>
            </Route>
          </Switch>
        </div>
        <div className="secondaryContent">
        <h1>Secondary</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Frame;