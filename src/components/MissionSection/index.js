import { Button } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

import React from 'react';

export default function MissionSection() {
    return (
        // Wrapper
        <div className="flex items-center justify-center" style={{ color: '#8a8a8a' }}>
            <div style={{ maxWidth: '1170px' }} className="m-auto p-28">
                <div className="flex flex-col items-center">
                    {/* Titlte */}
                    <div className="text-center">
                        <p className="font-bold text-5xl text-black mb-7">OUR MISSION</p>
                        <p className="text-xl mb-10">Protecting the rights and wellbeing of EVERY child</p>
                    </div>
                    {/* 3 icon */}
                    <div className="flex md:flex-row flex-col items-center">
                        {/* mission item */}
                        <div className="md:w-1/3 w-full pb-7 flex flex-col text-center items-center">
                            {/* img */}
                            <div>
                                <img
                                    src="http://charity-is-hope-html.themerex.net/images/mission_1.png"
                                    alt="mission01"
                                ></img>
                            </div>
                            <p
                                style={{ color: '#84c54e' }}
                                className="text-lg leading-6 md:w-89/100 w-full font-bold mx-auto mt-10"
                            >
                                Promoting the right and wellbeing of every child, in everything we do.
                            </p>
                        </div>
                        <div className="md:w-1/3 w-full pb-7 flex flex-col text-center items-center">
                            {/* img */}
                            <div>
                                <img
                                    src="http://charity-is-hope-html.themerex.net/images/mission_1.png"
                                    alt="mission01"
                                ></img>
                            </div>
                            <p
                                style={{ color: '#84c54e' }}
                                className="text-lg leading-6 md:w-89/100 w-full font-bold mx-auto mt-10"
                            >
                                Promoting the right and wellbeing of every child, in everything we do.
                            </p>
                        </div>
                        <div className="md:w-1/3 w-full pb-7 flex flex-col text-center items-center">
                            {/* img */}
                            <div>
                                <img
                                    src="http://charity-is-hope-html.themerex.net/images/mission_1.png"
                                    alt="mission01"
                                ></img>
                            </div>
                            <p
                                style={{ color: '#84c54e' }}
                                className="text-lg leading-6 md:w-89/100 w-full font-bold mx-auto mt-10"
                            >
                                Promoting the right and wellbeing of every child, in everything we do.
                            </p>
                        </div>
                    </div>
                    {/* Icon */}
                    <div className="w-full text-center mt-10">
                        <Button
                            endIcon={<ArrowCircleRightOutlinedIcon className="text-2xl" />}
                            className=" md:w-2/5 md:px-10 md:py-6 w-full text-white bg-orange-600"
                            variant="text"
                        >
                            <p className="font-bold md:text-2xl py-3">How You Can Help</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
