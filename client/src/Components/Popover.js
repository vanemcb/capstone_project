import React, { useEffect, useState, Fragment } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


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

export default function PopOver({ company, open, handleClose }) {

  const preventDefault = (event) => event.preventDefault();
  const [title, setTitle] = useState(null);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  const url = "http://localhost:5000/by_company/" + company;
  console.log(url);
  const getTodos = async (url) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setTitle(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);


  
  console.log(title)
  


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
            onClick={preventDefault}
          >
            <Link href="#" underline="hover">
              Software Engineer +
            </Link>
            <Link href="#" underline="hover">
              Machine Learning +
            </Link>
            <Link href="#" underline="hover">
              Full Stack +
            </Link>
            <Link href="#" underline="hover">
              API +
            </Link>
            <Link href="#" underline="hover">
              Data +
            </Link>
            <Link href="#" underline="hover">
              DevOps +
            </Link>

          </Box>

        </DialogContent>
        <DialogContent>

        </DialogContent>
      </BootstrapDialog>
    </div>    
  );
}


