import './About.css'
import '../zindexes.css'
import aboutPicture from '../assets/_/_/aboutPicture.png'


function About() {
    return (
        <div className="aboutMain">
            <div className='about'>
                <h1 className='aboutTitle'> About us</h1>
                <h4>A baroque simplicity</h4>
                <p className="aboutParagraph">Taking a lot of inspiration from the classical beauty of historical architecture, this clothing brand is a mix of modern, minimalistic Scandinavian design with some dramatic baroque touches.</p>
                <h4>How to pronounce MMXX's?</h4>
                <p className="aboutParagraph">It's simply pronouced "twentytwenties".</p>
            </div>
            <div className="aboutPicture">
                <img src={aboutPicture} alt="Graphical image of a woman and the brand logo"></img>
            </div>
        </div>
    )
}

export default About