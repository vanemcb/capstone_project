import React from "react";
import { Doughnut } from 'react-chartjs-2';

const DouByPosition = ({ dicCompany, position }) => {
  
  let average_salary = 0;
  let average_bonus = 0;

  if (dicCompany) {
    console.log(dicCompany)
    console.log(dicCompany.salaries_by_level)
    average_salary = dicCompany.salaries_by_level[position].average_salary
    average_bonus = dicCompany.salaries_by_level[position].average_bonus;
  }
  return (
    <div>
      <Doughnut
        data={{
          labels: ['Average Salary', 'Average Bonus'],
          datasets: [
            {
              label: 'AVERAGE',
              data: [average_salary, average_bonus],
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

export default DouByPosition;
