import React from 'react';
import Slider from 'react-slick';
import SliderItem from './SliderItem';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', marginRight: '20px', zIndex: '30' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', marginLeft: '20px', zIndex: '30' }}
            onClick={onClick}
        />
    );
}

export default function SlideProducts() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // mobileFirst: true,
        // fade: true,
        // slide: '> div',
        // cssEase: 'linear',
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className=" h-full p-20 pt-12 slideProducts">
            <div className="text-center mb-10">
                <p className="font-bold text-2xl mb-3">NEW PRODUCTS</p>
                <p>NEW PRODUCTS WILL BE UPDATED HERE</p>
            </div>
            <div className="relative w-full h-full">
                <Slider {...settings}>
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                </Slider>
            </div>
        </div>
    );
}
