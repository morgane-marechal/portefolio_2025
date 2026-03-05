import { Box } from '@mui/material';


const About = () => {

 const presentation =  `Développeuse web passionnée, j'ai mis un point d'honneur dans mon apprentissage à privilégier la POO et certains frameworks javascript et typescript comme React.js et Adonis.js.
            J'ai travaillé pendant deux ans en entreprise sur un framework interne qui demandait une grande minutie. Durant cette période, j'ai également pu apprécié le travail en équipe et l'entraide, que ce soit dans la recherche, la correction de bugs ou la relecture de code.
            Cela m'a d'autant motivé à écrire du code propre et maintenable pour le reste de l'équipe.
            Durant ma formation, j'ai également beaucoup travaillé avec PHP et Symfony.
            Curieuse, autonome et rigoureuse, j'aime aussi apprendre par moi-même, en ce moment je m'intéresse au monde de l'Internet des objets et je tente de développer une application avec Arduino et React Nativ.
            Ouverte aux opportunités en télétravail ou en présentiel, je cherche à rejoindre une équipe pour créer des solutions web.`


    return (
        <Box sx={{width: { xs: "100%", md: '60%'},textAlign: 'justify'}} >
          <p >A propos</p>
          <p>
            {presentation}
          </p>
        </Box>
    );
}

export default About;