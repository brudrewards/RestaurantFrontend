import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["#EE7556", "#404953", "#5FBD62"],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Red", "Yellow", "Blue"],
};

const Donut = () => {
  return (
    <>
      <Doughnut style={{ width: "150px" }} data={data} />
    </>
  );
};

export default Donut;
