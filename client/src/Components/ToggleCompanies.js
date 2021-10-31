import React, { useEffect, useState, Fragment } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import PopoverCompanies from "./PopoverCompanies";
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ToggleCompanies = ({ setDicCompany }) => {

  const [companies, setCompanies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [button, setButton] = useState("")


  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClickButton = async (e) => {
    console.log("ENTREEEEE")
    await getInfo(e.target.value)
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  useEffect(() => {
    fetch("http://localhost:5000/by_company")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setCompanies(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getInfo = async (comp) => {
    try {
      const response = await fetch("http://localhost:5000/by_company/" + comp);
      const jsonData = await response.json();
      setDicCompany(jsonData)
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (

    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      {companies && companies.companies_list ?
        companies.companies_list.slice(0, 5).map(value => (
          <button 
            className="btn btn-secondary mr-2"
            type="button"
            onClick={handleClickButton}
            value={value}
            key={value}>
              {value}
          </button>
        )): null
      }
      <button
        type="button"
        className="btn btn-secondary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        >
          More +
      </button>
      <PopoverCompanies companies={companies} handleClickButton={handleClickButton}/>
    </div>
  );
};

export default ToggleCompanies;
