import { Button } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function DataDonation() {
    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const [isFirstTime, setIsFirstTime] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count === 0) {
            if (myElementIsVisible) {
                setCount((pre) => pre + 1);
                setIsFirstTime(true);
            }
        } else {
            setIsFirstTime(false);
        }
    }, [myElementIsVisible]);

    return (
        <div
            ref={myRef}
            style={{ backgroundImage: 'url(http://charity-is-hope-html.themerex.net/images/bg-4.jpg)' }}
            className=" bg-center bg-no-repeat bg-cover text-white"
        >
            <div style={{ maxWidth: '1170px' }} className="md:m-auto text-center mx-10">
                <div className="pt-10 pb-32">
                    <div className="my-20 text-5xl font-bold">
                        <h1>HOW YOU CAN HELP</h1>
                    </div>
                    {/* List item */}
                    <div className="flex md:flex-row flex-col md:items-center">
                        {/* Item */}
                        <div className="flex flex-col md:w-1/3 md:p-7 text-left ">
                            {(isFirstTime && myElementIsVisible && (
                                <CountUp
                                    className="text-8xl text-yellow-500 mb-5"
                                    end={12755}
                                    duration="2"
                                    separator=" "
                                />
                            )) || <p className="text-8xl text-yellow-500 mb-5">12755</p>}

                            <p className="text-2xl font-bold mb-4">Numbers of Volunterrs</p>
                            <p className="text-base mb-20">
                                Etiam vitae urna quis sem tempor elementum efficitur vel massa.
                            </p>
                            <Button
                                endIcon={<ArrowCircleRightOutlinedIcon className="text-2xl" />}
                                className=" md:w-full md:px-3 md:py-3 w-full text-white bg-orange-600"
                                variant="text"
                            >
                                <p className="font-bold md:text-2xl py-3">How You Can Help</p>
                            </Button>
                        </div>
                        <div className="flex flex-col md:w-1/3 md:p-7 text-left ">
                            {(isFirstTime && myElementIsVisible && (
                                <CountUp
                                    className="text-8xl text-yellow-500 mb-5"
                                    end={12755}
                                    duration="2"
                                    separator=" "
                                />
                            )) || <p className="text-8xl text-yellow-500 mb-5">12755</p>}
                            <p className="text-2xl font-bold mb-4">Numbers of Volunterrs</p>
                            <p className="text-base mb-20">
                                Etiam vitae urna quis sem tempor elementum efficitur vel massa.
                            </p>
                            <Button
                                endIcon={<ArrowCircleRightOutlinedIcon className="text-2xl" />}
                                className=" md:w-full md:px-3 md:py-3 w-full text-white bg-orange-600"
                                variant="text"
                            >
                                <p className="font-bold md:text-2xl py-3">How You Can Help</p>
                            </Button>
                        </div>
                        <div className="flex flex-col md:w-1/3 md:p-7 text-left ">
                            {(isFirstTime && myElementIsVisible && (
                                <CountUp
                                    className="text-8xl text-yellow-500 mb-5"
                                    end={12755}
                                    duration="2"
                                    separator=" "
                                />
                            )) || <p className="text-8xl text-yellow-500 mb-5">12755</p>}
                            <p className="text-2xl font-bold mb-4">Numbers of Volunterrs</p>
                            <p className="text-base mb-20">
                                Etiam vitae urna quis sem tempor elementum efficitur vel massa.
                            </p>
                            <Button
                                endIcon={<ArrowCircleRightOutlinedIcon className="text-2xl" />}
                                className=" md:w-full md:px-3 md:py-3 w-full text-white bg-orange-600"
                                variant="text"
                            >
                                <p className="font-bold md:text-2xl py-3">How You Can Help</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
