let tipoEvaluacion = "adulto";

function seleccionarTipo(tipo) {
    tipoEvaluacion = tipo;

    const btnAdulto = document.getElementById("btnAdulto");
    const btnAdultoMayor = document.getElementById("btnAdultoMayor");

    btnAdulto.classList.remove("activo");
    btnAdultoMayor.classList.remove("activo");

    if (tipo === "adulto") {
        btnAdulto.classList.add("activo");
    } else {
        btnAdultoMayor.classList.add("activo");
    }

    // Limpiar resultado al cambiar de evaluación
    document.getElementById("resultado").textContent = "--";
    document.getElementById("categoria").textContent = "Ingresa tus datos";
    document.getElementById("categoria").className = "";
}


function calcularIMC() {

    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");

    if (peso.value === "" || altura.value === "") {
        alert("Por favor, ingresa tu peso y altura.");
        return;
    }

    if (peso.value <= 0 || altura.value <= 0) {
        alert("El peso y la altura deben ser mayores que 0.");
        return;
    }

    let imc = peso.value / (altura.value * altura.value);

    let categoria = "";
    let claseCategoria = "";

    // =========================
    // ADULTO
    // =========================

    if (tipoEvaluacion === "adulto") {

        if (imc < 18.5) {
            categoria = "Bajo peso";
            claseCategoria = "bajo-peso";
        }
        else if (imc < 25) {
            categoria = "Normal";
            claseCategoria = "normal";
        }
        else if (imc < 30) {
            categoria = "Sobrepeso";
            claseCategoria = "sobrepeso";
        }
        else if (imc < 35) {
            categoria = "Obesidad grado I";
            claseCategoria = "obesidad";
        }
        else if (imc < 40) {
            categoria = "Obesidad grado II";
            claseCategoria = "obesidad";
        }
        else {
            categoria = "Obesidad grado III";
            claseCategoria = "obesidad";
        }

    }

    // =========================
    // ADULTO MAYOR
    // Parámetros MINSAL Chile
    // =========================

    else {

        if (imc < 23) {
            categoria = "Enflaquecido/a";
            claseCategoria = "bajo-peso";
        }
        else if (imc < 28) {
            categoria = "Normal";
            claseCategoria = "normal";
        }
        else if (imc < 32) {
            categoria = "Sobrepeso";
            claseCategoria = "sobrepeso";
        }
        else {
            categoria = "Obeso/a";
            claseCategoria = "obesidad";
        }

    }

    document.getElementById("resultado").textContent = imc.toFixed(2);

    document.getElementById("categoria").textContent = categoria;

    document.getElementById("categoria").className = claseCategoria;

    console.log("IMC:", imc);
    console.log("Tipo de evaluación:", tipoEvaluacion);
}


// =========================
// SERVICE WORKER
// =========================

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("service-worker.js")
        .then(() => {
            console.log("Service Worker registrado correctamente.");
        })
        .catch((error) => {
            console.log("Error al registrar Service Worker:", error);
        });

}