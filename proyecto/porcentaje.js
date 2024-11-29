document.addEventListener("DOMContentLoaded", function () {
    const percentageEl = document.getElementById("percentage");
    const pagoTotalEl = document.getElementById("pagoTotal");
    const extraPagoFrame = document.getElementById("extraPagoFrame");
    const pagoExtraEl = document.getElementById("pagoExtra");
    const waveEl = document.querySelector(".wave");
    const customAlert = document.getElementById("customAlert");
    const closeAlertButton = document.getElementById("closeAlertButton");

    const tarifaActual = "BT3"; // Tarifa simulada.
    const consumoLimite = {
        BT2: 30,
        BT3: 140,
        BT4: 230,
        BT5: 140
    }; // Límites de consumo por tarifa.

    const tarifaDatos = {
        BT2: { cargoFijo: 25.62, precioKWh: 0.30 },
        BT3: { cargoFijo: 24.51, precioKWh: 0.30 },
        BT4: { cargoFijo: 24.51, precioKWh: 0.50 },
        BT5: { cargoFijo: 7.25, precioKWh: 0.90 }
    };

    const cargosExtras = {
        BT2: (exceso) => exceso * 1.34,
        BT3: (exceso) => {
            const punta = exceso * 1.03 * 0.5;
            const media = exceso * 0.99 * 0.3;
            const base = exceso * 0.94 * 0.2;
            return punta + media + base;
        },
        BT4: (exceso) => {
            if (exceso > 5000) return exceso * 2.98;
            else if (exceso > 1000) return exceso * 2.66;
            else if (exceso > 500) return exceso * 1.91;
            else return exceso * 0.85;
        },
        BT5: (exceso) => {
            const punta = exceso * 1.10 * 0.4;
            const media = exceso * 1.03 * 0.4;
            const base = exceso * 0.94 * 0.2;
            return punta + media + base;
        }
    };

    let consumoActual = 0;

    function calculatePagoTotal(tarifa, consumo) {
        const datos = tarifaDatos[tarifa];
        const limite = consumoLimite[tarifa];
        const cargoFijo = datos.cargoFijo;
        const precioKWh = datos.precioKWh;

        let exceso = 0;
        if (consumo > limite) {
            exceso = consumo - limite;
        }

        const cargoExtras = exceso > 0 ? cargosExtras[tarifa](exceso) : 0;
        const consumoNormal = consumo > limite ? limite : consumo;

        const total = cargoFijo + (consumoNormal * precioKWh) + cargoExtras;

        return { total, cargoExtras };
    }

    function showCustomAlert(message) {
        const alertMessage = document.getElementById("alertMessage");
        alertMessage.textContent = message;
        customAlert.style.display = "flex"; // Muestra el modal
    }

    function closeAlert() {
        customAlert.style.display = "none"; // Oculta el modal
    }

    closeAlertButton.addEventListener("click", closeAlert);

    function updateDisplay() {
        const limite = consumoLimite[tarifaActual];

        // Calcular porcentaje basado en el límite.
        const calculatedPercentage = Math.round((consumoActual / limite) * 100);
        percentageEl.innerText = `${calculatedPercentage}%`;

        // Calcular la altura proporcional del agua.
        const waveHeight = Math.min((270 * consumoActual) / limite, 270);
        waveEl.style.height = `${waveHeight}%`;

        // Calcular el pago total y los cargos extras.
        const { total, cargoExtras } = calculatePagoTotal(
            tarifaActual,
            consumoActual
        );

        // Actualizar los valores en pantalla.
        pagoTotalEl.innerText = `S/${total.toFixed(2)}`;
        if (cargoExtras > 0) {
            extraPagoFrame.style.display = "block";
            pagoExtraEl.innerText = `S/${cargoExtras.toFixed(2)}`;
        } else {
            extraPagoFrame.style.display = "none";
        }

        // Alertas por porcentaje.
        if (calculatedPercentage > 90 && calculatedPercentage < 100) {
            showCustomAlert(`¡Atención! Has alcanzado más del 90% de tu consumo permitido para la tarifa ${tarifaActual}. 
Te recomendamos visitar la sección de Tips de Ahorro para optimizar tu consumo.`);
            sendNotification(`¡Atención! 90% de tu consumo permitido alcanzado. Visita "Tips de Ahorro".`);
        } else if (calculatedPercentage === 100) {
            showCustomAlert(`¡Has alcanzado el 100% de tu consumo permitido para la tarifa ${tarifaActual}!
Visita "Tips de Ahorro".`);
            sendNotification("Has alcanzado el 100% de tu consumo permitido.");
        }
    }

    function simulateConsumption() {
        const limite = consumoLimite[tarifaActual];
        const maxConsumo = limite + 30;

        const interval = setInterval(() => {
            if (consumoActual >= maxConsumo) {
                clearInterval(interval);
            } else {
                consumoActual += 10;
                updateDisplay();
            }
        }, 2000);
    }

    function requestNotificationPermission() {
        if ("Notification" in window) {
            Notification.requestPermission();
        }
    }

    function sendNotification(message) {
        if ("Notification" in window && Notification.permission === "granted") {
            new Notification("App Consumo del Mes", {
                body: message,
                icon: "https://cdn-icons-png.flaticon.com/512/6339/6339806.png"
            });
        }
    }

    // Inicializar.
    requestNotificationPermission();
    simulateConsumption();
});




