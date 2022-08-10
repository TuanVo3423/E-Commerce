import { Button } from '@mui/material';
import { RiceStraws } from '../../assets/Image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { headerCartSelector } from '../../redux/selectors';
import { motion } from 'framer-motion';
import { headerReducer } from '../../layouts/components/header/ReducerSlice';
export default function CartProduct() {
    const dispath = useDispatch();
    const isCloseModal = useSelector(headerCartSelector);
    const handleCloseModalCart = () => {
        dispath(headerReducer.actions.HiddenModal(true));
    };
    return (
        <div
            onClick={handleCloseModalCart}
            style={{ backgroundColor: '#0006', zIndex: '9999', display: isCloseModal ? 'none' : 'block' }}
            className="w-screen h-full fixed"
        >
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 1 }}
                onClick={(e) => e.stopPropagation()}
                style={{ width: '600px' }}
                className="fixed bg-white h-screen right-0 top-0"
            >
                {/* <div> */}
                <div className="px-4 py-10 h-full flex flex-col text-center items-center">
                    {/* head */}
                    <div className="border-b-2 border-green-300 py-8 w-full">
                        <p className="text-2xl font-bold">GIỎ HÀNG</p>
                        <p className="text-sm">(0 sản phẩm )</p>
                    </div>
                    {/* Display san pham */}
                    <div className="flex flex-col flex-grow items-center w-full border-b-2 border-green-300 py-8">
                        {/* item */}
                        <div className="flex flex-row justify-between items-center w-full h-24">
                            <div className="flex flex-row">
                                <img className="w-24 mr-2" src={RiceStraws} alt="product"></img>
                                <div className="flex flex-col items-start">
                                    <p className="font-bold text-base">Ống hút bã mía</p>
                                    <div className="border-2 border-black my-2">
                                        <span className="text-base inline-block w-5 h-5">+</span>
                                        <span className="text-base inline-block w-5 h-5">1</span>
                                        <span className="text-base inline-block w-5 h-5">-</span>
                                    </div>
                                    <p className="text-sm underline">Xóa</p>
                                </div>
                            </div>
                            <div>
                                <p>30000d</p>
                            </div>
                        </div>
                        {/* <p>(Không có sản phẩm ở đây)</p> */}
                    </div>
                    {/* tong tien */}
                    <div className="flex flex-row w-full justify-between border-b-2 border-green-300 py-8">
                        <p className="text-base font-bold">Tổng tiền hàng </p>
                        <p className="text-base font-bold">0đ</p>
                    </div>
                    <Button variant="outline" className="w-full font-bold text-white bg-green-600 mt-8 ">
                        <p className="py-3">THANH TOAN</p>
                    </Button>
                </div>
            </motion.div>
        </div>
        // </div>
    );
}
