import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { DiGithubBadge } from "react-icons/di";

const NavbarIcon = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static"  sx={{ backgroundColor: '#2A5C8D', display:'flex', flexDirection: "column", width: "50%" }}>
      <Toolbar sx={{display:'flex', flexDirection: "raw"}}>
        <DiGithubBadge />
      </Toolbar>
    </AppBar>
  );
};

export default NavbarIcon;
