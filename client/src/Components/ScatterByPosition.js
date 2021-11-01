import React from "react";
import Chart from "react-google-charts";

const rows = [
  ["L0", 40],
  ["L1", 20],
  ["L2", 20],
  ["L3", 40],
  ["L4", 60],
  ["L5", 20]
];

const levelTicks = ["L0", "L1", "L2", "L3", "L4", "L5"]

const data = [
  ["L0", 67],
  ["L0", 88],
  ["L0", 77],
  ["L0", 93],
  ["L0", 85],
  ["L0", 91],
  ["L0", 71],
  ["L1", 78],
  ["L1", 93],
  ["L1", 80],
  ["L1", 82],
  ["L1", 75],
  ["L1", 80],
  ["L1", 90],
  ["L2", 72],
  ["L2", 75],
  ["L2", 68],
  ["L2", 98],
  ["L2", 82],
  ["L2", 94],
  ["L2", 79],
  ["L2", 95],
  ["L3", 86],
  ["L3", 67],
  ["L3", 60],
  ["L3", 80],
  ["L3", 92],
  ["L3", 81],
  ["L3", 79],
  ["L3", 83],
  ["L3", 75],
  ["L4", 80],
  ["L4", 71],
  ["L4", 89],
  ["L4", 92],
  ["L4", 85],
  ["L4", 92],
  ["L4", 78],
  ["L4", 95],
  ["L4", 81],
  ["L4", 64],
  ["L5", 85],
  ["L5", 83],
  ["L5", 96],
  ["L5", 77],
  ["L5", 89],
  ["L5", 89],
  ["L5", 84],
  ["L5", 92],
  ["L5", 98],
];

const options = {
  // chart: {
  //   title: "Students' Final Grades",
  //   subtitle: 'based on hours studied',
  // },

  hAxis: { title: 'Salary',
    format: 'string',
    ticks: levelTicks },
  vAxis: { title: 'Levels' },
};
const ScatterByPosition = () => {
  return (
    <Chart
      columns={[
        { type: "string", label: "Salary" },
        { type: "number", label: "Value 1" }
      ]}
      chartType="Scatter"
      //data={data}
      rows={data}
      options={options}
      loader={<div>Loading Chart</div>}
      width="600px"
      height="400px"

    />
  );
}
export default ScatterByPosition;
