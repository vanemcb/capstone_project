import React from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function PopOver({ company, open, handleClose, title}) {

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle className="text-center" onClose={handleClose}>
          {company}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              typography: 'body1',
              '& > :not(style) + :not(style)': {
                ml: 2,
              },
            }}
           
          >
            {title.length !== 0 && title.positions_list ?
              title['positions_list'].map(value => (
                <Link
                  to={{
                    pathname: `/by_company/charts/${company}/${value}`,
                    data: [company, value, title.benefits]
                  }}
                  underline="hover" >
                  {value}
                </Link>
              )) : null}
          </Box>
        </DialogContent>
        <BootstrapDialogTitle className="text-center" onClose={handleClose}>
          Reported non-salary benefits
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              typography: 'body1',
              '& > :not(style) + :not(style)': {
                ml: 2,
              },
            }}
          >
            {title.length !== 0 && title.positions_list ?
              title['benefits'].map(value => (
                <p>
                  - {value}
                </p>
              )) : <Link underline="hover" >
                No data
              </Link>}
          </Box>  
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}


