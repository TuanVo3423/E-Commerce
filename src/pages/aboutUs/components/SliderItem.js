import React from 'react';
import { useViewport } from '../../../hooks/useViewPort';
import { FacebookLogo, GithubLogo, InstagramLogo } from 'phosphor-react';

import '../index.css';

export default function SliderAboutItem({ data }) {
    const { name, role, description, facebook, github, instagram, image } = data;
    const { isDesktop, isTablet } = useViewport();
    return (
        <div className={`${isDesktop || isTablet ? 'about-item' : 'h-full'} w-full`}>
            <div className="flex md:flex-row flex-col h-full w-full">
                <div className="md:w-1/2 md:h-full w-full h-1/2 md:p-3">
                    <div className="h-full flex flex-col md:justify-center justify-start md:items-end items-center md:text-end text-center">
                        <h1 style={{ color: '#363636' }} className="text-5xl mb-6 font-bold">
                            {name}
                        </h1>
                        <p style={{ color: '#7a7a7a' }} className="mb-6 ">
                            {role}
                        </p>
                        <p className="mb-6">{description}</p>
                        <div className="text-4xl flex">
                            <a target="_blank" href={facebook} rel="noreferrer">
                                <FacebookLogo color="#0096ff" className="mr-2" />
                            </a>
                            <a target="_blank" href={github} rel="noreferrer">
                                <GithubLogo color="#161414" className="mr-2" />
                            </a>
                            <a target="_blank" href={instagram} rel="noreferrer">
                                <InstagramLogo color="#c22867" className="mr-2" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:h-full w-full h-full md:p-3 p-3">
                    <div className="h-full w-full flex items-center">
                        <div className="about-image-member md:w-3/4 md:h-90/100 w-full h-full">
                            <img className="h-full w-full object-cover" src={image} alt="member1"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
