import React from 'react';
import { RiceStraws } from '../../assets/Image';
import ProductsAtHome from '../ProductsAtHome';
const listData = {
    dataProduct: [
        { id: 1, title: 'Ống hút bột gạo', productPicture: RiceStraws, price: '3000', tag: 'NEW' },
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
    ],
    title: 'Featured Products',
    description: 'Try and experience our outstanding product',
    Image: 'https://bwd2022.vercel.app/assets/donate-1.jpg',
};

export default function FeaturedProducts() {
    return <ProductsAtHome data={listData} />;
}
