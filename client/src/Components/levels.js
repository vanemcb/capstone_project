import React, { useEffect, useState, Fragment } from "react";

const Levels = () => {

    const [dict, setDict] = useState(null);
    const level = ["L0", "L1", "L2", "L3", "L4", "L5"];

    const getDict = async (comp) => {
        try {
            const response = await fetch("http://localhost:5000/by_company");
            const jsonData = await response.json();
            setDict(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getDict();
    }, []);

    let level_list = [];
    if (dict) {
        const l = { "L0": "No data", "L1": "No data", "L2": "No data", "L3": "No data", "L4": "No data", "L5": "No data" };

        for (const key in l) {
            if (key in dict.company_median_salary[dict.company_name]) {
                l[key] = dict.company_median_salary[dict.company_name][key];
            }
        }
        for (const key2 in l) {
            level_list.push(l[key2]);
        }
    }

    return (

        <ul className="list-group text-center vertical-align-middle" style={{ width: '100%' }}>
            <li className="list-group-item active " style={{
                background: "#DEE0E6",
                color: "black",
                borderColor: "white",
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
            }}>
                {dict ? dict.company_name : "No data"}
            </li>
            {level_list.map(value => (
                <li className="list-group-item " key={value} style={{
                    height: '60px',
                    borderRightColor: "#B0B0B000",
                    borderLeftColor: "#B0B0B000",
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'
                }}>
                    {value} USD
                </li>
            ))}
        </ul>
    );
};

export default Levels;