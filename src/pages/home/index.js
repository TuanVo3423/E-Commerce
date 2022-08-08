import React from 'react';
import CarouselBanner from '../../components/Banner';
import Slider from '../../components/Slider';
import FeaturedProducts from '../../components/FeaturedProducts';
import CommonProduct from '../../components/CommonProducts';
import DonateHome from '../../components/DonateHome';
import { Banner_1, Banner_2 } from '../../assets/Image';

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

export default function Home() {
    return (
        // Khung cua Carousel
        <React.Fragment>
            <div>
                <CarouselBanner data={data} isBannerHome />
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
