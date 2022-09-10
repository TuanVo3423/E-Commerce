import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useViewport } from '../../../hooks/useViewPort';

export default function Footer() {
    const { isDesktop } = useViewport();
    return (
        <div style={{ backgroundColor: '#333', color: '#999' }} className="w-full h-full">
            <div className="py-12 px-12">
                <p className="mb-3 font-bold text-lg">Thành viên</p>
                <div className="flex flex-row flex-wrap">
                    {/* info tung thanh vien */}
                    <div className="flex flex-col flex-1 md:m-0 my-5">
                        <p>Võ Văn Tuấn</p>
                        <p>MSV: 21IT055</p>
                        <div className="flex flex-row justify-start">
                            <FacebookIcon className="mr-3" />
                            <InstagramIcon className="mr-3" />
                            <GitHubIcon className="mr-3" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 md:m-0 my-5">
                        <p>Võ Văn Tuấn</p>
                        <p>MSV: 21IT055</p>
                        <div className="flex flex-row">
                            <FacebookIcon className="mr-3" />
                            <InstagramIcon className="mr-3" />
                            <GitHubIcon className="mr-3" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 md:m-0 my-5">
                        <p>Võ Văn Tuấn</p>
                        <p>MSV: 21IT055</p>
                        <div className="flex flex-row">
                            <FacebookIcon className="mr-3" />
                            <InstagramIcon className="mr-3" />
                            <GitHubIcon className="mr-3" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 md:m-0 my-5">
                        <p>Võ Văn Tuấn</p>
                        <p>MSV: 21IT055</p>
                        <div className="flex flex-row">
                            <FacebookIcon className="mr-3" />
                            <InstagramIcon className="mr-3" />
                            <GitHubIcon className="mr-3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-12 px-6 text-center">
                <p>Copyright © 2022 - Trường Đại học Công nghệ Thông tin & Truyền Thông Việt - Hàn, Đại học Đà Nẵng</p>
                <p>Địa chỉ: 470 Đường Trần Đại Nghĩa, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng</p>
                {isDesktop && (
                    <div className="md:w-2/5 w-full mx-auto bg-cover mt-5 mb-10">
                        <img src="https://bwd2022.vercel.app/assets/vku.png" alt="logoVKu"></img>
                    </div>
                )}
            </div>
        </div>
    );
}
