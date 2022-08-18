import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { inViewFromLeftShow, inViewFromRightShow } from '../../../../utils/types';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import React from 'react';

export default function DonateAction() {
    return (
        <div className="w-full h-full">
            <div className="py-32">
                <div className="w-3/4 mx-auto h-full flex ">
                    <div className="w-full h-full relative">
                        <motion.figure
                            variants={inViewFromLeftShow}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ maxHeight: '500px' }}
                            className="overflow-hidden"
                        >
                            <img
                                className="w-full h-auto object-cover"
                                src="https://bwd2022.vercel.app/assets/donate-action.jpg"
                                alt="actionImg"
                            ></img>
                        </motion.figure>
                        <motion.div
                            variants={inViewFromRightShow}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ backgroundColor: '#40c057', bottom: '-7%', right: '-7%' }}
                            className="lg:absolute static text-white flex flex-col w-full lg:w-1/2 lg:py-16 py-8 px-10 lg:bottom-0 lg:right-0 lg:px-20"
                        >
                            <p className="font-bold text-4xl mb-6">Quyên góp</p>
                            <p className="text-lg mb-6">
                                Số tiền của bạn có thế cứu lấy thế giới. Hãy cùng chúng tôi tiếp tục chung tay góp phần
                                bảo vệ môi trường.
                            </p>
                            <Button
                                className="text-white justify-start text-xl"
                                variant="text"
                                startIcon={<VolunteerActivismIcon />}
                            >
                                QUYÊN GÓP NGAY
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
