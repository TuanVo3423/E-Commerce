import React from 'react';
import ProductsAtHome from '../../../../components/ProductsAtHome';
import { RiceStraws } from '../../../../assets/Image';

export default function CommonProduct() {
    const listData = {
        dataProduct: [
            {
                id: 1,
                title: 'Ống hút bột gạo',
                productPicture: RiceStraws,
                price: '3000',
                tag: 'Phổ biến',
                type: 'COMMON',
            },
            {
                id: 2,
                title: 'Ống hút bột gạo',
                productPicture: RiceStraws,
                price: '1000',
                tag: 'Phổ biến',
                type: 'COMMON',
            },
            {
                id: 3,
                title: 'Ống hút bột gạo',
                productPicture: RiceStraws,
                price: '7000',
                tag: 'Phổ biến',
                type: 'COMMON',
            },
            {
                id: 4,
                title: 'Ống hút bột gạo',
                productPicture: RiceStraws,
                price: '3000',
                tag: 'Phổ biến',
                type: 'COMMON',
            },
        ],
        title: 'SẢN PHẨM PHỔ BIẾN',
        description: 'Những sản phẩm bán chạy trong năm nay',
    };
    return <ProductsAtHome data={listData} />;
}
