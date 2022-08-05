import React from 'react';
import CarouselBanner from '../../Carousel';
import Slider from '../../Slider';

export default function Home() {
    return (
        // Khung cua Carousel
        <React.Fragment>
            <div className="w-full">
                <CarouselBanner />
            </div>
            <div className="w-full h-full">
                <Slider />
            </div>
        </React.Fragment>
    );
}
