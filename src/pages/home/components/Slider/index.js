import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { inViewDropupShow } from '../../../../utils/types';
import { RiceStraws } from '../../../../assets/Image';
import ProductItem from '../../../../components/ProductsAtHome/ProductItem';
import { PrevIcon } from '../../../../assets/Image';
import { NextvIcon } from '../../../../assets/Image';
import { useViewport } from '../../../../hooks/useViewPort';

const data = [
    {
        id: 1,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'Mới',
        type: 'NEW',
    },
    {
        id: 2,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '1000',
        tag: 'Mới',
        type: 'NEW',
    },
    {
        id: 3,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '7000',
        tag: 'Mới',
        type: 'NEW',
    },
    {
        id: 4,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'Mới',
        type: 'NEW',
    },
    {
        id: 5,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'Mới',
        type: 'NEW',
    },
    {
        id: 6,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'Mới',
        type: 'NEW',
    },
    {
        id: 7,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'Mới',
        type: 'NEW',
    },
    {
        id: 8,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'Mới',
        type: 'NEW',
    },
];
function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`absolute top-1/2 ${
                props.isDesktop ? '-left-14' : 'left-0'
            } bg-white hover:border-gray-500 hover:border cursor-pointer text-black block mr-0 z-30`}
            style={{
                ...style,
                borderRadius: '50%',
                transition: 'all .25s ease',
                boxShadow: '#00000040 0 0 24px',
                fontSize: '44px',
                transform: 'translateY(-50%)',
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
            className={`absolute top-1/2 ${
                props.isDesktop ? '-right-14' : 'right-0'
            }  bg-white hover:border-gray-500 hover:border cursor-pointer text-black block mr-0 z-30`}
            style={{
                ...style,
                borderRadius: '50%',
                color: 'black',
                transition: 'all .25s ease',
                boxShadow: '#00000040 0 0 24px',
                fontSize: '44px',
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <NextvIcon />
        </div>
    );
}

export default function SlideProducts() {
    const { isDesktop } = useViewport();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        nextArrow: <SamplePrevArrow isDesktop={isDesktop} />,
        prevArrow: <SampleNextArrow isDesktop={isDesktop} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <div className="lg:p-11 md:p-12 p-10 slideProducts">
            <div className="text-center mb-5">
                <p className="font-bold text-2xl mb-3">SẢN PHẨM MỚI</p>
                <div className="w-full h-1 flex flex-row justify-center">
                    <svg className="h-1 w-32 text-green-600" fill="currentColor">
                        <rect width="100%" height="100%"></rect>
                    </svg>
                </div>
                <p className="mt-2">Những sản phẩm mới sẽ luôn được cập nhật ở đây</p>
            </div>
            <motion.div
                    variants={inViewDropupShow}
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ once: true }}
                className="relative w-full h-full lg:py-5 lg:px-12 md:p-0"
            >
                <Slider {...settings}>
                    {data.map((item) => (
                        <ProductItem key={item.id} data={item} isAtHome />
                    ))}
                </Slider>
            </motion.div>
        </div>
    );
}
