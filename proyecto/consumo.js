const ctx = document.getElementById('consumoChart').getContext('2d');

const consumoChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'kWh Consumidos',
            data: [120, 135, 100, 160, 140, 180, 175, 200, 190, 210, 220, 205],
            backgroundColor: [
                'rgba(33, 150, 243, 0.7)', // Azul claro
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)',
                'rgba(33, 150, 243, 0.7)'
            ],
            borderColor: [
                'rgba(13, 71, 161, 1)', // Azul profundo
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)',
                'rgba(13, 71, 161, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'black' // Ejes en blanco
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Líneas de cuadrícula más visibles
                }
            },
            x: {
                ticks: {
                    color: 'black' // Etiquetas del eje X en blanco
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Líneas de cuadrícula más visibles
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black' // Texto de la leyenda en blanco
                }
            }
        }
    }
});

