import * as React from 'react';
import { Modal, Box, Typography, Link } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import SchoolIcon from '@mui/icons-material/School';
import EmailButton from './mail';
import GithubButton from './ghButton'
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ProfileCard from './profileCard';
import Experiences from './experiences';
import Projects from './projects';
import About from './about';
import Cursus from './cursus';
import LineHorizon from './lineHorizon';

export default function LandingPage() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false); 

  const menuItems = [
    { label: "Profil", href: "#about", icon: <InfoIcon /> },
    { label: "Expériences", href: "#experience", icon: <WorkIcon /> },
    { label: "Formation", href: "#cursus", icon: <SchoolIcon /> },
    { label: "Projets", href: "#projects", icon: <FolderIcon /> },

  ];

  const handleNavClick = (href, index) => {
    setValue(index);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        background: "linear-gradient(to bottom, rgb(20, 14, 4),rgb(68, 67, 67))",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: 400 },
          paddingLeft:{xs:0, md:8},
          p: 2,
          borderBottom: { xs: "1px solid #444", md: "none" },
          bgcolor: "rgba(0,0,0,0.2)",
          position: { xs: "relative", md: "fixed" },
          top: 0,
          left: 0,
          height: { xs: "auto", md: "100vh" },
          overflowY: { xs: "visible", md: "auto" },
          zIndex: 2,
        }}
      >
        <ProfileCard />

        <Box
          sx={{
            mt: 3,
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            gap: 2,
          }}
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              sx={navLinkStyle}
              onClick={() => handleNavClick(item.href, index)}
            >
              {item.label}
            </Link>
          ))}
         
        </Box>

      </Box>

      <Box
        className="light-border"
        sx={{
          display: { xs: "none", md: "block" },
          position: "fixed",
          top: 0,
          left: 400,
          width: "1px",
          height: "100%",
          background: "rgba(255,255,255,0.1)",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <Box className="light-glow" />
      </Box>

      <Box
        sx={{
          flex: 1,
          ml: { xs: 0, md: "400px" }, 
          p: { xs: 2, md: 5 },
          height: "100vh",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        <Box id="about" sx={sectionStyle}><About /></Box>
        <LineHorizon></LineHorizon>
        <Box id="experience" sx={sectionStyle}><Experiences /></Box>
        <LineHorizon></LineHorizon>
        <Box id="cursus" sx={sectionStyle}><Cursus /></Box>
        <LineHorizon></LineHorizon>
        <Box id="projects" sx={sectionStyle}><Projects /></Box>
      </Box>

      <BottomNavigation
        value={value}
        onChange={(e, newValue) => {
          if (newValue < menuItems.length) {
            handleNavClick(menuItems[newValue].href, newValue);
          }
        }}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "rgba(0,0,0,0.8)",
          borderTop: "1px solid #444",
          zIndex: 5,
        }}
      >
        {menuItems.map((item, index) => (
          <BottomNavigationAction
            key={item.href}
            icon={item.icon}
            label={item.label}
            sx={{         color: "white",
              "&.Mui-selected": {
                color: "rgb(211, 155, 82)"
              }, }}
          />
        ))}

      <BottomNavigationAction 
        label="Contact"
        icon={<ContactMailIcon />}
        onClick={() => setOpen(true)}
        sx={{
          color: "white",
          "&.Mui-selected": {
            color: "rgb(211, 155, 82)"
          },
        }}
      />
      </BottomNavigation>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "50%", md: 100 },
            bgcolor: "rgb(30,30,30)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            color: "rgb(211, 155, 82)"
          }}
        >
          <Typography variant="h6" mb={2} sx = {{color : "rgb(211, 155, 82)"}}>
            Me contacter
          </Typography>

          <Box            
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,              
              mt: 2                
            }}
          >
            <EmailButton />           
            <GithubButton />
          </Box>

        </Box>
      </Modal>
    </Box>
  );
}

const navLinkStyle = {
  color: "#bbb",
  fontSize: 18,
  fontWeight: "bold",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": { color: "white" },
};

const sectionStyle = { mb: 8 };

