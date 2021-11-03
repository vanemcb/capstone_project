import React from "react";
import Chart from "react-google-charts";
import { Scatter } from 'react-chartjs-2';

const data = [
  [67, 0],
  [88, 0],
  [77, 0],
  [93, 0],
  [85, 0],
  [91, 1],
  [71, 1],
  [78, 1],
  [93, 1],
  [80, 1],
  [82, 2],
  [75, 2],
  [80, 2],
  [90, 2],
  [72, 2],
  [75, 3],
  [68, 3],
  [98, 3],
  [82, 3],
  [94, 3],
  [79, 4],
  [95, 4],
  [86, 4],
  [67, 4],
  [60, 5],
  [80, 5],
  [92, 5],
  [81, 5],
  [79, 5],
];

const options = {
  chart: {
    title: "Students' Final Grades",
    subtitle: 'based on hours studied',
  },
  hAxis: { title: 'Hours Studied' },
  vAxis: { title: 'Grade', format: 'decimal' },
  legend: 'none'

};
const ScatterByPosition = () => {
  return (
    // <Chart
    //   chartType="Scatter"
    //   data={data}
    //   options={options}
    //   loader={<div>Loading Chart</div>}
    //   width="600px"
    //   height="400px"

    // />
    <div>
      <Scatter
        data={{
          labels: ['L0', 'L1', 'L2', 'L3', 'L4', 'L5'],
          datasets: [
            {
              label: 'General Median Salary',
              data: data,
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
  );
}
export default ScatterByPosition;
