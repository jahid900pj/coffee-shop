import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCarousel.css'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { AiFillHeart } from 'react-icons/ai'


const HomeCarousel = () => {
    const colors = [
        { id: 1, src: 'https://storage.googleapis.com/jacksonh/1/JHS_International-2.jpg' },
        { id: 2, src: 'https://www.aamc.org/sites/default/files/Treatment%20at%20MHS_1200x666.jpg' },
        { id: 3, src: 'https://www.evercarebd.com/wp-content/uploads/2022/08/PhotoGhor_067122-1024x683.jpeg' },
        { id: 4, src: 'https://cloudfront-us-east-1.images.arcpublishing.com/pmn/FTAPUQUL2RBQRFCHK6LFQ44NAI.jpg' },
    ];
    const delay = 3500;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? colors.length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= colors.length ? 0 : newIndex);
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                <div className="slide relative">
                    <div className='bg-black absolute h-full w-full bg-opacity-50'>

                    </div>
                    <div className='w-full h-full flex flex-col justify-center items-center absolute'>
                        <h2 className='text-white font-semibold text-2xl xl:text-4xl mb-4'>Welcome to <span className='text-blue-300'>Promise</span> <span className='text-teal-400'>Hospital</span></h2>
                        <h2 className='text-white text-md md:text-lg text-center'>For your best treatment</h2>
                        <h2 className='text-white text-md md:text-lg text-center flex items-center justify-center gap-2'><AiFillHeart className='text-rose-600 font-bold' /> We are beside you forever <AiFillHeart className='text-rose-600 font-bold' /></h2>
                    </div>

                    <div className='w-full h-full flex justify-between items-center absolute'>
                        <h2 className='text-4xl md:text-5xl font-bold rounded-full bg-teal-500 bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white ml-4 md:ml-10 lg:ml-20' onClick={handlePrevious}><MdKeyboardArrowLeft /></h2>
                        <h2 className='text-4xl md:text-5xl font-bold rounded-full bg-teal-500 bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white mr-4 md:mr-10 lg:mr-20' onClick={handleNext}><MdKeyboardArrowRight /></h2>
                    </div>

                    <img src="https://storage.googleapis.com/jacksonh/1/JHS_International-2.jpg" className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover" alt="" srcset="" />
                </div>

                <div className="slide relative">
                    <div className='bg-black absolute h-full w-full bg-opacity-50'>

                    </div>
                    <div className='w-full h-full flex flex-col justify-center items-center absolute'>
                        <h2 className='text-white font-semibold text-xl md:text-2xl xl:text-4xl mb-4'>Get the <span className='text-teal-400'>best treatment</span> in the country</h2>
                        <h2 className='text-white font-semibold text-md md:text-lg text-center'>You can get the most prestigious<br />doctors in our hospital</h2>

                    </div>

                    <div className='w-full h-full flex justify-between items-center absolute'>
                        <h2 className='text-4xl md:text-5xl font-bold rounded-full bg-teal-500 bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white ml-4 md:ml-10 lg:ml-20' onClick={handlePrevious}><MdKeyboardArrowLeft /></h2>
                        <h2 className='text-4xl md:text-5xl font-bold rounded-full bg-teal-500 bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white mr-4 md:mr-10 lg:mr-20' onClick={handleNext}><MdKeyboardArrowRight /></h2>
                    </div>

                    <img src="https://www.aamc.org/sites/default/files/Treatment%20at%20MHS_1200x666.jpg" className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover" alt="" srcset="" />
                </div>

                <div className="slide relative">
                    <div className='bg-black absolute h-full w-full bg-opacity-50'>

                    </div>
                    <div className='w-full h-full flex flex-col justify-center items-center absolute'>
                        <h2 className='text-white font-semibold text-xl md:text-2xl xl:text-4xl mb-4'>Get Support <span className='text-teal-400'>24X7</span> From Support Center</h2>
                        <h2 className='text-blue-300 font-semibold text-md md:text-lg text-center'>Our hospital management team is waiting eagerly<br />to give you any support you need</h2>
                    </div>

                    <div className='w-full h-full flex justify-between items-center absolute'>
                        <h2 className='text-4xl md:text-5xl font-bold rounded-full bg-teal-500 bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white ml-4 md:ml-10 lg:ml-20' onClick={handlePrevious}><MdKeyboardArrowLeft /></h2>
                        <h2 className='text-4xl md:text-5xl font-bold rounded-full bg-teal-500 bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white mr-4 md:mr-10 lg:mr-20' onClick={handleNext}><MdKeyboardArrowRight /></h2>
                    </div>

                    <img src="https://www.evercarebd.com/wp-content/uploads/2022/08/PhotoGhor_067122-1024x683.jpeg" className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover" alt="" srcset="" />
                </div>

                <div className="slide relative">
                    <div className='bg-black absolute h-full w-full bg-opacity-50'>

                    </div>
                    <div className='w-full h-full flex flex-col justify-center items-center absolute'>
                        <h2 className='text-white font-semibold text-xl md:text-2xl xl:text-4xl mb-4'>Emergency Support, At Any <span className='text-teal-400'>Time</span></h2>
                        <h2 className='text-blue-300 font-semibold text-md md:text-lg text-center'>Promise Hospital promises you to give you<br />emergency support any time you need</h2>
                    </div>

                    <div className='w-full h-full flex justify-between items-center absolute'>
                        <h2 className='text-4xl md:text-5xl font-bold rounded-full bg-teal-500 bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white ml-4 md:ml-10 lg:ml-20' onClick={handlePrevious}><MdKeyboardArrowLeft /></h2>
                        <h2 className='text-4xl md:text-5xl font-bold rounded-full bg-teal-500 bg-opacity-30 hover:bg-opacity-100 text-black hover:text-white mr-4 md:mr-10 lg:mr-20' onClick={handleNext}><MdKeyboardArrowRight /></h2>
                    </div>

                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/FTAPUQUL2RBQRFCHK6LFQ44NAI.jpg" className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover" alt="" srcset="" />
                </div>

            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {
                        setIndex(idx);
                    }}></div>
                ))}
            </div>
        </div>
    );
};

export default HomeCarousel;