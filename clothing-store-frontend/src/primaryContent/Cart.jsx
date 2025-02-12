import './Cart.css'
import '../zindexes.css'
import React, { useState, useEffect } from 'react'

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
        <div className="carouselSlide">

            <button className="carouselBtn prev" onClick={goToPrevious}>
                &lt;
            </button>

            <div className="innerDiv">
                <div className="hejText">

                    <h2 className="carouselTextTitle">{images[currentIndex].title}</h2>
                    <span className="carouselTextSpan">{images[currentIndex].content}</span>
                    </div>
                <div className="carouselImg">
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
                </div>

                <span className="carouselCurrent"> {currentIndex + 1} /  {images.length.toString()}</span>

            </div>
            <button className="carouselBtn next" onClick={goToNext}>
                &gt;
            </button>
        </div>
    )
}

export default StartPrimary