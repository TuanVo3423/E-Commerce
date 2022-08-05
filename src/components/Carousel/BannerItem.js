import { Button } from '@mui/material';
import React from 'react';

export default function Carousel2() {
    return (
        <div className="BannerHeight relative">
            <div className="h-full w-full ">
                <div className="w-full h-full">
                    <img
                        className="object-cover h-full w-full"
                        src="https://tuanvo3423.github.io/LAVIE-e-commerce/assets/img/banner-2.jpeg"
                        alt="banner"
                    ></img>
                </div>
                <div
                    style={{ background: '#33333380' }}
                    className="absolute top-1/2 left-1/2 w-1/2 test  md:text-white p-5"
                >
                    <h1 className="md:text-5xl">Use eco-friendly products</h1>
                    <p className="md:text-xl md:mt-4 max-h-20 h-20  break-words whitespace-nowrap truncate ">
                        Are you trying to be green and eco-friendly, but don't know how you can save the environment's
                        resources? Please reuse recyclable waste.
                    </p>
                    <Button className="md:mt-5 md:w-1/4 text-white bg-gray-600 md:px-10 md:py-5" variant="text">
                        MORE
                    </Button>
                </div>
            </div>
        </div>
    );
}
