import React from 'react';
import CarouselBanner from '../../components/Banner';
import { BannerDonate_1, sliderDonate_2 } from '../../assets/Image';
const data = [
    {
        id: 1,
        title: 'Nature Foundation',
        BannerPicture: BannerDonate_1,
        description1: 'Give a little.',
        description2: 'Change a lot.',
    },
    {
        id: 2,
        title: 'Community Foundation',
        BannerPicture: sliderDonate_2,
        description1: 'Why work for',
        description2: 'a Charity',
    },
];

export default function Donation() {
    return (
        <div>
            <div>
                <CarouselBanner data={data} isBannerDonation />
            </div>
        </div>
    );
}
