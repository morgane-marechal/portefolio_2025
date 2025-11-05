import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const ProfileCard = () => {
 
    return (
        <Box>
            <Typography sx={{ flex: 1, fontSize:25, marginTop:{ xs: 1, md: 5}}}>Portefolio de</Typography>
            <Typography sx={{ flex: 1, fontSize:30,  marginTop:{ xs: 1, md: 5}, marginBottom:{ xs: 0, md: 5}, textTransform: 'capitalize'}}>Morgane Maréchal</Typography>
        </Box>
    );
}

export default ProfileCard;