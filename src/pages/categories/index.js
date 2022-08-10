import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from '../../components/ProductsAtHome/ProductItem';
import services from '../../services';
import {
    Checkbox,
    Collapse,
    FormControlLabel,
    FormGroup,
    List,
    ListItemButton,
    ListItemText,
    Pagination,
    Stack,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
const pageSize = 9;

export default function Categories() {
    // count : số lượng phần tử
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize,
    });
    const [data, setData] = useState([]);
    const [openFilterByCategories, setOpenFilterByCategories] = React.useState(true);
    const [openFilterByPrice, setOpenFilterByPrice] = React.useState(false);
    const [openFilterByLabel, setOpenFilterByLabel] = React.useState(false);

    const handleClickCategories = () => {
        setOpenFilterByCategories(!openFilterByCategories);
    };
    const handleClickPrice = () => {
        setOpenFilterByPrice(!openFilterByPrice);
    };
    const handleClickLabel = () => {
        setOpenFilterByLabel(!openFilterByLabel);
    };
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
        <div className="w-full h-full my-auto md:px-20 md:py-12 p-5">
            <div className="flex md:flex-row w-full h-full flex-col justify-center">
                {/* Sidebar phan loai */}
                <div className="md:w-1/4 w-full flex flex-col md:pr-8">
                    <div className="   w-full h-full md:pr-10 md:border-solid md:border-r-4 md:border-gray-100">
                        <div className="text-2xl mb-4 text-black font-semibold">Phân loại sản phẩm</div>
                        <List className="w-full">
                            <ListItemButton className="px-0" onClick={handleClickCategories}>
                                <ListItemText primary="Loại sản phẩm" />
                                {openFilterByCategories ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openFilterByCategories} timeout="auto" unmountOnExit>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Tất cả" />
                                    <FormControlLabel control={<Checkbox />} label="Vải" />
                                    <FormControlLabel control={<Checkbox />} label="Tre" />
                                    <FormControlLabel control={<Checkbox />} label="Túi phân hủy" />
                                    <FormControlLabel control={<Checkbox />} label="Bàn chải" />
                                    <FormControlLabel control={<Checkbox />} label="Ống hút" />
                                    <FormControlLabel control={<Checkbox />} label="Chai" />
                                    <FormControlLabel control={<Checkbox />} label="Ly" />
                                    <FormControlLabel control={<Checkbox />} label="Khác" />
                                    <FormControlLabel control={<Checkbox />} label="Mới" />
                                    <FormControlLabel control={<Checkbox />} label="Nổi bật" />
                                    <FormControlLabel control={<Checkbox />} label="Phổ biến" />
                                </FormGroup>
                            </Collapse>
                        </List>
                        <List className="w-full">
                            <ListItemButton className="px-0" onClick={handleClickPrice}>
                                <ListItemText primary="Giá" />
                                {openFilterByPrice ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openFilterByPrice} timeout="auto" unmountOnExit>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="50000" />
                                    <FormControlLabel control={<Checkbox />} label="100000" />
                                    <FormControlLabel control={<Checkbox />} label="200000" />
                                    <FormControlLabel control={<Checkbox />} label="500000" />
                                </FormGroup>
                            </Collapse>
                        </List>
                        <List className="w-full">
                            <ListItemButton className="px-0" onClick={handleClickLabel}>
                                <ListItemText primary="Nhãn hàng" />
                                {openFilterByLabel ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openFilterByLabel} timeout="auto" unmountOnExit>
                                <FormGroup></FormGroup>
                            </Collapse>
                        </List>
                    </div>
                </div>
                {/* Danh sach san pham */}
                <div className="md:w-3/4 w-full flex flex-col">
                    <div>
                        <p className="text-2xl mb-4 text-black font-semibold">Danh sách sản phẩm</p>
                    </div>
                    {/* danh sach san pham */}
                    <div className="flex flex-row flex-wrap justify-between">
                        {data.map((item) => (
                            <ProductItem key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full mt-4">
                <Stack className="w-1/2 mx-auto" spacing={2}>
                    <Pagination
                        className="flex flex-row justify-center"
                        count={Math.ceil(pagination.count / pageSize)}
                        variant="outlined"
                        onChange={handlePageChange}
                    />
                </Stack>
            </div>
        </div>
    );
}
