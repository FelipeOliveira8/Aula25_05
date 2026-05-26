let tamanhoAtual = 16;
let isNegrito = false;
let isItalico = false;

window.onload = function() {
    const btnSalvar = document.getElementById("btnSalvar");
    const btnAumentar = document.getElementById("btnAumentar");
    const btnDiminuir = document.getElementById("btnDiminuir");
    const btnNegrito = document.getElementById("btnNegrito");
    const btnItalico = document.getElementById("btnItalico");
    
    const textoDisplay = document.getElementById("textoDisplay");

    btnSalvar.addEventListener('click', function() {
        const textoInput = document.getElementById('textoInput');
        textoDisplay.innerText = textoInput.value; 
    });

    btnAumentar.addEventListener('click', function() {
        tamanhoAtual++;
        textoDisplay.style.fontSize = tamanhoAtual + "px";
    });

    btnDiminuir.addEventListener('click', function() {
        tamanhoAtual--;
        textoDisplay.style.fontSize = tamanhoAtual + "px";
    });

    btnNegrito.addEventListener('click', function() {
        isNegrito = !isNegrito;
        
        if(isNegrito) {
            textoDisplay.style.fontWeight = "bold";
        } else {
            textoDisplay.style.fontWeight = "normal";
        }
    });

    btnItalico.addEventListener('click', function() {
        isItalico = !isItalico;
        
        if(isItalico) {
            textoDisplay.style.fontStyle = "italic";
        } else {
            textoDisplay.style.fontStyle = "normal";
        }
    });
}