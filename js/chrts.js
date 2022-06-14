let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Surgery', 'Conservative', 'Pedodontics', 'Advanced', 'Treatment', 'Orange'],
        datasets: [{
            label: 'Casas from 01-01-2022 till Now',

            data: [23245, 234245, 123126, 9847, 349847, 2343],
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 159, 64, 0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



let ctxII = document.getElementById('myChartII').getContext('2d');
let myChartII = new Chart(ctxII, {
    type: 'bar',
    data: {
        labels: ['Al Montaza', 'East', 'Middle', 'West', 'Al Gomrok', 'Al Agamy', 'Al Amria', 'Al Borg'],
        datasets: [{
            label: 'Dentist Through The eight Medical Districts of Alexandria',

            data: [23245, 43245, 12126, 9847, 34947, 23843, 34223, 23223],
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(255, 206, 86, 0.3)',
                'rgba(75, 192, 192, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(255, 206, 212, 0.3)',

                'rgba(255, 159, 64, 0.3)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 206, 212, 1)',

                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});