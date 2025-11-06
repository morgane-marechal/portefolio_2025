import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const Projects = () => {
 
    const projectsItems = [
    { label: "Système informatique de gestion des bibliothèques", description: "", techno:[], href: "#about", picture: '', lienGH: '', lienProjet:'' },
    { label: "Projet IoT de détection de qualité de l'air", description: "", techno:[], href: "#about", picture: '', lienGH: '', lienProjet:'' },
    { label: "Système de backup de base de données", description: "", href: "#about", techno:[], picture: '', lienGH: '' },
    { label: "Système informatique de gestion des bibliothèques", description: "", techno:[], href: "#about", picture: '', lienGH: '', lienProjet:'' },
  ];


    return (
        <Box>
          <h2>Projets</h2>
          <p>Mes projets...</p>
        </Box>
    );
}

export default Projects;