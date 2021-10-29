import React, { useEffect, useState, Fragment } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation, Link } from 'react-router-dom';


export default function CardCompany() {

  
  const { data } = useLocation();
  //const info = data[0];
  const company = "PANDEV";
  console.log(data);
  const position = "Full Stack"

  console.log(data)
  return (
    <Card sx={{ minWidth: 200, mt: 8}}>
      <CardContent>
        <Typography variant="h5" component="div" className="text-center" sx={{ mb: 0}}>
          {company}
        </Typography>
        <Typography variant="h6" className="text-center" color="text.secondary" sx={{ mb: 2 }}>
          #{position}#
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary" className="text-left">
          Reported non-salary benefits:
        </Typography>
        {/* {info.length !== 0 && info.positions_list ?
          info['positions_list'].map(value => (
            <Typography variant="body2">
              - {value}
            </Typography>
          )) : <p>
            No data
          </p>} */}
        
      </CardContent>
    </Card>
  );
}