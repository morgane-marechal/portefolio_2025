import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const About = () => {
 
    return (
        <Box>
          <h2 >A propos</h2>
          <p>A propos de moi...</p>
        </Box>
    );
}

export default About;