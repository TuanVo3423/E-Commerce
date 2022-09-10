import React from 'react';
import './index.css';

const titleTable = ['STT', 'HỌ TÊN', 'EMAIL', 'TRƯỜNG', 'SỐ TIỀN'];
const listUser = [
    {
        name: 'VÕ VĂN TUẤN',
        email: 'tuanvv.21it@vku.udn.vn',
        school: 'VKU',
        money: 500,
    },
    {
        name: 'VÕ VĂN TUẤN',
        email: 'tuanvv.21it@vku.udn.vn',
        school: 'VKU',
        money: 500,
    },
    {
        name: 'VÕ VĂN TUẤN',
        email: 'tuanvv.21it@vku.udn.vn',
        school: 'VKU',
        money: 500,
    },
];
export default function DonationRanking() {
    return (
        <div className="min-h-screen bg-green-50 ">
            <div className="lg:px-24 md:px-8 px-0 py-8 h-full">
                <div className="flex flex-col  mb-6  relative items-center justify-center ">
                    <img className="w-32" src="https://bwd2022.vercel.app/assets/crown-icon.png" alt="logo"></img>
                    <p style={{ lineHeight: '60px' }} className="font-bold text-black text-4xl ">
                        Bảng Quyên Góp
                    </p>
                    <p className="max-w-3xl text-center">
                        Cảm ơn bạn đã quyên góp cho chúng tôi. Chúng tôi không thể thực hiện hành động gây quỹ này nếu
                        không có sự ủng hộ của các bạn. Toàn bộ số tiền gây quỹ đến từ các bạn sẽ được dùng cho hoạt
                        động bảo vệ môi trường.
                    </p>
                </div>

                {/* container */}
                <div className="flex-grow mx-auto my-0 w-auto">
                    <div className="overflow-y-auto">
                        <table
                            style={{
                                boxShadow: '#64646f33 0 7px 29px',
                                borderRadius: '0.5rem',
                                color: '#363636',
                                overflow: 'hidden',
                            }}
                            className="table-auto w-full bg-white "
                        >
                            <thead className="bg-black text-white ">
                                <tr>
                                    {titleTable.map((item, index) => (
                                        <th key={index}>
                                            <a
                                                href="/"
                                                className="flex items-center justify-start text-white py-1 px-3"
                                            >
                                                <span className="mr-1">{item}</span>
                                            </a>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {listUser.map((item, index) => (
                                    <tr key={index}>
                                        <td className="pl-6 py-4">{index + 1}</td>
                                        <td className="pl-6 py-4">{item.name}</td>
                                        <td className="pl-6 py-4">{item.email}</td>
                                        <td className="pl-6 py-4">{item.school}</td>
                                        <td className="pl-6 py-4 font-bold">{item.money}K</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
