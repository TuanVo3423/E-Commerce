import React from 'react';
import Slider from 'react-slick';
import SliderAboutItem from './components/SliderItem';
import './index.css';
import { NextIconBanner, PrevIconBanner } from '../../assets/Image';
const members = [
    {
        name: 'Lê Kim Hoàng Trung',
        description:
            'Tôi là người năng động, luôn thích thú, chủ động tìm những công nghệ mới hiện nay. Vì là người năng động nên cả ngày tôi chỉ cười, có lúc không.',
        facebook: 'https://www.facebook.com/trung181',
        github: 'https://github.com/hoangtrung1801 ',
        instagram: 'https://www.instagram.com/hoangtrung1801',
        image: 'https://bwd2022.vercel.app/assets/member-1.jpg',
        role: 'Đội trưởng',
    },
    {
        name: 'Hà Cảnh Hồng Phúc',
        description:
            'Là một phần của thế hệ GenZ, tôi tin rằng không có bất kỳ mục tiêu không thể nào không được công nhận. Nếu chúng ta đủ kiên định, tương lai là của chúng ta.',
        facebook: 'https://www.facebook.com/hch.phusc.17',
        github: 'https://github.com/LilPhusc ',
        instagram: 'https://www.instagram.com/_.aliz.hngphc/',
        image: 'https://bwd2022.vercel.app/assets/member-2.jpg',
        role: 'Thành viên',
    },
    {
        name: 'Võ Văn Tuấn',
        description:
            'Tôi là một người có tổ chức và luôn tập trung vào việc tạo ra kết quả. Trong khi đặt ra mục tiêu tôi luôn rất thực tế, tôi luôn nỗ lực phát triển các cách để hoàn thành được công việc một cách hiệu quả và thậm chí thường đạt được nhiều hơn những gì tôi mong đợi.',
        facebook: 'https://www.facebook.com/profile.php?id=100013422558737',
        github: '',
        instagram: '',
        image: 'https://bwd2022.vercel.app/assets/member-3.jpg',
        role: 'Thành viên',
    },
    {
        name: 'Trương Đình Dũng',
        description: 'Tôi là người năng động, thân thiên. Lúc rãnh rỗi, tôi thường đọc báo và nghe nhạc.',
        facebook: ' https://www.facebook.com/andrew.td2003/',
        github: 'https://github.com/gitdung',
        instagram: '',
        image: 'https://bwd2022.vercel.app/assets/member-4.jpg',
        role: 'Thành viên',
    },
];

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`absolute bottom-5 left-0 my-0 mx-8 text-4xl `}
            style={{
                ...style,
                top: 'initial',
                color: '#555',
            }}
            onClick={onClick}
        >
            <PrevIconBanner />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className={`absolute bottom-5 right-0 my-0 mx-8 text-4xl `}
            style={{
                ...style,
                top: 'initial',
                color: '#555',
            }}
            onClick={onClick}
        >
            <NextIconBanner />
        </div>
    );
}

export default function AboutUs() {
    const settings = {
        customPaging: function (i) {
            return (
                <div className="dots">
                    <figure className="image">
                        <img src={members[i].image} alt="" />
                    </figure>
                </div>
            );
        },
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    };
    return (
        <div className="w-full heightWrap">
            <div
                style={{ backgroundImage: `url(https://bwd2022.vercel.app/assets/aboutme.png)` }}
                className="aboutme-wrap relative w-full h-full px-12 bg-cover bg-no-repeat"
            >
                <Slider className="h-full" {...settings}>
                    {members.map((item, index) => (
                        <SliderAboutItem key={index} data={item} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}
