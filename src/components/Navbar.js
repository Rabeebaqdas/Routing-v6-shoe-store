import * as React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shoes Store
          </Typography>
        <Link to="/">  <Button color="inherit" id="btn">Home</Button></Link>
        <Link to="/about"><Button color="inherit" id="btn">About</Button></Link>
        <Link to="/product"> <Button color="inherit" id="btn">Product</Button></Link>
        <Link to="/contact"><Button id="btn">Contact Us</Button></Link>
        <Link to="/login"><Button color="inherit" id="btn">Login</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

