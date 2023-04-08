import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
export const Graph = ({data,color}) => {
    
    return (
      <Line
							data={{
								// Name of the variables on x-axies for each bar
								labels: data.date_list,
								datasets: [
									{
										// Label for bars
                    label:data.student,
										// Data or value of your each variable
										data: data.values,
										// Color of each bar
										backgroundColor: [
											color,
											
										],
										// Border color of each bar
										borderColor: [
											color,
											
										],
										borderWidth: 2,
										
										
									},
								],
							}}
							// Height of graph
							height={400}
							width={1000}
							options={{
								plugins: {
									legend: { display: true },
								},

								responsive: true,
								maintainAspectRatio: false,
								scales: {
									x: {
										grid: {
											display: false,
										},
									},
									y: {
                    beginAtZero: true,
										grid: {
											display: false,
										},
										ticks: {
											stepSize: 1,
                      
										},
									},
								},
							}}
						/>
    );
  };