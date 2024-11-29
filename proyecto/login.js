document.addEventListener("DOMContentLoaded", () => {
    const numeroSuministroSelect = document.getElementById("numeroSuministro");
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const saveNewSuministroButton = document.getElementById("saveNewSuministro");
    const loginButton = document.getElementById("loginButton");

    // Cargar números de suministro guardados
    const loadSuministros = () => {
        const suministros = JSON.parse(localStorage.getItem("suministros")) || [];
        numeroSuministroSelect.innerHTML = `<option value="" disabled selected>Seleccione un Número</option>`;
        suministros.forEach((suministro) => {
            const maskedSuministro =
                suministro.slice(0, 4) + "***" + suministro.slice(-3);
            const option = document.createElement("option");
            option.value = suministro;
            option.textContent = maskedSuministro;
            numeroSuministroSelect.appendChild(option);
        });
    };

    // Guardar un nuevo número de suministro
    saveNewSuministroButton.addEventListener("click", () => {
        const newSuministro = document.getElementById("newSuministro").value;
        if (newSuministro && newSuministro.trim() !== "") {
            let suministros = JSON.parse(localStorage.getItem("suministros")) || [];
            if (!suministros.includes(newSuministro)) {
                suministros.push(newSuministro);
                localStorage.setItem("suministros", JSON.stringify(suministros));
                alert("Número de suministro guardado exitosamente.");
                loadSuministros();
                modal.style.display = "none";
            } else {
                alert("El número ya está guardado.");
            }
        } else {
            alert("No se ingresó un número válido.");
        }
    });

    // Abrir modal
    openModalButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Cerrar modal
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Manejar el envío del formulario
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const numeroSuministro = numeroSuministroSelect.value;
        const dni = document.getElementById("dni").value;
        const clave = document.getElementById("clave").value;

        if (numeroSuministro && dni && clave) {
            alert(`Inicio de sesión exitoso.\nNúmero de Suministro: ${numeroSuministro}`);
            // Redirigir a home.html
            window.location.href = "home.html";
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    // Inicializar números de suministro guardados
    loadSuministros();
});








