import './index.css';
import React from 'react';
import { dataDonateCard } from '../../../../services';

export default function MissionSection2() {
    return (
        <div className="flex md:flex-row flex-col md:justify-evenly  bg-green-50 md:p-24 p-12">
            {dataDonateCard.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="flex flex-col md:w-30% w-full p-12 mb-3 items-center relative card-donate bg-white"
                    >
                        <div className="mb-2">{<item.Image />}</div>
                        <p className="font-bold text-xl text-green-500 mb-6">{item.title}</p>
                        <p className="text-base text-center mb-6 text-gray-600">{item.description}</p>
                        <button className="text-green-500 text-xs font-semibold " variant="text">
                            {item.btnTitle}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
