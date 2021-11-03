import React from "react";
import { Bar } from 'react-chartjs-2';

const BarByFilter = ({ dicFilter, filter }) => {

  let label = [];
  let keys =[];
  let values = [];
  let title ='';

  function getData(keys, values, dict) {
    for (let key of keys) {
      if (dict[key] !== undefined) {
        values.push(dict[key])
      } else {
        values.push(0)
      }
    }
    return values
  }

  if (filter === "gender") {
    label = ["Male", "Female", "Non binary", "Other", "Prefer not to say" ];
    keys = ["male", "female", "non_binary", "other", "prefer_not_to_say" ];
    values = getData(keys, values, dicFilter)
    title = "Gender"
  }
  if (filter === "english_level") {
    label = ["None", "A1", "A2", "B1", "B2", "C1", "C2"];
    values = getData(label, values, dicFilter)
    title = "English level"
  }
  if (filter === "company_location") {
    label = ["Colombia", "USA", "Canada", "Latin America", "Outside Latin America"];
    keys = ["colombia", "usa", "canada", "latam", "olatam"];
    values = getData(keys, values, dicFilter)
    title = "Company Location"
  }
  if (filter === "education_level") {
    label = ["Primary Education", "Secondary Education", "University - Graduate degree", "University - Post Graduate degree", "Doctor", "Post-Doctor"];
    keys = ["primary", "secondary", "u_degree", "u_post_degree", "doctor", "post_doctor"];
    values = getData(keys, values, dicFilter)
    title = "Education Level"
  }
  if (filter === "coding_learn") {
    label = ["Self-Study", "Bootcamp", "Secondary Education", "University", "Other"];
    keys = ["self_study", "bootcamp", "secondary", "university", "other"];
    values = getData(keys, values, dicFilter)
    title = "Coding"
  }

  return (
    <div>
      <Bar
        data={{
          labels: label,
          datasets: [
            {
              label: 'Survey population by ' + title,
              data: values,
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

export default BarByFilter;
