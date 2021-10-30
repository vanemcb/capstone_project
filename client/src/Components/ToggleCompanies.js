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

const ToggleCompanies = ({ setDicCompany, setCompany }) => {

  const [companies, setCompanies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const [button, setButton] = useState("")


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickButton = async (e) => {
    setCompany(e.target.id)
    const getValue = await getInfo(e.target.id)
    setDicCompany(getValue)
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  console.log(companies)

  const getInfo = async (comp) => {
    try {
      const response = await fetch("http://localhost:5000/by_company/" + comp);
      const jsonData = await response.json();
      //setInfo(jsonData);
      //setDicCompany(jsonData)
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <Fragment>
      <Box style={{ width: 650, margin: "auto" }} className="mt-5">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {companies && companies.companies_list ?
            companies.companies_list.slice(0, 5).map(value => (
            <Grid item xs={2} sm={4} md={4} key={value}>
              <Item
                type="button"
                id={value}
                onClick={handleClickButton}
              >
                {value}
              </Item>
            </Grid>
          )): null}
          <Grid item xs={2} sm={4} md={4} key="more">
            <Item
              type="button"
              id="more"
              onClick={handleClickOpen}
            >MORE +
            </Item>
          </Grid>
        </Grid>
      </Box>


      {/* <PopoverCompanies open={open} handleClose={handleClose} companies={companies} /> */}

    </Fragment>
  );
};

export default ToggleCompanies;
