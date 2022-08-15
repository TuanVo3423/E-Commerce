import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

export default function DonationSection({ isAtHome, isAtDonation }) {
    const href1 = useRef(null);
    const href2 = useRef(null);
    const href3 = useRef(null);
    const href4 = useRef(null);
    const href5 = useRef(null);
    const [donationMount, setDonationMount] = useState('');
    const handleChooseMount1 = (e) => {
        setDonationMount(e.target.innerText);
        e.target.style.backgroundColor = 'green';
        href2.current.style.backgroundColor = 'none';
        href3.current.style.backgroundColor = 'none';
        href4.current.style.backgroundColor = 'none';
        href5.current.style.backgroundColor = 'none';
    };
    const handleChooseMount2 = (e) => {
        setDonationMount(e.target.innerText);
        e.target.style.backgroundColor = 'green';
        href1.current.style.backgroundColor = 'none';
        href3.current.style.backgroundColor = 'none';
        href4.current.style.backgroundColor = 'none';
        href5.current.style.backgroundColor = 'none';
    };
    const handleChooseMount3 = (e) => {
        setDonationMount(e.target.innerText);
        e.target.style.backgroundColor = 'green';
        href1.current.style.backgroundColor = 'none';
        href2.current.style.backgroundColor = 'none';
        href4.current.style.backgroundColor = 'none';
        href5.current.style.backgroundColor = 'none';
    };
    const handleChooseMount4 = (e) => {
        setDonationMount(e.target.innerText);
        e.target.style.backgroundColor = 'green';
        href1.current.style.backgroundColor = 'none';
        href3.current.style.backgroundColor = 'none';
        href2.current.style.backgroundColor = 'none';
        href5.current.style.backgroundColor = 'none';
    };
    const handleChooseMount5 = (e) => {
        setDonationMount(e.target.innerText);
        e.target.style.backgroundColor = 'green';
        href1.current.style.backgroundColor = 'none';
        href3.current.style.backgroundColor = 'none';
        href4.current.style.backgroundColor = 'none';
        href2.current.style.backgroundColor = 'none';
    };
    console.log(href1);
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
                                <Button className="bg-black p-4 mt-8" variant="container">
                                    QUYÊN GÓP NGAY
                                </Button>
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
                                        <div
                                            ref={href1}
                                            onClick={handleChooseMount1}
                                            className="w-1/6 py-3  text-black text-lg bg-white hover:bg-green-500 hover:text-white"
                                        >
                                            50K
                                        </div>
                                        <div
                                            ref={href2}
                                            onClick={handleChooseMount2}
                                            className="w-1/6 py-3  text-black text-lg bg-white hover:bg-green-500 hover:text-white"
                                        >
                                            100K
                                        </div>
                                        <div
                                            ref={href3}
                                            onClick={handleChooseMount3}
                                            className="w-1/6 py-3  text-black text-lg bg-white hover:bg-green-500 hover:text-white"
                                        >
                                            200K
                                        </div>
                                        <div
                                            ref={href4}
                                            onClick={handleChooseMount4}
                                            className="w-1/6  py-3 text-black text-lg bg-white hover:bg-green-500 hover:text-white"
                                        >
                                            500K
                                        </div>
                                        <div
                                            ref={href5}
                                            onClick={handleChooseMount5}
                                            className="w-1/6 py-3  text-black text-lg bg-white hover:bg-green-500 hover:text-white"
                                        >
                                            1000K
                                        </div>
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
