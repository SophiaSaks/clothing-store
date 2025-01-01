import './Footer.css'
import '../zindexes.css'


function Footer() {
    return (
        <div className='footer'>
            <div className='madeBy'>
                <span>
                    Made by Sophia Saks 2024
                </span>
                <span>
                    All pictures are from Unsplash.com
                </span>
            </div>
            <a href="/about">
                <div className='aboutUs'>
                    <span>About us</span>
                </div>
            </a>
        </div>
    )
}

export default Footer