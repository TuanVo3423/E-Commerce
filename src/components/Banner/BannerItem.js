import React from 'react';
import { motion } from 'framer-motion';

export default function BannerItem({ data }) {
    const { BannerPicture, title, description } = data;
    return (
        <div className="BannerHeight relative">
            <div className="h-full w-full ">
                <div className="w-full h-full">
                    <BannerPicture className="h-full w-full object-cover" />
                </div>
            </div>
            <div className=" absolute w-full h-full top-0 left-0 my-auto m-auto flex">
                <motion.div
                    style={{ background: '#33333380', minHeight: '400px' }}
                    className=" w-3/4  m-auto text-white p-5 py-4 px-8"
                    initial={{ opacity: 0, y: 200, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                >
                    <h1 className="md:text-5xl md:py-5 text-3xl font-bold text-white">{title}</h1>
                    <p className="md:text-xl py-5 md:mt-4 mt-2 md:whitespace-pre-wrap break-words ">{description}</p>
                    <button className="md:mt-20 MoreBtn" variant="text">
                        TÌM HIỂU THÊM
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
