var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['21', '22-23', '24-25', '26-29', '30-34', '35-49', '50-65', '65+'],
        datasets: [{
            label: 'Age',
            data: [83.2, 84.2, 83.1, 80.7, 77.5, 75, 67.2, 49.3],
            backgroundColor: [
                '#6394a5'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Alcohol consumption by age group',
                font: {
                    size: 32
                }
            },
            subtitle: {
                display: true,
                text: '22-23 year olds consume alcohol more than any age group.',
                font: {
                    size: 24
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});