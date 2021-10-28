import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';

const BarByCompany = () => {
  const { data } = useLocation();
  console.log(data[2]);  
  const [dict, setDict] = useState([]);
  const getDict = async () => {
    try {
      const response = await fetch(`http://localhost:5000/by_company/${data[0]}/${data[1]}`);
      const jsonData = await response.json();
      setDict(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const level_list = [];
  for (const key in dict.salary_by_level) {
    level_list.push(dict.salary_by_level[key]);
  }

  useEffect(() => {
    getDict();
  }, []);

  return (
    <div>
      <Bar
        data={{
          labels: ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'],
          datasets: [
            {
              label: 'SALARY VS LEVEL',
              data: level_list,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 0.5,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                }
              }
            ]
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 14
                }
              }
            }
          }
        }}
      />
    </div>
  )
}

export default BarByCompany;
