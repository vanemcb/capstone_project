import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';

const DouByCompany = () => {
  const { data } = useLocation();

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

  useEffect(() => {
    getDict();
  }, []);

  return (
    <div>
      <Doughnut
        data={{
          labels: ['Average Salary', 'Average Bonus'],
          datasets: [
            {
              label: 'AVERAGE',
              data: [ dict.average_salary, dict.average_bonus],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
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

export default DouByCompany;
