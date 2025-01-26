import './Women.css'
import '../zindexes.css'
import statueWoman from '../assets/_/_/_/statueWoman.png'


const products = [
    { src: statueWoman, title: "Tshirt", price: "100 SEK", caption: "Female clothing", key: "0", className:"product"},
    { src: statueWoman, title: "Dress", price: "200 SEK", caption: "Female clothing", key: "1" , className:"product"},
    { src: statueWoman, title: "Tshirt", price: "400 SEK", caption: "Female clothing", key: "2", className:"product" },
    { src: statueWoman, title: "dress", price: "100 SEK", caption: "Female clothing", key: "3", className:"product"},
    { src: statueWoman, title: "Tshirt", price: "100 SEK", caption: "Female clothing", key: "0", className:"product"},
    { src: statueWoman, title: "Dress", price: "200 SEK", caption: "Female clothing", key: "1" , className:"product"},
    { src: statueWoman, title: "Tshirt", price: "400 SEK", caption: "Female clothing", key: "2", className:"product" },
    { src: statueWoman, title: "dress", price: "100 SEK", caption: "Female clothing", key: "3", className:"product"}

]

function Women() {
    return (
        <div className="Women">
            <ul className="WomenUl">
                <li className="WomenLi">
                    {products.map((products, index) => (
                        <div className={products.className} key={index}>
                            <img src={products.src} alt={products.caption} />
                            <div className="products-info"> 
                            <span className={products.className}>{products.title}</span>
                            <p>{products.price}</p>
                            </div>
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default Women