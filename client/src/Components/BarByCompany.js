import React from "react";
import { Bar } from 'react-chartjs-2';

const BarByCompany = ( { dicCompany } ) => {
  
  let level_list = [];

  if (dicCompany) {

    const l = {"L0":0, "L1":0, "L2":0, "L3":0, "L4":0, "L5":0};

    for (const key in l) {
      if (key in dicCompany.company_median_salary[dicCompany.company_name]) {
        l[key] = dicCompany.company_median_salary[dicCompany.company_name][key];
      }
    }    
    for (const key2 in l) {
      level_list.push(l[key2]);
    }
  }

  return (
    <div>
      <Bar
        data={{
          labels: ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'],
          datasets: [
            {
              label: 'General Median Salary',
              data: level_list,
              backgroundColor: [
                'rgba(75, 192, 192, 0.5)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)'
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
