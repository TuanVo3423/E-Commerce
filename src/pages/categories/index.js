import React, { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductsAtHome/ProductItem';
import services from '../../services';
import LeftCategories from './LeftCategories';
import { useViewport } from '../../hooks/useViewPort';
const pageSize = 15;
    
export default function Categories() {
    const { isDesktop, isTablet } = useViewport();
    // count : số lượng phần tử
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize,
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        services.getData({ from: pagination.from, to: pagination.to }).then((res) => {
            setPagination({ ...pagination, count: res.count });
            setData(res.data);
            window.scrollTo(0, 0);
        });
    }, [pagination.from, pagination.to]);
    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;
        setPagination({ ...pagination, from: from, to: to });
    };
    return (
        <div className="w-full h-full my-auto lg:px-20 lg:py-12 md:py-12 p-2">
            <div className="flex md:flex-row w-full h-full flex-col justify-center">
                {/* Sidebar phan loai */}
                <div className="md:w-1/4 w-full flex flex-col md:pr-0 pr-0">
                    <LeftCategories />
                </div>
                {/* Danh sach san pham */}
                <div className="md:w-3/4 w-full flex flex-col">
                    <div>
                        <p className="text-2xl mb-4 text-black font-semibold">Danh sách sản phẩm</p>
                    </div>
                    {/* danh sach san pham */}
                    <div className="flex flex-row flex-wrap md:justify-between justify-center">
                        {data.map((item) => (
                            <ProductItem
                                className={' md:w-1/2 lg:w-1/3 mb-4 px-2'}
                                key={item.id}
                                data={item}
                                isAtCategory
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
