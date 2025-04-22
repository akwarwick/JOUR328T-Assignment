var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              '21',
              '22-23',
              '24-25',
              '26-29',
              '30-34',
              '35-49',
              '50-64',
              '65+',
            ],
            datasets: [{
              label: 'Percentage who use cocaine',
              data: [4.8, 4.5, 4, 3.2, 2.1, 1.5, 0.9, 0],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(205, 66, 211)',
                'rgb(240, 166, 78)',
                'rgb(78, 240, 194)',
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Cocaine use by age group',
                font: {
                    size: 32
                }
              },
              subtitle: {
                display: true,
                text: 'No age group exceeds 5% cocaine use.',
                font: {
                    size: 24
                }
              }
            }
          }
        });