import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductItem({ data }) {
    const { productPicture, title, price, tag } = data;
    return (
        <React.Fragment>
            <Card sx={{ maxWidth: 319 }} className="text-center my-3 relative">
                <CardMedia sx={{ height: '319px' }} component="img" image={productPicture} alt="Straws" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <div>
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                        <StarOutlineIcon />
                    </div>
                </CardContent>
                <CardActions className="flex flex-row justify-between items-center">
                    <FavoriteBorderIcon />
                    <Typography variant="h6">{price}d</Typography>
                    <AddShoppingCartIcon />
                </CardActions>
                <div className="absolute top-0 right-0 bg-green-400 rounded-sm">
                    <span className="p-3">{tag}</span>
                </div>
            </Card>
        </React.Fragment>
    );
}
