import React, { useState, useEffect } from "react";
import Header from '../../components/Header/Header'
import { Line, Bar } from "react-chartjs-2";

const data = {
    labels: ['Graduated', 'Working with Data'],
    datasets: [
      {
        label: 'Number of Students',
        data: [100, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

function Dashboard() {

     const [showData, setShowData] = useState('graduated');

  const onRadioButtonChange = (e) => {
    setShowData(e.target.value);
  };

  return (
    <div>
        <Header/>
      <div>
        <input
          type="radio"
          value="graduated"
          checked={showData === 'graduated'}
          onChange={onRadioButtonChange}
        />
        Graduated
        <input
          type="radio"
          value="workingWithData"
          checked={showData === 'workingWithData'}
          onChange={onRadioButtonChange}
        />
        Working with Data
      </div>
      <Bar
        data={showData === 'graduated' ? data : data}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default Dashboard