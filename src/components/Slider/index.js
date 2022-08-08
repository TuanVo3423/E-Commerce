import React from 'react';
import Slider from 'react-slick';
import { RiceStraws } from '../../assets/Image';
import ProductItem from '../ProductsAtHome/ProductItem';
import { PrevIcon } from '../../assets/Image';
import { NextvIcon } from '../../assets/Image';

const data = [
    {
        id: 1,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 2,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '1000',
        tag: 'NEW',
    },
    {
        id: 3,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '7000',
        tag: 'NEW',
    },
    {
        id: 4,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 5,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 6,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 7,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 8,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
];
function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{
                ...style,
                position: 'absolute',
                borderRadius: '50%',
                top: '50%',
                left: '-4%',
                background: '#fff',
                color: 'black',
                transition: 'all .25s ease',
                boxShadow: '#00000040 0 0 24px',
                fontSize: '44px',
                transform: 'translateY(-50%)',
                display: 'block',
                marginRight: '0',
                zIndex: '30',
            }}
            onClick={onClick}
        >
            <PrevIcon />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{
                ...style,
                position: 'absolute',
                borderRadius: '50%',
                top: '50%',
                right: '-3%',
                background: '#fff',
                color: 'black',
                transition: 'all .25s ease',
                boxShadow: '#00000040 0 0 24px',
                fontSize: '44px',
                transform: 'translateY(-50%)',
                display: 'block',
                marginRight: '0',
                zIndex: '30',
            }}
            onClick={onClick}
        >
            <NextvIcon />
        </div>
    );
}

export default function SlideProducts() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        variableWidth: true,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
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
                    initialSlide: 1,
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
        <div className=" p-6 md:p-20 md:pt-12 slideProducts">
            <div className="text-center mb-10">
                <p className="font-bold text-2xl mb-3">NEW PRODUCTS</p>
                <p>NEW PRODUCTS WILL BE UPDATED HERE</p>
            </div>
            <div className="relative w-full h-full">
                <Slider {...settings}>
                    {data.map((item) => (
                        <ProductItem key={item.id} data={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
