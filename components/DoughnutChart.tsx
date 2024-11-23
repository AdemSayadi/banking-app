"use client";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts=[]}: DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label: "Banks",
                data: [1250, 1000, 500],
                backgroundColor: ['#076B6B', '#E9C46A', '#F4A261'],
            }
        ],
        labels : ["Bank1", "Bank2", "Bank3"]

    }
    return (
        <Doughnut data={data}
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}/>
    );
};

export default DoughnutChart;
