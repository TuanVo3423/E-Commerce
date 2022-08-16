import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import BannerItem from './BannerItem';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                marginRight: '80px',
                zIndex: '30',
            }}
            onClick={onClick}
        ></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', marginLeft: '50px', zIndex: '30' }}
            onClick={onClick}
        />
    );
}

export default function CarouselBanner({ data }) {
    const theme = useTheme();
    const isDesktop = !useMediaQuery(theme.breakpoints.down('md'));
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: isDesktop && <SampleNextArrow />,
        prevArrow: isDesktop && <SamplePrevArrow />,
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
