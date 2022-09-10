import React from 'react';
import Slider from 'react-slick';
import { PrevIconBanner, NextIconBanner } from '../../assets/Image';
import BannerItem from './BannerItem';
import { useViewport } from '../../hooks/useViewPort';

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`absolute top-1/2 cursor-pointer text-white text-7xl opacity-50 hover:opacity-100 block left-4 z-30`}
            style={{
                ...style,
                borderRadius: '50%',
                transition: 'all .25s ease',
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <PrevIconBanner />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`absolute top-1/2 cursor-pointer text-white text-7xl opacity-50 hover:opacity-100 block right-4 z-30`}
            style={{
                ...style,
                borderRadius: '50%',
                transition: 'all .25s ease',
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <NextIconBanner />
        </div>
    );
}

export default function CarouselBanner({ data }) {
    const { isDesktop } = useViewport();
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: isDesktop && <SamplePrevArrow />,
        prevArrow: isDesktop && <SampleNextArrow />,
    };
    // false

    return (
        <div>
            <Slider {...settings}>
                {data.map((item) => (
                    <BannerItem key={item.id} data={item} />
                ))}
            </Slider>
        </div>
    );
}
