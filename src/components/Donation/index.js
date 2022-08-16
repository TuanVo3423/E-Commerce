import React, { useRef, useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
const dataMount = ['50K', '100K', '200K', '500K', '1000K'];

export default function DonationSection({ isAtHome, isAtDonation }) {
    const [donationMount, setDonationMount] = useState();
    const handleChooseMount = (index) => {
        setDonationMount(index);
    };

    return (
        <React.Fragment>
            {(isAtHome && (
                <div
                    className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed text-white"
                    style={{ backgroundImage: `url(https://bwd2022.vercel.app/assets/bg6.jpg)`, height: '500px' }}
                >
                    <div className="w-full h-full flex flex-row items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 200, x: 0 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                            className="text-center mb-10"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 200, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                className="text-5xl font-bold mb-10"
                            >
                                Cùng chung tay quyên góp bảo vệ môi trường
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 200, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                className="text-lg w-3/4 mx-auto"
                            >
                                Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu tranh
                                bảo tồn các nguồn tài nguyên thiên nhiên và chung tay.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 200, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                            >
                                <button className="MoreBtn mt-5">QUYÊN GÓP</button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            )) ||
                (isAtDonation && (
                    <div
                        className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed text-white"
                        style={{ backgroundImage: `url(https://bwd2022.vercel.app/assets/bg7.jpg)`, height: '500px' }}
                    >
                        <div className="w-full h-full flex flex-row items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 200, x: 0 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                className="text-center mb-10"
                            >
                                <motion.p
                                    initial={{ opacity: 0, y: 200, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                    className="text-5xl font-bold mb-10"
                                >
                                    VÌ MỘT MÔI TRƯỜNG XANH SẠCH ĐẸP
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 200, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                    className="text-lg w-3/4 mx-auto mb-4"
                                >
                                    Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu
                                    tranh bảo tồn các nguồn tài nguyên thiên nhiên và chung tay.
                                </motion.p>
                                <motion.div
                                    className="mb-7 flex md:flex-row"
                                    initial={{ opacity: 0, y: 200, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                >
                                    <div className="flex md:flex-row justify-between  p-5 w-3/4 mx-auto">
                                        {dataMount.map((item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() => handleChooseMount(index)}
                                                    className={`w-1/6 py-3 text-black text-lg bg-white hover:bg-green-500 hover:text-white ${
                                                        donationMount === index ? 'isChoosed' : ''
                                                    }`}
                                                >
                                                    {item}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 200, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                >
                                    <Button className="bg-black p-4 mt-8" variant="container">
                                        QUYÊN GÓP NGAY
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                ))}
        </React.Fragment>
    );
}
