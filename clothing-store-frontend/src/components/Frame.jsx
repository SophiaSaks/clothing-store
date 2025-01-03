import './Frame.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Pillar from '../assets/_/Pillar.png'
import '../zindexes.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About'
import StartPrimary from './StartPrimary'
import AboutSecondary from './AboutSecondary'
import EmptyPage from './EmptyPage'
import Women from './Women'


function Frame() {
  return (
    <div className="frame">
      <Navbar />
      <img src={Pillar} alt="Pillar left" className="pillarLeft"></img>
      <img src={Pillar} alt="Pillar right" className="pillarRight"></img>
      <div className="pillarBackgroundDiv">

      <img src={Pillar} className="pillarBackground1"></img>
      <img src={Pillar} className="pillarBackground2"></img>
      <img src={Pillar} className="pillarBackground3"></img>
      </div>
      <div className="content">

        <div className="primaryContent">
          <Switch>
            <Route path="/about" exact component={About}>
            </Route>
            <Route path="/" exact component={StartPrimary}>
            </Route>

            <Route path="/women" exact component={Women}>
            </Route>
            <Route path="/men" exact component={EmptyPage}>
            </Route>
            <Route path="/unisex" exact component={EmptyPage}>
            </Route>
          </Switch>
        </div>
        <div className="secondaryContent">
          <Route path="/about">
            <AboutSecondary></AboutSecondary>
          </Route>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Frame;