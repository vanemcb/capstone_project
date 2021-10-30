import React, { useEffect, useState, Fragment } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardCompany( {dicCompany, company} ) {

  const position = "";

  return (
    <Card sx={{ minWidth: 200, mt: 8}}>
      <CardContent>
        <Typography variant="h5" component="div" className="text-center" sx={{ mb: 0}}>
          {company ? company : "Select company" }
        </Typography>
        <Typography variant="h6" className="text-center" color="text.secondary" sx={{ mb: 2 }}>
          #{position ? position : "Select position"}#
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary" className="text-left">
          COMPANY POSITION:
        </Typography>
        {dicCompany !== null ?
          dicCompany.positions_list.map(value => (
            <Typography variant="body2">
              - {value}
            </Typography>
          )) : <p>
            No data
          </p>}
        
      </CardContent>
    </Card>
  );
}