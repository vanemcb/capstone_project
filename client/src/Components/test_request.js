// import React from "react";
const axios = require('axios');

async function testRequest() {
  return axios.get('http://localhost:5000/')
  .then(res => {
    return (res.data);
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });
};

const body = await testRequest()
console.log(body)


// const tasks = [
//   {
//     'name': 'Write for Envato Tuts+',
//     'duration': 120
//   },
//   {
//     'name': 'Work out',
//     'duration': 60
//   },
//   {
//     'name': 'Procrastinate on Duolingo',
//     'duration': 240
//   }
// ];


// const task_names = tasks.map(function (task, index, array) {
//   return task.duration;
// });

// console.log(task_names)
const levels =

{
  "PANDEV": {
    "L5": 7250,
    "L1": 3366,
    "L4": 6800,
    "L2": 8000
  },
  "Mercado Libre": {
    "L3": 4600,
    "L5": 10250,
    "L0": 1500,
    "L1": 2200,
    "L2": 3200
  },
  "Actualiza": {
    "L5": 8500,
    "L4": 5500,
    "L3": 4500,
    "L0": 800,
    "L1": 1900
  }
};

