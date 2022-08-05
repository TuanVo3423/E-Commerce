import React from 'react';
import ProductsAtHome from '../ProductsAtHome';
import { RiceStraws } from '../../assets/Image';

export default function CommonProduct() {
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
    };
    return <ProductsAtHome data={listData} />;
}
