import React, { useEffect, useState } from "react";
import PopoverCompanies from "./PopoverCompanies";

const ToggleCompanies = ({ setDicCompany, setPosition }) => {

    const [companies, setCompanies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleClickButton = async (e) => {
        setPosition("")
        await getInfo(e.target.value)
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

        <div className="btn-toolbar justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
            {companies && companies.companies_list ?
                companies.companies_list.slice(0, 5).map(value => (
                    <button
                        className="btn btn-secondary mr-2"
                        type="button"
                        onClick={handleClickButton}
                        value={value}
                        key={value}
                        style={{ width: 150, minHeight:"40px", background: '#A7C3D1', borderColor: 'white', color: "#424242" }}>
                        {value}
                    </button>
                )) : null
            }
            <button
                type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                style={{
                    background: '#A7C3D1',
                    borderColor: 'white',
                    color: "#424242",
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex'
                }}
            >
                +
            </button>
            <PopoverCompanies companies={companies} handleClickButton={handleClickButton} />
        </div>
    );
};

export default ToggleCompanies;
