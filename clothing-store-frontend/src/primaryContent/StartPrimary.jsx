import './StartPrimary.css'
import '../zindexes.css'
import Carousel from '../assets/_/_/carouselPicture1.png'
import React, { useState, useEffect } from 'react'
import AboutPicture from '../assets/_/_/aboutPicture.png'
import CoverImage from '../assets/_/coverImage.png'

const images = [
    { src: Carousel, title: "Where modern meets classic", content: "Timeless clothes with a youthful touch. ", alt: "Test" },
    { src: AboutPicture, title: "Embrace the Beauty of the Twentytwenties", content: "A striking balance between minimalism and baroque sophistication for the modern world.", alt: "Test" },
    { src: CoverImage, title: "Classical Beauty, Modern Design", content: "Timeless clothes with a youthful touch. ", alt: "Test" }
]

function StartPrimary() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const autoSlideInterval = 4000

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(goToNext, autoSlideInterval);
        return () => clearInterval(intervalId);
    }, [currentIndex, autoSlideInterval]);

    return (
        <div className="carouselWrapper">
         
            <div className="carouselContainer">

                <div className="carouselSlide">
                    <div className="carouselSlideText">
                        <h2 className="carouselTextTitle">{images[currentIndex].title}</h2>
                        <span class="carouselTextSpan">{images[currentIndex].content}</span>

                    </div>
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} />

                </div>

            </div>
       
            <span className="carouselCurrent"> {currentIndex + 1} /  {images.length.toString()}</span>
            <div>
            <button className="carouselBtn prev" onClick={goToPrevious}>
                --
            </button>
            <button className="carouselBtn next" onClick={goToNext}>
                --
            </button>
            </div>
            
        </div>
    )
}

export default StartPrimary