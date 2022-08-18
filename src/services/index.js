import {
    Banner_1,
    Banner_2,
    RiceStraws,
    donate_card_1,
    donate_card_2,
    donate_card_3,
    Banner_Donate_1,
    Banner_Donate_2,
} from '../assets/Image';

const products = [
    {
        id: 1,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 2,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '1000',
        tag: 'NEW',
    },
    {
        id: 3,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '7000',
        tag: 'NEW',
    },
    {
        id: 4,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 5,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 6,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 7,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 8,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 9,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 10,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 11,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '1000',
        tag: 'NEW',
    },
    {
        id: 12,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '7000',
        tag: 'NEW',
    },
    {
        id: 13,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 14,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 15,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 16,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 17,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 18,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 19,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 20,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '1000',
        tag: 'NEW',
    },
    {
        id: 21,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '7000',
        tag: 'NEW',
    },
    {
        id: 22,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 23,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 24,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 25,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 26,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
    {
        id: 27,
        title: 'Ống hút bột gạo',
        productPicture: RiceStraws,
        price: '3000',
        tag: 'NEW',
    },
];

const services = {
    getData: ({ from, to }) => {
        return new Promise((resolve, reject) => {
            const data = products.slice(from, to);
            resolve({
                count: products.length,
                data: data,
            });
        });
    },
};
export default services;

export const dataDonation = [
    {
        id: 1,
        title: 'Bảo vệ môi trường',
        BannerPicture: Banner_Donate_2,
        description:
            'Cùng chung tay bảo vệ môi trường vì tương lai của thế giới, hãy giữ lấy màu xanh và làm sạch môi trường.',
    },
    {
        id: 2,
        title: 'Cùng chung tay quyên góp bảo vệ môi trường',
        BannerPicture: Banner_Donate_1,
        description:
            'Giúp đỡ lẫn nhau thực hiện các nhu cầu cơ bản của sự sống còn của con người, đấu tranh bảo tồn các nguồn tài nguyên thiên nhiên và chung tay.',
    },
];
export const dataHome = [
    {
        id: 1,
        title: 'Thay đổi thế giới',
        BannerPicture: Banner_1,
        description:
            'Chúng ta cần bắt đầu thay đổi thế giới ngay hôm nay, không phải ngày mai. Chúng ta cần phải hành động và ngừng phàn nàn về những điều tồi tệ hiện tại để chúng ta có cơ hội làm cho chúng tốt hơn. Hãy cùng chung tay với chúng tôi?',
    },
    {
        id: 2,
        title: 'Tái sử dụng, vì tiềm năng của rác là vô hạn',
        BannerPicture: Banner_2,
        description:
            'Bạn đang cố gắng trở nên xanh và thân thiện với môi trường, nhưng không biết làm thế nào bạn có thể tiết kiệm tài nguyên của môi trường? Hãy tái sử dụng rác thải có thể tái chế.',
    },
];
export const dataDonateCard = [
    {
        id: 1,
        title: 'BẢO VỆ RỪNG',
        Image: donate_card_1,
        description:
            'Những năm gần đây, diện tích rừng tự nhiên ở Việt Nam ngày càng giảm nhanh, chất lượng rừng suy thoái ảnh hưởng nặng nề đến đời sống của người dân , không những thế còn dẫn đến nguy cơ ô nhiễm môi trường cao.',
        btnTitle: 'QUYÊN GÓP NGAY',
    },
    {
        id: 2,
        title: 'BẢO VỆ NƯỚC',
        Image: donate_card_2,
        description:
            'Những năm gần đây, ô nhiễm nguồn nước đang là một trong những thách thức môi trường lớn nhất đối với Việt Nam. Tỉ lệ người dân không có nước sạch để uống và sinh hoạt cao đe dọa đến sức khỏe và sinh kế của hàng triệu người.',
        btnTitle: 'QUYÊN GÓP NGAY',
    },
    {
        id: 3,
        title: 'SẢN PHẨM TÁI CHẾ',
        Image: donate_card_3,
        description:
            'Mỗi năm, hàng trăm ngàn tấn rác thải các loại được thải ra ảnh hưởng nghiêm trọng cho môi trường. Vì vậy, việc sử dụng sản phẩm tái chế từ túi nhựa, chai nước, giấy các loại... là biện pháp hiệu quả để bảo vệ môi trường chúng ta.',
        btnTitle: 'QUYÊN GÓP NGAY',
    },
];
