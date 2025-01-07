import './Women.css'
import '../zindexes.css'
import statueWoman from '../assets/_/_/_/statueWoman.png'


const products = [
    { src: statueWoman, title: "T-shirt", price: "100 SEK", caption: "Female clothing", key: "0", className:"product1"},
    { src: statueWoman, title: "Dress", price: "200 SEK", caption: "Female clothing", key: "1" , className:"product2"},
    { src: statueWoman, title: "T-shirt", price: "400 SEK", caption: "Female clothing", key: "2", className:"product3" },
    { src: statueWoman, title: "Scarf", price: "100 SEK", caption: "Female clothing", key: "3", className:"product4"}
]

function Women() {
    return (
        <div className="Women">
            <ul className="WomenUl">
                <li className="WomenLi">
                    {products.map((products, index) => (
                        <div className={products.className} key={index}>
                            <img src={products.src} alt={products.caption} />
                            <span className={products.className}>{products.title}</span>
                            <p>{products.price}</p>
                        </div>
                    ))}
                </li>
            </ul>
            <ul className="WomenUl">
                <li className="WomenLi">
                    {products.map((products, index) => (
                        <div className={products.className} key={index}>
                            <img src={products.src} alt={products.caption} />
                            <span className={products.className}>{products.title}</span>
                            <p>{products.price}</p>
                        </div>
                    ))}
                </li>
            </ul>
        </div>
    )
}

export default Women