import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const descSIGB = `Application qui sert à gérer les documents disponibles en bibliothèque.
Il y a une partie admin qui permet d'ajouter des documents et de gérer les utilisateurs et leurs emprunts.
Les usagers peuvent voir les documents disponibles en bibliothèque et les emprunter`;

const descBlog = `Un blog créer avec Symfony pour publier des articles et pouvoir les commenter
L'utilisateurs peut se voir attribuer différents rôles et gérer la partie admin via un CRUD`;

const descIOT = `Un simple projet afin de récolter les données d'un capteur sur le dioxyde de carbon et de les afficher.
Ce projet est vraiment dans sa phase de conception. A terme, il permettra la conservation et la valorisation des données via un affichage mobile avec React Native`

const descShop =`Création d'une boutique en ligne en PHP natif avec composer et altorouter.
 Utilisation d'une architecture Model-View-Controller avec un router et une API REST. Travail en équipe à l'aide de Git, GitHub et un sytème de tickets sur Trello
`;
const Projects = () => {
    const projectsItems = [
    { label: "Système informatique de gestion des bibliothèques", description:descSIGB , techno:["React.js", "Adonis.JS", "PostGres", "Docker", "Material UI", "Github Actions"], href: "#about", picture: '', lienGH: [{back :"https://github.com/morgane-marechal/opac_server", front:"https://github.com/morgane-marechal/opac_web"}], lienProjet:'' },
    { label: "Blog", description:descBlog, techno:["PHP", "Symfony", "Postgres", "Docker", "Twig", "Boostrap"], href: "#about", picture: '', lienGH: 'https://github.com/morgane-marechal/symfony_blog.git', lienProjet:'' },
    { label: "Projet IoT de détection de qualité de l'air", description:descIOT, techno:["C++", "Arduino IDE", "Firebase", "React Native"], href: "#about", picture: '', lienGH: '', lienProjet:'' },
    { label: "Système de backup de base de données", description: "Une application web pour enregistrer les bases de données et faire des backups régulier pour les conserver", href: "#about", techno:["Fastify.js","React.js", "PostGres", "Docker"], picture: '', lienGH: 'https://github.com/morgane-marechal/dockerisation-safebase' },
    { label: "Boutique en ligne ", description:descShop, techno:["PHP", "composer", "Javascript", "SQL", "CSS"], href: "#about", picture: '', lienGH: 'https://github.com/morgane-marechal/boutique-en-ligne', lienProjet:'' },

  ];


    return (
        <Box>
          <h2>Projets</h2>
          {projectsItems.map((project, index) => (
          <Box sx={{width: { xs: "100%", md: '60%'},textAlign: 'justify'}}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", marginTop:1, backgroundColor:"rgb(107, 75, 27, 0.1)"}}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {project.label}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>

                <Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {project.techno?.map((tech, i) => (
                    <Chip key={i} label={tech} size="small" />
                  ))}
                </Box>
              </CardContent>

              <CardActions>
                {typeof project.lienGH === "string" && project.lienGH && (
                  <Button size="small" href={project.lienGH} target="_blank">
                    GitHub
                  </Button>
                )}
                {Array.isArray(project.lienGH) &&
                  project.lienGH.map((repo, index) => (
                    <Box key={index} sx={{ display: "flex", gap: 1 }}>
                      {repo.front && (
                        <Button
                          size="small"
                          href={repo.front}
                          target="_blank"
                        >
                          Front
                        </Button>
                      )}
                      {repo.back && (
                        <Button
                          size="small"
                          href={repo.back}
                          target="_blank"
                        >
                          Back
                        </Button>
                      )}
                    </Box>
                  ))}
              </CardActions>
            </Card>
          </Box>
      ))}
        </Box>
    );
}

export default Projects;