import { Button } from '@mui/material';
import CustomizedProgressBars from '../ProcessBar';
import React from 'react';

export default function DonateSection() {
    return (
        <div className="flex items-center justify-center px-5" style={{ color: '#8a8a8a' }}>
            <div style={{ maxWidth: '1170px' }} className="m-auto">
                <div className="flex flex-col items-center">
                    {/* Titlte */}
                    <div className="text-center pt-16 pb-6">
                        <p className="font-bold text-5xl text-black mb-5">OUR CAUSES</p>
                        <p className="text-xl mb-10">You can help lots of people by donating little. See our causes.</p>
                    </div>
                    {/* 3 icon */}
                    <div className="flex md:flex-row flex-col items-center pb-14">
                        {/* mission item */}
                        <div className="md:w-1/3 md:pr-7 w-full pb-7 flex flex-col text-left items-center">
                            {/* img */}
                            <div>
                                <img
                                    src="http://charity-is-hope-html.themerex.net/images/image-16-570x320.jpg"
                                    alt="mission01"
                                ></img>
                                <p className="text-2xl font-bold mt-7" style={{ color: '#84c54e' }}>
                                    Education to Every Child
                                </p>
                                <p className="text-base mt-3" style={{ color: '#8A8A8A' }}>
                                    Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor
                                    incididunt magna.
                                </p>
                                <div className="donate-info flex flex-col mt-5">
                                    <div className="flex flex-row justify-between">
                                        <p className="font-bold text-base">Raised</p>
                                        <p className="font-bold text-base">Goal</p>
                                    </div>
                                    <CustomizedProgressBars className="my-2" />
                                    <div style={{ color: '#84c54e' }} className="flex flex-row justify-between">
                                        <p className="font-bold text-lg">3535.00USD</p>
                                        <p className="font-bold text-lg">9000.00USD</p>
                                    </div>
                                </div>
                                <Button style={{ backgroundColor: '#ffe400' }} className="text-black px-8 py-3 mt-3">
                                    DONATE
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/3 md:pr-7 w-full pb-7 flex flex-col text-left items-center">
                            {/* img */}
                            <div>
                                <img
                                    src="http://charity-is-hope-html.themerex.net/images/image-16-570x320.jpg"
                                    alt="mission01"
                                ></img>
                                <p className="text-2xl font-bold mt-7" style={{ color: '#84c54e' }}>
                                    Education to Every Child
                                </p>
                                <p className="text-base mt-3" style={{ color: '#8A8A8A' }}>
                                    Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor
                                    incididunt magna.
                                </p>
                                <div className="donate-info flex flex-col mt-5">
                                    <div className="flex flex-row justify-between">
                                        <p className="font-bold text-base">Raised</p>
                                        <p className="font-bold text-base">Goal</p>
                                    </div>
                                    <CustomizedProgressBars className="my-2" />
                                    <div style={{ color: '#84c54e' }} className="flex flex-row justify-between">
                                        <p className="font-bold text-lg">3535.00USD</p>
                                        <p className="font-bold text-lg">9000.00USD</p>
                                    </div>
                                </div>
                                <Button style={{ backgroundColor: '#ffe400' }} className="text-black px-8 py-3 mt-3">
                                    DONATE
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/3 md:pr-7 w-full pb-7 flex flex-col text-left items-center">
                            {/* img */}
                            <div>
                                <img
                                    src="http://charity-is-hope-html.themerex.net/images/image-16-570x320.jpg"
                                    alt="mission01"
                                ></img>
                                <p className="text-2xl font-bold mt-7" style={{ color: '#84c54e' }}>
                                    Education to Every Child
                                </p>
                                <p className="text-base mt-3" style={{ color: '#8A8A8A' }}>
                                    Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor
                                    incididunt magna.
                                </p>
                                <div className="donate-info flex flex-col mt-5">
                                    <div className="flex flex-row justify-between">
                                        <p className="font-bold text-base">Raised</p>
                                        <p className="font-bold text-base">Goal</p>
                                    </div>
                                    <CustomizedProgressBars className="my-2" />
                                    <div style={{ color: '#84c54e' }} className="flex flex-row justify-between">
                                        <p className="font-bold text-lg">3535.00USD</p>
                                        <p className="font-bold text-lg">9000.00USD</p>
                                    </div>
                                </div>
                                <Button style={{ backgroundColor: '#ffe400' }} className="text-black px-8 py-3 mt-3">
                                    DONATE
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
