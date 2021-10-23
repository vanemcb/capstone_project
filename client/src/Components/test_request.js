import React from "react";
const axios = require('axios');

// axios.get('http://localhost:5000/by_company/Mercado Libre/Software Engineer')
//   .then(res => {
    
//     const level_list = [];
//     for (const [key, value] of Object.entries(res.data.salary_by_level)) {
//       level_list.push(value)
//     }
//     console.log(level_list);

//   })
//   .catch(err => {
//     console.log('Error: ', err.message);
//   });

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

