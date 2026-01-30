import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Cursus = () => {
 
    return (
        <Box sx={{width:{md:'50%', xs:'100%'}}}>
          <h2 >Formations</h2>
                <Box sx={{paddingBottom: { xs: "5%", md: "3%"},}}>
                    <Typography variant="xpTitle"> Centre de formation La Plateforme </Typography>                  
                    <p> MARSEILLE - 2023-2025</p>
                    <Box sx={{marginLeft:'5%'}}> 
                        <li>Conception d'application web et mobiles: rédaction de cahiers des charges, conception avec Figma</li>
                        <li>Familiarisation avec différents languages et frameworks; Javascript, PHP, Python, SQL, React.js, Next.js, Adonis.js, Symfony</li>
                        <li>Travail d'équipe: utilisation d'outils de suivi et de tickets comme Trello, méthode Kanban </li>
                        <li>Utilisation d'outil de versionning: Git, Github</li>
                        <li>Conception et gestion de bases de données SQL</li>
                        <li>Déploiement de sites web avec leurs bases de données</li>
                        <li>Mise en places et automatisation de tests: Japa, Cypress, Github Actions </li>
                        <li>Containeurisation avec Docker</li>
                    </Box>
                </Box>
        </Box>
    );
}

export default Cursus;