import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function SliderItem() {
    return (
        <React.Fragment>
            <Card sx={{ maxWidth: 319 }} className="text-center relative">
                <CardMedia
                    sx={{ height: '319px' }}
                    component="img"
                    image="https://firebasestorage.googleapis.com/v0/b/bwdd-3dc88.appspot.com/o/images%2FOng-hut-bot-gao-0?alt=media&token=5f37b297-a09a-4001-b53f-9e5340784f00"
                    alt="Straws"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Ống hút bột gạo
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
                    <Typography variant="h6">3.000d</Typography>
                    <AddShoppingCartIcon />
                </CardActions>
                <div className="absolute top-0 right-0 bg-green-400 rounded-sm">
                    <span className="p-3">NEW</span>
                </div>
            </Card>
        </React.Fragment>
    );
}
