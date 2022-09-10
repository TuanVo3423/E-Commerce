import React from 'react';
import './index.css';
import { motion } from 'framer-motion';
import { inViewScaleChildShow, categoryItemShow } from '../../utils/types';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductItem({ data, className, isAtHome, isAtCategory }) {
    const { productPicture, title, price, tag, type } = data;
    return (
        <motion.div
            variants={(isAtHome && inViewScaleChildShow) || (isAtCategory && categoryItemShow)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            <div className="w-full inline-block py-4 px-2">
                <div
                    style={{ maxWidth: 319 }}
                    className="text-center h-full w-full product-card hoverProduct relative text-black"
                >
                    <div className="overflow-hidden">
                        <img className=" rounded-none" style={{ height: '319px' }} src={productPicture} alt="Straws" />
                    </div>
                    <div className="px-3 py-2 mt-2 pb-5">
                        <div>
                            <h5 className="font-bold text-xl text-black">{title}</h5>
                            <div className="my-3">
                                <StarOutlineIcon />
                                <StarOutlineIcon />
                                <StarOutlineIcon />
                                <StarOutlineIcon />
                                <StarOutlineIcon />
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <FavoriteBorderIcon />
                            <p className="text-xl font-bold">{price}₫</p>
                            <AddShoppingCartIcon />
                        </div>
                        {(type === 'NEW' && (
                            <div className="absolute top-2 right-2 bg-green-200 rounded-md">
                                <span className="h-6 px-3 inline-flex items-center justify-center text-green-500 font-semibold text-xs ">
                                    {tag}
                                </span>
                            </div>
                        )) ||
                            (type === 'HOT' && (
                                <div className="absolute top-2 right-2 bg-red-200 rounded-md">
                                    <span className="h-6 px-3 inline-flex items-center justify-center text-red-500 font-semibold text-xs ">
                                        {tag}
                                    </span>
                                </div>
                            )) ||
                            (type === 'COMMON' && (
                                <div className="absolute top-2 right-2 bg-orange-200 rounded-md">
                                    <span className="h-6 px-3 inline-flex items-center justify-center text-orange-500 font-semibold text-xs ">
                                        {tag}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
