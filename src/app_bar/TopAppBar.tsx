import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Grid from '@mui/material/Unstable_Grid2'; 
import { Container } from '@mui/material';

function TopAppBar() {
  return (
    <div>
      <AppBar position="static" >
          <Toolbar>
            <div className="w-full flex">
              <div className="flex items-center justify-start">
                  <IconButton  size="large" edge="start" color="inherit" aria-label="menu">
                    <BatteryChargingFullIcon />
                  </IconButton> 
                  <Typography variant="button" component="div" >
                    Gorilla MRP
                  </Typography>
              </div>
              <div className="grow flex justify-evenly items-center">
                <Typography variant='button' component="div" >
                    SELL
                </Typography>
                <Typography variant='button' component="div" >
                    MANUFACTURE
                </Typography>
                <Typography variant='button' component="div" >
                    PURCHASE
                </Typography>
                <Typography variant='button' component="div" >
                    STOCK
                </Typography>
                <Typography variant='button' component="div" >
                    ITEMS
                </Typography>
                <Typography variant='button' component="div" >
                    CONTACTS
                </Typography>
              </div>
              <div className="flex justify-end items-center" >
                <Button color="inherit">Login</Button>
              </div>
            </div>
          </Toolbar>
      </AppBar>
     </div> 
  );
}

const container = {
  display: 'flex'
}

export default TopAppBar;   
