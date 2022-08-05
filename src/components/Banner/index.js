import React, { Component } from 'react';
import Slider from 'react-slick';
import Banner from './BannerItem';
import { useTheme } from '@mui/system';
import { Button, useMediaQuery } from '@mui/material';
import BannerItem from './BannerItem';
import { Banner_1, Banner_2 } from '../../assets/Image';

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
    const data = [
        {
            id: 1,
            title: 'Save The Environment',
            BannerPicture: Banner_1,
            description:
                'We need to start changing the world today, not tomorrow. We need to take action and stop complaining about the bad things currently',
        },
        {
            id: 2,
            title: 'Use eco-friendly products',
            BannerPicture: Banner_2,
            description:
                'Are you trying to be green and eco-friendly, but do not know how you can save the environment is resources? Please reuse recyclable waste',
        },
    ];
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
                {data.map((item) => (
                    <BannerItem key={item.id} data={item} />
                ))}
            </Slider>
        </div>
    );
}
