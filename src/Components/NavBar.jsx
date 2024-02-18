import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#388E3C", }}>
        <Toolbar>
        <Link to="/" style={{textDecoration:"none", color:"white"}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2,  color:"white"}}
          >
            <RamenDiningIcon   />
          </IconButton>
          </Link>
          <Link to="/" style={{textDecoration:"none", color:"white"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          </Link>
          <Link to="/" style={{textDecoration:"none", color:"white"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,  ml:"20px"}}>
            Random
          </Typography>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
