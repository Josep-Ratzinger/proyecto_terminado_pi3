document.addEventListener("DOMContentLoaded", function () {
    const mesSelect = document.getElementById('mes');

    const pagoFijoEl = document.getElementById('pagoFijo');
    const pagoTotalEl = document.getElementById('pagoTotal');
    const pagoExtrasEl = document.getElementById('pagoExtras');

    const tarifas = {
        BT3: { cargoFijo: 24.51, precioKWh: 0.30 },
        BT4: { cargoFijo: 24.51, precioKWh: 0.50 },
        BT5: { cargoFijo: 7.25, precioKWh: 0.90 }
    };

    const consumoMes = {
        enero: { tarifa: 'BT3', kWh: 120 },
        febrero: { tarifa: 'BT3', kWh: 150 },
        marzo: { tarifa: 'BT4', kWh: 180 },
        abril: { tarifa: 'BT4', kWh: 220 },
        mayo: { tarifa: 'BT3', kWh: 140 },
        junio: { tarifa: 'BT4', kWh: 250 },
        julio: { tarifa: 'BT3', kWh: 130 },
        agosto: { tarifa: 'BT3', kWh: 110 },
        setiembre: { tarifa: 'BT4', kWh: 200 },
        octubre: { tarifa: 'BT4', kWh: 260 },
        noviembre: { tarifa: 'BT3', kWh: 150 },
        diciembre: { tarifa: 'BT4', kWh: 300 }
    };

    mesSelect.addEventListener('change', function () {
        const selectedMes = mesSelect.value;
        const mesData = consumoMes[selectedMes];
        const tarifaData = tarifas[mesData.tarifa];

        const cargoFijo = tarifaData.cargoFijo;
        const consumoBase = Math.min(mesData.kWh, 140) * tarifaData.precioKWh;
        const exceso = mesData.kWh > 140 ? (mesData.kWh - 140) * 0.85 : 0;

        const pagoTotal = cargoFijo + consumoBase + exceso;

        pagoFijoEl.textContent = `S/${cargoFijo.toFixed(2)}`;
        pagoTotalEl.textContent = `S/${pagoTotal.toFixed(2)}`;
        pagoExtrasEl.textContent = `S/${exceso.toFixed(2)}`;
    });
});

