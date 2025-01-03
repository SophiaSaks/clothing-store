import './StartPrimary.css'
import '../zindexes.css'
import Carousel from '../assets/_/_/carouselPicture1.png'
import React, {useState} from 'react'
import AboutPicture from '../assets/_/_/aboutPicture.png'

const images = [
    {src: Carousel, title:"Where modern meets classic", content:"Timeless clothes with a youthful touch. " },
    {src: AboutPicture, title:"Test", content:"Test " },
    {src: AboutPicture, title:"Another Test", content:"Another Test " }
]

function StartPrimary () {
  
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
return(
    <div className="carousel">
    {/* Slide Wrapper */}
    <div
        className="carousel-slides"
        style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
        }}
    >
        {images.map((image, index) => (
            <div className="carousel-slide" key={index}>
                <img src={image.src} alt={image.caption} />
                <span>{image.title}</span>
                <p>{image.content}</p>
            </div>
        ))}
    </div>

    {/* Navigation Buttons */}
    <button onClick={goToPrevious} className="carousel-button prev">❮</button>
    <button onClick={goToNext} className="carousel-button next">❯</button>
</div>
)
}

export default StartPrimary