import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(annotationPlugin);
function LineChart(props) {
    console.log(props)
    const chartRef = useRef();
    const RADIUS = 4.5;
    const CIRCLE_LINE_WIDTH = 2.5;
    const GAP = 10;
    const TARGET_SCORE = 680;
    let secondLineRange = (50 / 100) * TARGET_SCORE;
    const data = {
        type: 'line',
        labels: ["", "", "", "", ""],
        datasets: [{
            backgroundColor: "white",
            borderColor: "#C4C4C4",
            borderWidth: 1,
            data: props.chartValues,
            fill: false,
            pointBorderWidth: CIRCLE_LINE_WIDTH,
            pointRadius: RADIUS,
            tension: 0,
            pointBorderColor: function (context) {
                let color = '#787878';
                if (context?.dataIndex !== 0) {
                    const prevVal = parseInt(localStorage.lineChartPrevRecValue) || 0;
                    if (context?.raw < prevVal) {
                        color = '#E06868';
                    } else if (context?.raw > prevVal) {
                        color = '#78C885';
                    }
                }
                localStorage.lineChartPrevRecValue = context?.raw || 0;
                return color;
            }
        }]
    };
    const options = {
        scaleShowLabels: false, // to hide vertical lables
        hover: { mode: null },
        layout: {
            padding: {
                left: 8,
                right: 20,
                top: 24,
                bottom: 12
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: { enabled: false },
            annotation: {
                annotations: {
                    line1: {
                        id: 'A',
                        type: 'line',
                        yMin: 1,
                        yMax: 1,
                        borderColor: '#C4C4C4',
                        borderWidth: '1px',
                        borderDash: [3, 3]
                    },
                    line2: {
                        id: 'B',
                        type: 'line',
                        yMin: secondLineRange,
                        yMax: secondLineRange,
                        borderColor: '#C4C4C4',
                        borderWidth: '1px',
                        borderDash: [3, 3]
                    },
                    line3: {
                        id: 'C',
                        type: 'line',
                        yMin: TARGET_SCORE,
                        yMax: TARGET_SCORE,
                        borderColor: '#2F2F2F',
                        borderWidth: '1px',
                        borderDash: [3, 3],
                        label: {
                            content: "Target" + " " + TARGET_SCORE,
                            color: '#2F2F2F',
                            textAlign: 'start',
                            position: 'start',
                            yAdjust: 0,
                            xAdjust: -24,
                            enabled: true,
                            backgroundColor: '#ffffff',
                            xPadding: 8,
                            yPadding: -3,
                            fontWeight: 500,
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            font: {
                                size: 16
                            }
                        }
                    }
                }
            }
        },
        scales: {
            x: {
                angleLines: {
                    display: false
                },
                grid: {
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    display: false
                },
            },
            y:
            {
                angleLines: {
                    display: false
                },
                ticks: {
                    display: false
                },
                grid: {
                    drawBorder: false,
                    display: false
                }
            }
        },
        animation: {
            onComplete: function (context) {
                let ctx = chartRef?.current?.ctx;
                chartRef?.current?._metasets?.[0]?.dataset?.points?.forEach((point, index) => {
                    let labelValue = data?.datasets?.[0]?.data?.[index] || '';
                    const colorCode = point?.options?.borderColor;
                    ctx.font = "500 14px 'Roboto'";
                    ctx.fillStyle = colorCode;
                    ctx.textAlign = "center";
                    ctx.textBaseline = "bottom";
                    var x = point?.x;
                    var y0 = point?.y;
                    var y;
                    if (colorCode === '#78C885') { // green
                        y = y0 - GAP;
                    } else {// red and gray
                        ctx.textBaseline = "top";
                        y = y0 + GAP
                    }

                    if (labelValue * 1 == 0) {
                        labelValue = '0';
                    };
                    ctx?.fillText(labelValue, x, y);
                });
            }
        }
    };
    return (
        <div style={{ position: "relative" }}>
            <Line ref={chartRef} id='lineChart' width="250" height="138" data={data} options={options}
            />
        </div>
    );
}
export default LineChart;