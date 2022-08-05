import { Button } from '@mui/material';
import React from 'react';

export default function DonateHome() {
    return (
        <div
            className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed text-white"
            style={{ backgroundImage: `url(https://bwd2022.vercel.app/assets/bg6.jpg)`, height: '500px' }}
        >
            <div className="w-full h-full flex flex-row items-center justify-center">
                <div className="text-center mb-10">
                    <p className="text-5xl font-bold mb-10">Cùng chung tay quyên góp bảo vệ môi trường</p>
                    <p className="text-lg w-3/4 mx-auto">
                        Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu tranh bảo tồn
                        các nguồn tài nguyên thiên nhiên và chung tay.
                    </p>
                    <Button className="bg-black p-4 mt-8" variant="container">
                        QUYÊN GÓP NGAY
                    </Button>
                </div>
            </div>
        </div>
    );
}
