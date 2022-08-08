import { Button } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function BannerItem({ data, isBannerHome, isBannerDonation }) {
    const { id, BannerPicture, title, description, description1, description2 } = data;
    return (
        <div className="BannerHeight relative">
            <div className="h-full w-full ">
                <div className="w-full h-full">
                    <BannerPicture className="h-full w-full object-cover" />
                </div>

                {(isBannerHome && (
                    <motion.div
                        style={{ background: '#33333380', transform: 'translateY(-50%, -50%)' }}
                        className="absolute top-1/2 left-1/2 w-1/2 md:text-white p-5"
                        initial={{ opacity: 0, y: -0, x: -400 }}
                        whileInView={{ opacity: 1, y: -100, x: -400 }}
                        transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                    >
                        <h1 className="md:text-5xl">{title}</h1>
                        <p className="md:text-xl md:mt-4 max-h-20 h-20 break-words whitespace-nowrap truncate ">
                            {description}
                        </p>
                        <Button className="md:mt-5 md:w-1/4 text-white bg-gray-600 md:px-10 md:py-5" variant="text">
                            MORE
                        </Button>
                    </motion.div>
                )) ||
                    (isBannerDonation && id === 1 && (
                        <motion.div
                            style={{ transform: 'translateY( -50%)', left: '20%' }}
                            className="absolute top-1/2 w-7/12 h-2/3 md:text-white p-5"
                        >
                            {/* whitespace-nowrap truncate  */}
                            <motion.h1
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                className="md:text-2xl md:font-semibold"
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3, delay: 1 }}
                                className=" md:text-7xl md:mt-4 md:font-bold max-h-20 h-20 md:break-words"
                            >
                                {description1}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3, delay: 1 }}
                                className=" md:text-7xl md:mt-4 md:font-bold max-h-20 h-20 md:break-words"
                            >
                                {description2}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3, delay: 2 }}
                            >
                                <Button
                                    endIcon={<ArrowCircleRightOutlinedIcon className="text-2xl font-bold" />}
                                    className="md:mt-10 md:w-1/2 w-full md:px-10 md:py-6 text-white bg-orange-600"
                                    variant="text"
                                >
                                    <p className="font-bold text-2xl">How You Can Help</p>
                                </Button>
                            </motion.div>
                        </motion.div>
                    )) ||
                    (isBannerDonation && id === 2 && (
                        <motion.div
                            style={{ transform: 'translateY( -50%)' }}
                            className="absolute top-1/2 right-0 w-1/2 h-2/3 md:text-white"
                        >
                            {/* whitespace-nowrap truncate  */}
                            <motion.h1
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                className="md:text-2xl md:font-semibold"
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3, delay: 1 }}
                                className=" md:text-7xl md:mt-4 md:font-bold max-h-20 h-20 md:break-words"
                            >
                                {description1}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3, delay: 1 }}
                                className=" md:text-7xl md:mt-4 md:font-bold max-h-20 h-20 md:break-words"
                            >
                                {description2}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 100, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3, delay: 2 }}
                            >
                                <Button
                                    endIcon={<ArrowCircleRightOutlinedIcon className="text-2xl" />}
                                    className="md:mt-10 md:w-1/2 w-full md:px-10 md:py-6 text-white bg-orange-600"
                                    variant="text"
                                >
                                    <p className="font-bold text-2xl">How You Can Help</p>
                                </Button>
                            </motion.div>
                        </motion.div>
                    ))}
            </div>
        </div>
    );
}
