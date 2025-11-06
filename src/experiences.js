import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Padding } from '@mui/icons-material';


const Experiences = () => {
 
    return (
        <Box>
            <h2>Expériences</h2>
                <Box sx={{paddingBottom: { xs: "5%", md: "3%"},width: { xs: "100%", md: '60%'}}}>
                    <Typography variant="xpTitle"> Développeuse web en Alternance dans l’entreprise Index Education </Typography>                  
                    <p> MARSEILLE - 2023-2025</p>
                    <Box sx={{marginLeft:'5%'}}> 
                        <li> création d’affichages et de composants en javascript et typescript, accéssibilité, POO, ...</li>
                        <li>outil de versionning (SmartGit)</li> 
                        <li>outils internes de suivi des tâches </li>
                        <li>travail en équipe et en coopération avec d’autres équipes (design, back-end)</li>
                    </Box>
                </Box>
                <Box sx={{paddingBottom: { xs: "5%", md: "3%"},}}>
                    <Typography variant="xpTitle">Professeure Documentaliste</Typography>
                    <p>MARSEILLE - 2016-2022 </p>
                    <Box sx={{marginLeft:'5%'}}> 
                        <li> gestion de documents</li>
                        <li>gestions des élèves</li> 
                        <li>mise en peuvre de projets culturels </li>
                    </Box>
                </Box>
                <Box sx={{paddingBottom: { xs: "5%", md: "3%"},}}>
                    <Typography variant="xpTitle">Communication web</Typography>
                    <p>MARSEILLE - 2015</p>
                    <Box sx={{marginLeft:'5%'}}>
                        <li>création et gestion d'un site wordpress</li>
                        <li>rédaction web avec SEO</li>
                    </Box>
                </Box>


        </Box>
    );
}

export default Experiences;