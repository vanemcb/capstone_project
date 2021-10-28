import React, { useEffect, useState, Fragment } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ListLevels = ({nameCompany}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";

    const companies = Object.keys(data);
    const company = nameCompany;
    const index = companies.indexOf(company);
    console.log(index);
    const ran = Math.floor(Math.random() * 1000);

    const list_levels = [];


    for (const key in data) {
        const l = { "L0": "No data", "L1": "No data", "L2": "No data", "L3": "No data", "L4": "No data", "L5": "No data" };
        for (const key2 in l) {
            if (key2 in data[key]) {
                l[key2] = data[key][key2];
            }
        }
        list_levels.push(l)
    }

    return (
      <List
        sx={{
          width: '100%',
          maxWidth: 360
        }}
      >
            <ListItem sx={{ bgcolor: "#DEE0E6" }}>
          <ListItemText primary={company} className="text-center" />
        </ListItem>
        <Divider />
        {Object.keys(list_levels[index]).map(key => (
          <ListItem button>
            <ListItemAvatar className="ml-5">
                <AttachMoneyIcon />
            </ListItemAvatar>
            <ListItemText primary={list_levels[index][key]} />
          </ListItem>
        ))}
      </List>
    );
};

export default ListLevels;