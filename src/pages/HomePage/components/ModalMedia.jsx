import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import Rectangle430 from '../../../assets/images/Rectangle430.png'
import Rectangle431 from '../../../assets/images/Rectangle431.png'
import Rectangle432 from '../../../assets/images/Rectangle432.png'
import Rectangle433 from '../../../assets/images/Rectangle433.png'
import Rectangle435 from '../../../assets/images/Rectangle435.png'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ModalMedia = ({ show, handleClose }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    }, [setNav1, setNav2, slider1, slider2]);

    const [isHoverNext, setHoverNext] = useState(false);
    const [isHoverPrev, setHoverPrev] = useState(false);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        nextArrow: (
            <div onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}>
                <div className={isHoverNext ? "next-slick-arrow hover" : 'next-slick-arrow'}></div>
            </div>
        ),
        prevArrow: (
            <div onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}>
                <div className={isHoverPrev ? "prev-slick-arrow hover" : 'prev-slick-arrow'}></div>
            </div>
        ),
        fade: false,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        infinite: false,
        nextArrow: (
            <div onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}>
                <div className={isHoverNext ? "next-slick-arrow hover" : 'next-slick-arrow'}></div>
            </div>
        ),
        prevArrow: (
            <div onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}>
                <div className={isHoverPrev ? "prev-slick-arrow hover" : 'prev-slick-arrow'}></div>
            </div>
        ),
        centerMode: false,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    };

    const slidesData = [
        {
            id: 1,
            img: Rectangle430,
        }, {
            id: 2,
            img: Rectangle431,
        }, {
            id: 3,
            img: Rectangle432,
        }, {
            id: 4,
            img: Rectangle433,
        }, {
            id: 5,
            img: Rectangle435,
        }, {
            id: 6,
            img: Rectangle432,
        }, {
            id: 7,
            img: Rectangle433,
        }, {
            id: 8,
            img: Rectangle435,
        },
    ];

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <div className="slider-wrapper">
                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={slider => (setSlider1(slider))}
                >
                    {slidesData.map((slide) =>
                        <div className="slick-slide" key={slide.id}>
                            <img className="slick-slide-image image-big" src={slide.img} />
                        </div>
                    )}
                </Slider>
                <div className="thumbnail-slider-wrap">
                    <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={slider => (setSlider2(slider))}>
                        {slidesData.map((slide) =>
                            <div className="slick-slide" key={slide.id}>
                                <img className="slick-slide-image" src={slide.img} />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </Modal>
    )
}

export default ModalMedia
