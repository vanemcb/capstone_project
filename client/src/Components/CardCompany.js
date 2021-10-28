import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

export default function CardCompany() {

  const { data } = useLocation();
  
  return (
    <Card sx={{ minWidth: 200, mt: 8}}>
      <CardContent>
        <Typography variant="h5" component="div" className="text-center" sx={{ mb: 0}}>
          {data[0]}
        </Typography>
        <Typography variant="h6" className="text-center" color="text.secondary" sx={{ mb: 2 }}>
          #{data[1]}#
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary" className="text-left">
          Reported non-salary benefits:
        </Typography>
        {data[2].map(benefit => (
          <Typography variant="body2">
            - {benefit}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}