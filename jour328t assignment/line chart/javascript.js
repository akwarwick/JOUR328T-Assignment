var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['21', '22-23', '24-25', '26-29', '30-34', '35-49', '50-65', '65+'] ,
        datasets: [{
            label: 'Alcohol consumption',
            data: [83.2, 84.2, 83.1, 80.7, 77.5, 75, 67.2, 49.3],
            fill: true,
            borderColor: 'rgba(47, 98, 116)',
            backgroundColor: 'rgba(99, 148, 165, 0.1)',
            tension: 0.1},
        {
            label: 'Marijuana consumption',
            data: [33, 28.4,24.9,20.8,16.4,10.4,7.3,1.2],
            fill: true,
            borderColor: 'rgba(30, 110, 57)',
            backgroundColor: 'rgba(30, 110, 57, 0.17)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Comparing alcohol and marijuana consumption among age groups',
                font: {
                    size: 32
                }
            },
            subtitle: {
                display: true,
                text: 'Consumption of both substances decreases as age progresses.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});