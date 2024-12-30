import './Navbar.css'
import Logo from '../assets/_/logo.png'
import '../zindexes.css'

function Navbar () {
return(
    <div className='navbar'>
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
        <div className="logo">
            <img className="logoImg" src={Logo} alt="logo"></img>
        </div>
        <form className="searchBar">
            <label>Search</label>
            <input type="text" placeholder="search here..."></input>
            <button>Search</button>
        </form>
        <div className="cart">
            <span>Cart</span>
        </div>

    </div>
)
}

export default Navbar