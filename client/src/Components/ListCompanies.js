import React, { useEffect, useState, Fragment } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import PopOver from "./Popover";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ListCompanies= () => {

  const setValue = (event) => setCompany(event.target.id)
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [company, setCompany] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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

  console.log(company);

  return (
    <Fragment>
      <Box style={{ width: 700, margin: "auto" }} className="mt-5">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
          {data.map(value => (
            <Grid item xs={2} sm={4} md={4} key={value}>
              <Item
                type="button"
                onClick={(e) => { handleClickOpen(e); setValue(e)}}
                id={value}
                >{value}
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      <PopOver open={open} company={company} handleClose={handleClose}/>

    </Fragment>
  );
};

export default ListCompanies;