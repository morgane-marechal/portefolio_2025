import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import TitleWriting from './TitreWriting';


const ProfileCard = () => {
 
    return (
        <Box sx={{paddingLeft:{xs:2, md:0}}}>           
            <Typography sx={{ flex: 1, fontSize:25, marginTop:{ xs: 1, md: 5}}}><TitleWriting text="Portefolio de" /></Typography>
            <Typography sx={{ flex: 1, fontSize:25, marginTop:{ xs: 1}, marginBottom:{xs:1, md:10}}}><TitleWriting text="Morgane Maréchal" /></Typography>
        </Box>
    );
}

export default ProfileCard;