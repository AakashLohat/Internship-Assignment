import React from 'react'
import { Bar, Line, defaults } from "react-chartjs-2"
import "./css/Barchat.css"
// defaults.global.animation.duration = 2
defaults.global.legend.display = false;
function BarChat() {
    return (
        <div className="something__graph">
            <Line data={{
                labels: ['12°', '24°', '26°', '14°', '28°', '30°'],
                datasets: [{
                    label: '9 of votes',
                    data: [6, 12, 18, 9, 25, 27],
                    backgroundColor: [
                        'red', 'blue', 'green',
                        'yellow', 'purple', 'grey'
                    ],
                    borderWidth: 3,
                    barThickness: 12,
                    fill: false,


                },


                ]

            }} height={'100%'} width={'100%'}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        // legend: {
                        //     display: false
                        // },
                        // tooltips: {
                        //     callbacks: {
                        //         label: function (tooltipItem) {
                        //             return tooltipItem.yLabel;
                        //         }
                        //     }
                        // },
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    display: false,


                                },
                                afterCalculateTickRotation: true,
                                gridLines: {
                                    color: "rgba(0, 0, 0, 0)",
                                }
                            }
                        ]
                    }
                }}
            />
        </div>
    )
}

export default BarChat
