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

const ListCompanies = () => {

    const [data, setData] = useState(null);
    const [title, setTitle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [company, setCompany] = useState("");
    const [open, setOpen] = useState(false);
    const setValue = (event) => setCompany(event.target.id)

    const handleClickOpen = async (e) => {
        const title2 = await getTitles(e.target.id);
        setValue(e);
        setTitle(title2);
        console.log(e.target.id);
        setOpen(true);
        console.log(title2);
    };

    //console.log(title);
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


    const getTitles = async (comp) => {
        try {
            //console.log(comp);
            const response = await fetch("http://localhost:5000/by_company/" + comp);
            const jsonData = await response.json();
            //setTitle(jsonData);
            //console.log(jsonData);
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
                    {data.map(value => (
                        <Grid item xs={2} sm={4} md={4} key={value}>
                            <Item
                                type="button"
                                id={value}
                                onClick={handleClickOpen}
                            >{value}
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>


            <PopOver open={open} company={company} handleClose={handleClose} title={title} />

        </Fragment>
    );
};

export default ListCompanies;
