import { Button } from '@mui/material';
import React from 'react';

export default function BannerItem({ data }) {
    const { BannerPicture, title, description } = data;
    return (
        <div className="BannerHeight relative">
            <div className="h-full w-full ">
                <div className="w-full h-full">
                    <BannerPicture className="h-full w-full object-cover" />
                </div>
                <div
                    style={{ background: '#33333380', transform: 'translate(-50%, -50%)' }}
                    className="absolute top-1/2 left-1/2 w-1/2 md:text-white p-5"
                >
                    <h1 className="md:text-5xl">{title}</h1>
                    <p className="md:text-xl md:mt-4 max-h-20 h-20 break-words whitespace-nowrap truncate ">
                        {description}
                    </p>
                    <Button className="md:mt-5 md:w-1/4 text-white bg-gray-600 md:px-10 md:py-5" variant="text">
                        MORE
                    </Button>
                </div>
            </div>
        </div>
    );
}
