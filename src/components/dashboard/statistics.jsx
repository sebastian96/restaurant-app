import React, {useEffect, useState} from 'react';
import Chart from 'chart.js';

const Statistics = () => {
    const randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };

    
    const graphics = () => {
        const config_1 = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    'Exelente',
                    'Bueno',
                    'Regular',
                    'mal',
                ]
            },
            options: {
                responsive: true
            }
        };
    
        const config_2 = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    backgroundColor: [
                        'rgba(54, 215, 150, 1)',
                        'rgba(0, 0, 0, .5)',
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    'Si',
                    'No',
                ]
            },
            options: {
                responsive: true
            }
        };
        
        const ctx_1 = document.getElementById('char_1').getContext('2d');
        window.myPie = new Chart(ctx_1, config_1);
        const ctx_2 = document.getElementById('char_2').getContext('2d');
        window.myPie = new Chart(ctx_2, config_2);
    };

    useEffect(() => {
        graphics();
    }, []);


    return (
        <div className="container">
            <h3 className="w-100 mb-4">Resultados de encuesta</h3>
            <div className="d-flex justify-content-center">
                <div className="col-3">
                    <canvas id="char_1" width="100%" height="100%"></canvas>
                </div>
                <div className="col-3">
                    <canvas id="char_2" width="100%" height="100%"></canvas>
                </div>
            </div>
        </div>
    )
}

export default Statistics;