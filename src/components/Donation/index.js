import React, { useState } from 'react';
import { donateFormVariant } from '../../utils/types';
import './index.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const dataMount = [50, 100, 200, 500, 1000];

export default function DonationSection({ isAtHome, isAtDonation }) {
    const [donationMountID, setDonationMountID] = useState();
    const [isOpenDonationModal, setIsOpenDonationModal] = useState(false);
    // const [mountDonate, setmountDonate] = useState();
    const handleChooseMount = (index) => {
        setDonationMountID(index);
    };
    const handleOpenDonationModal = () => {
        setIsOpenDonationModal(!isOpenDonationModal);
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
                            className="text-center"
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
                                <Link to='/donation'>
                                    <button className="MoreBtn mt-5">QUYÊN GÓP</button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            )) ||
                (isAtDonation && (
                    <React.Fragment>
                        <div
                            className="donation-wrap relative z-0 w-full h-full py-12 bg-no-repeat bg-cover bg-center bg-fixed text-white"
                            style={{
                                backgroundImage: `url(https://bwd2022.vercel.app/assets/bg7.jpg)`,
                            }}
                        >
                            <div className="w-full h-full">
                                <div
                                    style={{ minHeight: '75vh' }}
                                    className="w-3/4 h-full mx-auto flex flex-row items-center justify-center"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 200, x: 0 }}
                                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                        className="text-center"
                                    >
                                        <motion.p
                                            className="relative font-bold donate-box-title text-xl mb-3 "
                                            initial={{ opacity: 0, y: 200, x: 0 }}
                                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                        >
                                            QUYÊN GÓP
                                        </motion.p>
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
                                            className="text-lg w-full mx-auto mb-4"
                                        >
                                            Cùng nhau hành động ngay bây giờ, mọi đóng góp của bạn đều mang lại sự thay
                                            đổi tích cực cho môi trường.
                                        </motion.p>
                                        <motion.div
                                            className="mb-7 flex md:flex-row"
                                            initial={{ opacity: 0, y: 200, x: 0 }}
                                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                        >
                                            <div className="flex md:flex-row justify-center flex-wrap p-5 w-3/4 mx-auto">
                                                {dataMount.map((item, index) => {
                                                    return (
                                                        <div
                                                            className="lg:w-1/6 w-1/2 p-2"
                                                            key={index}
                                                            onClick={() => handleChooseMount(index)}
                                                        >
                                                            <div
                                                                className={`cursor-pointer p-3 text-black text-lg font-semibold bg-white hover:bg-green-500 hover:text-white ${
                                                                    donationMountID === index ? 'isChoosed' : ''
                                                                }`}
                                                            >
                                                                {item}K
                                                            </div>
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
                                            <button
                                                onClick={handleOpenDonationModal}
                                                className="buttonLoginAtNavAndDonate p-4 md:p-6 w-3/4 md:w-1/2 font-bold text-base mx-auto"
                                            >
                                                QUYÊN GÓP NGAY
                                            </button>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 200, x: 0 }}
                                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
                                            className="mt-3"
                                        >
                                            <Link
                                                to={'/ranking'}
                                                className="text-base italic text-green-500 hover:underline"
                                            >
                                                Xem danh sách
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        {isOpenDonationModal && (
                            <motion.div
                                variants={donateFormVariant}
                                initial="close"
                                animate={isOpenDonationModal ? 'open' : 'close'}
                                className="modal opacity-100 fixed top-0 bottom-0 left-0 right-0 z-50 h-screen w-screen flex items-center justify-center "
                            >
                                {/* title */}
                                <div className="relative w-screen md:w-auto bg-white p-12 text-center">
                                    <div className="mb-6">
                                        <p className="font-semibold text-xl">Thông tin của bạn</p>
                                    </div>

                                    {/* form */}
                                    <form>
                                        {/* row1 */}
                                        <div className="flex md:flex-row flex-col md:mb-3 mb-0">
                                            <div className="md:w-1/2 w-full my-3 ml-0 md:mr-3 md:my-0">
                                                <input
                                                    type={'text'}
                                                    className="inputModal w-full rounded-none text-xl font-medium  px-3 py-2 focus:border-green-500"
                                                    placeholder="Họ"
                                                    name="lastName"
                                                ></input>
                                            </div>
                                            <div className="md:w-1/2 w-full">
                                                <input
                                                    style={{ transition: 'all .2s ease-in-out' }}
                                                    type={'text'}
                                                    className="inputModal w-full rounded-none text-xl font-medium  px-3 py-2 focus:border-green-500"
                                                    placeholder="Tên"
                                                    name="firstName"
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="my-3">
                                                <input
                                                    style={{ transition: 'all .2s ease-in-out' }}
                                                    type={'text'}
                                                    className="inputModal w-full rounded-none text-xl font-medium  px-3 py-2 focus:border-green-500"
                                                    placeholder="Email"
                                                    name="email"
                                                ></input>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" my-3">
                                                <input
                                                    style={{ transition: 'all .2s ease-in-out' }}
                                                    type={'text'}
                                                    className="inputModal w-full rounded-none text-xl font-medium  px-3 py-2 focus:border-green-500"
                                                    placeholder="Trường bạn đang học"
                                                    name="school"
                                                ></input>
                                            </div>
                                        </div>
                                        {/*  */}
                                    </form>
                                    {/*  */}
                                    <div>
                                        <p className="font-medium text-xl">Số tiền bạn muốn quyên góp :</p>
                                        <span className="underline font-semibold text-2xl kCharacter">
                                            {dataMount[donationMountID]}K
                                        </span>
                                    </div>
                                    <div className="mt-4">
                                        <button className="MoreBtn md:w-1/2 w-2/3">QUYÊN GÓP NGAY</button>
                                    </div>
                                    {/* X close */}
                                    <div
                                        onClick={handleOpenDonationModal}
                                        className="absolute top-4 right-4 cursor-pointer "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <rect width="256" height="256" fill="none"></rect>
                                            <line
                                                x1="200"
                                                y1="56"
                                                x2="56"
                                                y2="200"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></line>
                                            <line
                                                x1="200"
                                                y1="200"
                                                x2="56"
                                                y2="56"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="16"
                                            ></line>
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
        </React.Fragment>
    );
}
