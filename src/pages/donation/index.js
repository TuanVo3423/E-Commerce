import React from 'react';
import CarouselBanner from '../../components/Banner';
// import MissionSection from '../../components/MissionSection';
import MissionSection2 from './components/MissionSection2';
// import DataDonation from '../../components/DataDonation';
import DonateAction from './components/DonateAction';
import DonationSection from '../../components/Donation';
import { dataDonation } from '../../services';
import { motion } from 'framer-motion';
// import DonateSection from '../../components/DonateSection';

export default function Donation() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
            >
                <CarouselBanner data={dataDonation} isBannerDonation />
            </motion.div>
            <motion.div>
                <MissionSection2 />
            </motion.div>
            <motion.div>
                <DonateAction />
            </motion.div>
            <motion.div>
                <DonationSection isAtDonation />
            </motion.div>
        </div>
    );
}
