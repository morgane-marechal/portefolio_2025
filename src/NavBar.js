import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static"  sx={{ backgroundColor: '#2A5C8D', display:'flex', flexDirection: "column", width: "50%" }}>
      <Toolbar sx={{display:'flex', flexDirection: "column"}}>
        <Typography variant="h6" sx={{display:'flex', flexGrow: 1, flexDirection:'row'}}>
          <Button 
            sx={{ 
              color: '#f0eae1',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            à propos
          </Button>
        </Typography>
        <Typography variant="h6" sx={{display:'flex', flexGrow: 1, flexDirection:'row'}}>
          <Button 
            sx={{ 
              color: '#f0eae1',
              '&:hover': { backgroundColor: 'rgba(233, 0, 0, 0.1)' }
            }}
          >
            expériences
          </Button>
        </Typography>
                <Typography variant="h6" sx={{display:'flex', flexGrow: 1, flexDirection:'row'}}>
          <Button 
            sx={{ 
              color: '#f0eae1',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            projets
          </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
