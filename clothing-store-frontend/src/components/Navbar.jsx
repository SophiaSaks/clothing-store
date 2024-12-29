import './Navbar.css'
import Logo from '../assets/_/logo.png'
import '../zindexes.css'

function Navbar () {
return(
    <div className='navbar'>
        <div className="categories">
            <ul>
                <li>
                    Women
                </li>
                <li>
                    Men
                </li>
                <li>
                    Unisex
                </li>
            </ul>
        </div>
        <div className="logo">
            <img className="logoImg" src={Logo} alt="logo"></img>
        </div>

    </div>
)
}

export default Navbar