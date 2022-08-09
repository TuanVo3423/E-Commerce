import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

export default function DonateHome() {
    // initial={{ opacity: 0, y: -0, x: -400 }}
    //                     whileInView={{ opacity: 1, y: -100, x: -400 }}
    //                     transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
    return (
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
                        Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu tranh bảo tồn
                        các nguồn tài nguyên thiên nhiên và chung tay.
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
    );
}
