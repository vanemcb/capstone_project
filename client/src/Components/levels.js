import React, { useEffect, useState, Fragment } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Levels = () => {
  const level = ["L0", "L1", "L2", "L3", "L4", "L5"];
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360
      }}
    >
          <ListItem sx={{ bgcolor: "#DEE0E6" }}>
        <ListItemText primary="Levels" className="text-center" />
      </ListItem>
      <Divider />
      {level.map(value => (
        <ListItem className="col-md-auto">
          
            <Avatar>
              {value}
            </Avatar>

        </ListItem>
      ))}
    </List>
  );
};

export default Levels;