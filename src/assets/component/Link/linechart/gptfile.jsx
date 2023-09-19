import React from 'react';
import { Line } from 'react-chartjs-2';

const studentData = {
  labels: ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'],
  datasets: [
    {
      label: 'Math Marks',
      data: [85, 72, 94, 60, 78],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const LineChart3 = () => {
  return (
    <div>
      <h2>Math Marks of Students</h2>
      <Line data={studentData} />
    </div>
  );
};

export default LineChart3;
