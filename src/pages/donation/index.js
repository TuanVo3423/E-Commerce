import React from 'react';
import CarouselBanner from '../../components/Banner';
import MissionSection2 from './components/MissionSection2';
import DonateAction from './components/DonateAction';
import DonationSection from '../../components/Donation';
import { dataDonation } from '../../services';

export default function Donation() {
    return (
        <div>
            <div>
                <CarouselBanner data={dataDonation} isBannerDonation />
            </div>
            <div>
                <MissionSection2 />
            </div>
            <div>
                <DonateAction />
            </div>
            <div>
                <DonationSection isAtDonation />
            </div>
        </div>
    );
}
