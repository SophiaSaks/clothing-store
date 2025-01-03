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
                <li className="navbarLi">
                <a href="/women">
                    <img className="genderLogo" src={women}></img>
                    Women
                    </a>
                </li>
                <li className="navbarLi">
                    <a href="/men">
                        <img className="genderLogo" src={men}></img>
                        Men
                    </a>
                </li>
                <li className="navbarLi">
                    <a href="/unisex">
                        <img className="genderLogo" src={unisex}></img>
                        Unisex
                    </a>
                </li>
            </ul>
            <a href="/">
                <div className="logo">
                    <img className="logoImg" src={Logo} alt="logo"></img>
                </div>
            </a>
            <form className="searchBar">
                <input type="text" placeholder="Search here..."></input>
                <button className="searchButton">
                    <img src={searchIcon}></img>
                </button>
            </form>
            <div className="cart">
                <img src={shoppingBasket}></img>
                <span>Cart</span>
                <span className="cartNumber">120</span>
            </div>

        </div>
    )
}

export default Navbar