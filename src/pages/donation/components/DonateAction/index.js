import { Button } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import React from 'react';

export default function DonateAction() {
    return (
        <div className="py-32">
            <div style={{ maxHeight: '500px', height: '500px' }} className="w-3/4 m-auto flex ">
                <div style={{ maxHeight: '500px' }} className="w-full h-full relative ">
                    <img
                        className="w-full h-auto object-cover"
                        src="https://bwd2022.vercel.app/assets/donate-action.jpg"
                        alt="actionImg"
                    ></img>
                    <div
                        style={{ backgroundColor: '#40c057' }}
                        className="absolute text-white flex flex-col w-full md:translate-x-1/10 md:translate-y-1/10 md:w-1/2 md:py-16 py-8 px-10 md:bottom-0 md:right-0 md:px-20"
                    >
                        <p className="font-bold text-4xl mb-6">Quyên góp</p>
                        <p className="text-lg mb-6">
                            Số tiền của bạn có thế cứu lấy thế giới. Hãy cùng chúng tôi tiếp tục chung tay góp phần bảo
                            vệ môi trường.
                        </p>
                        <Button
                            className="text-white justify-start text-xl"
                            variant="text"
                            startIcon={<VolunteerActivismIcon />}
                        >
                            QUYÊN GÓP NGAY
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
