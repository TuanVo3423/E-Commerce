import React, { Component } from 'react';
import Slider from 'react-slick';
import Banner from './BannerItem';
import { useTheme } from '@mui/system';
import { Button, useMediaQuery } from '@mui/material';
import BannerItem from './BannerItem';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', marginRight: '80px', zIndex: '30' }}
            onClick={onClick}
        />
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

export default function CarouselBanner() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: !isMobile && <SampleNextArrow />,
        prevArrow: !isMobile && <SamplePrevArrow />,
    };

    return (
        <div>
            <Slider {...settings}>
                <BannerItem />
                <BannerItem />
                <BannerItem />
            </Slider>
        </div>
    );
}
