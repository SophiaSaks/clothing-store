import './Navbar.css'
import Logo from '../assets/_/logo.png'
import '../zindexes.css'
import searchIcon from '../assets/_/searchicon.svg'
import shoppingBasket from '../assets/_/shoppingBasket.svg'
import women from '../assets/_/female.svg'
import men from '../assets/_/men.svg'
import unisex from '../assets/_/Union.svg'

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <img className="genderLogo" src={women}></img>
                    Women
                </li>
                <li>
                    <img className="genderLogo" src={men}></img>
                    Men
                </li>
                <li>
                    <img className="genderLogo" src={unisex}></img>
                    Unisex
                </li>
            </ul>
            <div className="logo">
                <img className="logoImg" src={Logo} alt="logo"></img>
            </div>
            <form className="searchBar">
                <input type="text" placeholder="Search here..."></input>
                <button className="searchButton">
                    <img src={searchIcon}></img>
                </button>
            </form>
            <div className="cart">
                <img src={shoppingBasket}></img>
                <span>Cart</span>
                <span className="cartNumber">12</span>
            </div>

        </div>
    )
}

export default Navbar