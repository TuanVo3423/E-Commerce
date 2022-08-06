import React from 'react';
import CarouselBanner from '../../components/Banner';
import Slider from '../../components/Slider';
import FeaturedProducts from '../../components/FeaturedProducts';
import CommonProduct from '../../components/CommonProducts';
import DonateHome from '../../components/DonateHome';

export default function Home() {
    return (
        // Khung cua Carousel
        <React.Fragment>
            <div>
                <CarouselBanner />
            </div>
            <div className="w-full h-full">
                <Slider />
            </div>
            <div>
                <FeaturedProducts />
            </div>
            <div className="w-full h-full">
                <CommonProduct />
            </div>
            <div className="w-full h-full">
                <DonateHome />
            </div>
        </React.Fragment>
    );
}
