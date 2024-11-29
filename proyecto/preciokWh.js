document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("preciokWhChart").getContext("2d");

    const data = {
        labels: ["BT2", "BT3", "BT4", "BT5DR"], // Actualizado
        datasets: [
            {
                label: "Precio por kWh (S/)",
                data: [0.30, 0.30, 0.50, 0.90], // Valores actualizados de la tabla
                backgroundColor: "rgba(33, 150, 243, 0.5)", // Azul claro
                borderColor: "rgba(33, 150, 243, 1)", // Azul profundo
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: "#0c0c0c" // Texto negro
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "#0c0c0c" // Texto negro
                },
                grid: {
                    color: "rgba(0, 0, 0, 0.1)" // Líneas de cuadrícula gris claro
                }
            },
            y: {
                ticks: {
                    color: "#0c0c0c" // Texto negro
                },
                grid: {
                    color: "rgba(0, 0, 0, 0.1)" // Líneas de cuadrícula gris claro
                },
                beginAtZero: true // Comenzar desde 0 en el eje Y
            }
        }
    };

    new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
});




