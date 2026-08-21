function calcularIMC() {
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");

    if (peso.value === "" || altura.value === "") {alert("Por favor, ingresa tu peso y altura.");return;
    }

    if (peso.value <= 0 || altura.value <=0) {alert("El peso y la altura deben ser mayores que 0.");return;
    }

    let imc = peso.value / (altura.value * altura.value);

    let categoria = "";
    let claseCategoria = "";

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

    document.getElementById("resultado").textContent = imc.toFixed(2);
    document.getElementById("categoria").textContent = categoria;
    document.getElementById("categoria").className = claseCategoria;

    

    console.log(imc);
    
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}