import React, { useEffect, useState, Fragment } from "react";

const ListLevels = () => {

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
    const company = "PANDEV"
    const index = companies.indexOf(company);
    console.log(index);
    //const ran = companies[Math.floor(Math.random() * companies.length)];

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
        <Fragment>
            <div class="btn-group-vertical btn-group-lg" role="group">
                {Object.keys(list_levels[index]).map(key => (

                    <button type="button" class="btn btn-info" key={list_levels[index][key]}
                        style={{
                            background: '#E4D8DC',
                            width: 'flex'
                        }}>
                        {list_levels[index][key]}
                    </button>
                ))}
            </div>
        </Fragment>
    );
};

export default ListLevels;