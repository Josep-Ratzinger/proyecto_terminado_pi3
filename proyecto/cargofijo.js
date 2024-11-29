document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("cargoFijoChart").getContext("2d");

    const data = {
        labels: ["BT2", "BT3", "BT4", "BT5DR"], // Actualizado
        datasets: [
            {
                label: "Cargo Fijo Mensual (S/)",
                data: [25.62, 24.51, 24.51, 7.25], // Actualizado
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
                    color: "#0c0c0c" // Negro
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "#0c0c0c" // Negro
                },
                grid: {
                    color: "rgba(0, 0, 0, 0.1)" // Gris claro
                }
            },
            y: {
                ticks: {
                    color: "#0c0c0c" // Negro
                },
                grid: {
                    color: "rgba(0, 0, 0, 0.1)" // Gris claro
                },
                beginAtZero: true // Asegurar que el eje Y comience en 0
            }
        }
    };

    new Chart(ctx, {
        type: "bar",
        data: data,
        options: options
    });
});









