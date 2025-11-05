import * as React from 'react';
import { Box, Link } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';

import ProfileCard from './profileCard';
import Experiences from './experiences';
import Projects from './projects';
import About from './about';

export default function LandingPage() {
  const [value, setValue] = React.useState(0);

  const menuItems = [
    { label: "A propos", href: "#about", icon: <InfoIcon /> },
    { label: "Expérience", href: "#experience", icon: <WorkIcon /> },
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
        background: "linear-gradient(to bottom, rgb(20, 14, 4), #2b2b2b)",
        color: "white",
        px: { xs: 2, md: "10%" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: 300 },
          p: 2,
          borderRight: { md: "1px solid #444" },
          borderBottom: { xs: "1px solid #444", md: "none" },
          bgcolor: "rgba(0,0,0,0.2)",
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
          {menuItems.map((item) => (
            <Link
              key={item.href}
              sx={navLinkStyle}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Box>

      <Box sx={{ flex: 1, p: { xs: 2, md: 5 } }}>
        <Box id="A propos" sx={sectionStyle}><About /></Box>
        <Box id="experience" sx={sectionStyle}><Experiences /></Box>
        <Box id="projects" sx={sectionStyle}><Projects /></Box>
      </Box>

      <BottomNavigation
        value={value}
        onChange={(e, newValue) => handleNavClick(menuItems[newValue].href, newValue)}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "rgba(0,0,0,0.2)",
          borderTop: "1px solid #444",
        }}
      >
        {menuItems.map((item, index) => (
          <BottomNavigationAction
            key={item.href}
            icon={item.icon}
            label={item.label}
            sx={{ color: "white" }}
          />
        ))}
      </BottomNavigation>
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
