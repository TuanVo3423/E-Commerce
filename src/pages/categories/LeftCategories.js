import React from 'react';
import { useViewport } from '../../hooks/useViewPort';
import { motion } from 'framer-motion';
import { filterTypeVariants } from '../../utils/types';
import './index.css';

export default function LeftCategories() {
    const { isDesktop } = useViewport();
    const [openFilterByCategories, setOpenFilterByCategories] = React.useState(true);
    const handleOpenFilterByCategories = () => {
        setOpenFilterByCategories(!openFilterByCategories);
    };
    return (
        <div className={`${isDesktop ? 'boderRight' : ''} h-full md:mr-4 lg:px-9  md:p-0 pr-4`}>
            <h3 className="font-semibold mb-6 text-2xl">Phân loại</h3>
            {/* fill by categories */}
            <div style={{ borderBottom: '1px solid rgb(238, 238, 238)' }} className="mb-3">
                {/* title */}
                <p className="leading-8 flex items-center justify-between cursor-pointer font-semibold mb-2">
                    <span>Loại</span>
                    {openFilterByCategories ? (
                        <svg
                            onClick={handleOpenFilterByCategories}
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                                x1="40"
                                y1="128"
                                x2="216"
                                y2="128"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></line>
                        </svg>
                    ) : (
                        <svg
                            onClick={handleOpenFilterByCategories}
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                        >
                            <rect width="256" height="256" fill="none"></rect>
                            <polyline
                                points="208 96 128 176 48 96"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="16"
                            ></polyline>
                        </svg>
                    )}
                </p>
                {/* dropdown */}
                <motion.div
                    variants={filterTypeVariants}
                    initial={false}
                    animate={openFilterByCategories ? 'visible' : 'hidden'}
                    style={{ overflow: 'hidden' }}
                    className={` ${openFilterByCategories ? 'h-auto' : 'h-0'} overflow-hidden `}
                >
                    <ul style={{ transition: 'all .4s ease' }} className="flex flex-col flex-wrap ">
                        <li className="bg-white text-gray-500 w-full text-sm flex my-2 items-center ">
                            <input type={'checkbox'} className="checkboxInput mr-3 cursor-pointer"></input>
                            <label className="cursor-pointer ">Vải</label>
                        </li>
                        <li className="bg-white text-gray-500 w-full text-sm flex my-2 items-center ">
                            <input type={'checkbox'} className="checkboxInput mr-3 cursor-pointer"></input>
                            <label className="cursor-pointer ">Vải</label>
                        </li>
                        <li className="bg-white text-gray-500 w-full text-sm flex my-2 items-center ">
                            <input type={'checkbox'} className="checkboxInput mr-3 cursor-pointer"></input>
                            <label className="cursor-pointer ">Tre</label>
                        </li>
                        <li className="bg-white text-gray-500 w-full text-sm flex my-2 items-center ">
                            <input type={'checkbox'} className="checkboxInput mr-3 cursor-pointer"></input>
                            <label className="cursor-pointer ">Túi phân hủy</label>
                        </li>
                        <li className="bg-white text-gray-500 w-full text-sm flex my-2 items-center ">
                            <input type={'checkbox'} className="checkboxInput mr-3 cursor-pointer"></input>
                            <label className="cursor-pointer ">Bàn chảy</label>
                        </li>
                        <li className="bg-white text-gray-500 w-full text-sm flex my-2 items-center ">
                            <input type={'checkbox'} className="checkboxInput mr-3 cursor-pointer"></input>
                            <label className="cursor-pointer ">Ống hút</label>
                        </li>
                        <li className="bg-white text-gray-500 w-full text-sm flex my-2 items-center ">
                            <input type={'checkbox'} className="checkboxInput mr-3 cursor-pointer"></input>
                            <label className="cursor-pointer ">Chai</label>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* fill by price */}
            <div style={{ borderBottom: '1px solid rgb(238, 238, 238)' }} className="mb-3">
                <p className="font-semibold mb-2 flex items-center justify-between leading-8">
                    <span>Giá</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                            points="208 96 128 176 48 96"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                        ></polyline>
                    </svg>
                </p>
            </div>
            {/* fill by label */}
            <div style={{ borderBottom: '1px solid rgb(238, 238, 238)' }} className="mb-3">
                <p className="font-semibold mb-2 flex items-center justify-between leading-8">
                    <span>Nhãn hàng</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                    >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                            points="208 96 128 176 48 96"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="16"
                        ></polyline>
                    </svg>
                </p>
            </div>
        </div>
    );
}
