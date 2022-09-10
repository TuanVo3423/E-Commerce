import React from 'react';
import { RiceStraws } from '../../../../assets/Image';
import ProductsAtHome from '../../../../components/ProductsAtHome';
const listData = {
    dataProduct: [
        { id: 1, title: 'Ống hút bột gạo', productPicture: RiceStraws, price: '3000', tag: 'Nổi bật', type: 'HOT' },
        {
            id: 2,
            title: 'Ống hút bột gạo',
            productPicture: RiceStraws,
            price: '1000',
            tag: 'Nổi bật',
            type: 'HOT',
        },
        {
            id: 3,
            title: 'Ống hút bột gạo',
            productPicture: RiceStraws,
            price: '7000',
            tag: 'Nổi bật',
            type: 'HOT',
        },
        {
            id: 4,
            title: 'Ống hút bột gạo',
            productPicture: RiceStraws,
            price: '3000',
            tag: 'Nổi bật',
            type: 'HOT',
        },
    ],
    title: 'SẢN PHẨM NỔI BẬT',
    description: 'Hãy thử và trải nghiệm sản phẩm nổi bật của chúng tôi',
    Image: 'https://bwd2022.vercel.app/assets/donate-1.jpg',
};

export default function FeaturedProducts() {
    return <ProductsAtHome data={listData} />;
}
