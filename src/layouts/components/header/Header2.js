import React, { useState } from 'react';
import { useViewport } from '../../../hooks/useViewPort';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { filterTypeVariants } from '../../../utils/types';
// const dataTitleNav = ['Trang chủ', 'Danh mục', 'Quyên góp', 'Về chúng tôi'];
const dataTitleNav = [
    {
        title: 'Trang chủ',
        path: '/',
    },
    {
        title: 'Danh mục',
        path: '/categories',
    },
    {
        title: 'Quyên góp',
        path: '/donation',
    },
    {
        title: 'Về chúng tôi',
        path: '/aboutUs',
    },
];

export default function Header2() {
    const { isDesktop } = useViewport();
    const [isShowHeaderInMobile, setIsShowHeaderInMobile] = useState(false);
    const [isShowSubCategories, setIsShowSubCategories] = useState(false);
    const [isActiveNavBar, setIsActiveNavbar] = useState(0);
    const handleClickMenuBtn = () => {
        setIsShowHeaderInMobile(!isShowHeaderInMobile);
    };
    const handleClickCategories = () => {
        setIsShowSubCategories(!isShowSubCategories);
    };
    const handleClickActiveNavBar = (index) => {
        setIsActiveNavbar(index);
    };
    return (
        <div
            style={{ maxHeight: '80px' }}
            className=" flex justify-between px-12 items-stretch text-black bg-white w-screen fixed top-0 left-0 z-50 shadow-md "
        >
            {/* logo */}
            <div className="font-bold text-5xl">
                <a href="/" className="block w-40 h-full">
                    <figure className="w-full h-full">
                        <img
                            alt="logo"
                            className="w-full h-full object-cover"
                            src="data:image/png;base64,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"
                        ></img>
                    </figure>
                </a>
            </div>
            {isDesktop ? (
                <React.Fragment>
                    <div className="h-full flex md:flex-row ">
                        {/* item menu */}
                        {dataTitleNav.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleClickActiveNavBar(index)}
                                    style={{ minHeight: '80px', minWidth: '150px' }}
                                    className="flex items-center relative px-4 text-center"
                                >
                                    <Link to={item.path}>
                                        <span className="ml-2 font-bold text-lg text-gray-700 tracking-wide">
                                            {item.title}
                                        </span>
                                        {isActiveNavBar === index && (
                                            <div
                                                style={{
                                                    transform: 'none',
                                                    transformOrigin: '50% 50% 0px',
                                                    opacity: '1',
                                                }}
                                                className="w-3/4 h-1 rounded-2xl bg-green-500 absolute bottom-4 shadow-md opacity-100"
                                            ></div>
                                        )}
                                    </Link>
                                </div>
                            );
                        })}

                        {/* end item menu */}
                    </div>
                    {/* bag login */}
                    <div style={{ maxWidth: '200px' }} className="flex items-center justify-end ">
                        <div>
                            <span className="relative text-2xl cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <rect width="256" height="256" fill="none"></rect>
                                    <rect
                                        x="32"
                                        y="72"
                                        width="192"
                                        height="144"
                                        rx="8"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="16"
                                    ></rect>
                                    <path
                                        d="M88,104V72a40,40,0,0,1,80,0v32"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="16"
                                    ></path>
                                </svg>
                                <div className="absolute -top-2 -right-2 text-sm text-white bg-green-500 w-5 h-5 flex items-center justify-center rounded-full">
                                    <span>0</span>
                                </div>
                            </span>
                        </div>
                        <a href="/" className="text-black px-6 text-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 256 256"
                            >
                                <rect width="256" height="256" fill="none"></rect>
                                <polyline
                                    points="94 170 136 128 94 86"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></polyline>
                                <line
                                    x1="24"
                                    y1="128"
                                    x2="136"
                                    y2="128"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></line>
                                <path
                                    d="M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className="h-full">
                        {/*  */}
                        <div className="h-full">
                            <div
                                onClick={handleClickMenuBtn}
                                className="h-20 flex cursor-pointer items-center justify-center flex-col "
                            >
                                <i
                                    style={{
                                        transition: 'transform .5s cubic-bezier(.43,.77,.15,1.5), background .3s ease',
                                        // transform: 'translateY(-4px)',
                                    }}
                                    className="block w-11 h-1 bg-black m-1 "
                                ></i>
                                <i className="block w-11 h-1 bg-black m-1 "></i>
                                <i
                                    style={{
                                        transition: 'transform .5s cubic-bezier(.43,.77,.15,1.5), background .3s ease',
                                        // transform: 'translateY(-4px)',
                                    }}
                                    className="block w-11 h-1 bg-black m-1 "
                                ></i>
                            </div>
                        </div>
                        {/* drop down */}
                        <div
                            style={{ transition: 'all .5s cubic-bezier(.19,1,.22,1)' }}
                            className={`${
                                isShowHeaderInMobile ? 'h-full' : 'h-0'
                            } fixed top-20 z-50 justify-center left-0 bg-green-500 w-screen overflow-hidden `}
                        >
                            <div className="w-full py-12">
                                {/*  */}
                                <div className="block ">
                                    <div>
                                        <div
                                            style={{ transition: 'all .5s ease' }}
                                            className="w-3/4 text-white flex font-semibold text-xl  py-6 mx-auto relative cursor-pointer items-center justify-center"
                                        >
                                            <Link
                                                to={'/'}
                                                onClick={handleClickMenuBtn}
                                                style={{ transition: 'all ease .4s' }}
                                                className="text-white "
                                            >
                                                TRANG CHỦ
                                            </Link>
                                        </div>
                                        {/*  */}
                                    </div>
                                    {/*  */}
                                    <div>
                                        <div>
                                            <div
                                                style={{ transition: 'all .5s ease' }}
                                                className="w-3/4 text-white flex font-semibold text-xl py-6 mx-auto  items-center justify-center relative"
                                            >
                                                <Link
                                                    onClick={handleClickMenuBtn}
                                                    to={'/categories'}
                                                    style={{ transition: 'all ease .4s' }}
                                                    className="text-white"
                                                >
                                                    DANH MỤC
                                                </Link>
                                                <div className="overflow-hidden h-0" onClick={handleClickCategories}>
                                                    <svg
                                                        style={{ transform: 'translateY(-50%)' }}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="28"
                                                        height="28"
                                                        fill="currentColor"
                                                        viewBox="0 0 256 256"
                                                        className="item-expand absolute right-2 top-1/2"
                                                    >
                                                        <rect width="256" height="256" fill="none"></rect>
                                                        <polyline
                                                            points="208 96 128 176 48 96"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="24"
                                                        ></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                            <motion.div
                                                style={{ transition: 'all .5s cubic-bezier(.19,1,.22,1)' }}
                                                variants={filterTypeVariants}
                                                initial={false}
                                                animate={isShowSubCategories ? 'visible' : 'hidden'}
                                                className={`${
                                                    isShowSubCategories ? 'h-full' : 'h-0'
                                                }  overflow-hidden  flex font-bold mx-auto items-center justify-center flex-col`}
                                                data-projection-id="338"
                                            >
                                                <a
                                                    className="text-white py-2 px-2"
                                                    href="/"
                                                    style={{ transition: 'all ease .4s' }}
                                                >
                                                    <span>VẢI</span>
                                                </a>
                                                <a className="text-white py-2 px-2" href="/">
                                                    <span>TRE</span>
                                                </a>
                                                <a className="text-white py-2 px-2" href="/">
                                                    <span>TÚI PHÂN HỦY</span>
                                                </a>
                                                <a className="text-white py-2 px-2" href="/">
                                                    <span>BÀN CHẢY</span>
                                                </a>
                                                <a className="text-white py-2 px-2" href="/">
                                                    <span>ỐNG HÚT</span>
                                                </a>
                                                <a className="text-white py-2 px-2" href="/">
                                                    <span>CHAI</span>
                                                </a>
                                                <a className="text-white py-2 px-2" href="/">
                                                    <span>LY</span>
                                                </a>
                                                <a className="text-white py-2 px-2" href="/">
                                                    <span>KHÁC</span>
                                                </a>
                                            </motion.div>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div>
                                        <div
                                            style={{ transition: 'all .5s ease' }}
                                            className="w-3/4 text-white flex font-semibold text-xl  py-6 mx-auto relative cursor-pointer items-center justify-center"
                                        >
                                            <Link
                                                onClick={handleClickMenuBtn}
                                                to={'/donation'}
                                                style={{ transition: 'all ease .4s' }}
                                                className="text-white "
                                            >
                                                QUYÊN GÓP
                                            </Link>
                                        </div>
                                        {/*  */}
                                    </div>
                                    {/*  */}
                                    <div>
                                        <div
                                            style={{ transition: 'all .5s ease' }}
                                            className="w-3/4 text-white flex font-semibold text-xl  py-6 mx-auto relative cursor-pointer items-center justify-center"
                                        >
                                            <Link
                                                to={'/aboutUs'}
                                                style={{ transition: 'all ease .4s' }}
                                                className="text-white "
                                            >
                                                VỀ CHÚNG TÔI
                                            </Link>
                                        </div>
                                        {/*  */}
                                    </div>
                                </div>
                                <div className="flex px-12">
                                    <a
                                        style={{ transition: 'all ease .4s' }}
                                        href="/"
                                        className="w-1/2 text-black mx-auto"
                                    >
                                        <button className="buttonLoginAtNavAndDonate text-green-700 font-semibold text-xl py-3 ">
                                            LOGIN
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
            {/* item */}
        </div>
    );
}
