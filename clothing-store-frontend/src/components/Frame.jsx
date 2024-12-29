import './Frame.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Pillar from '../assets/_/Pillar.png'
import '../zindexes.css'

function Frame() {
  return (
    <div className="frame">
      <Navbar />
      <img src={Pillar} alt="Pillar left" className="pillarLeft"></img>
      <img src={Pillar} alt="Pillar right" className="pillarRight"></img>
      <div className="content">
        <div className="primaryContent">
        <h1>Primary</h1>
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