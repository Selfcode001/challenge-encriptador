function encriptar(){
    let textoAencriptar = document.getElementById("ingresa_texto").value;

    if(!validarTexto(textoAencriptar)){
        alert("El texto contiene caracteres no admitidos...");
        return;
    } 
    let texto = "";
    let letra;
    ocultar();
    //primera forma de hacer el encriptador
    for(let i = 0; i < textoAencriptar.length; i++){
        letra = textoAencriptar[i];

        switch(letra){
            case 'e':
                texto += "enter";
                break;
            case 'i':
                texto += "imes";
                break;
            case 'a':
                texto += "ai";
                break;
            case 'o':
                texto += "ober";
                break;
            case 'u':
                texto += "ufat";
                break;
            default:
                texto += letra;
                break;
        }
    }
    document.getElementById("resultado_texto").textContent = texto;   
}

function validarTexto(texto) {
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (!(caracter >= 'a' && caracter <= 'z') && caracter !== ' ') {
            return false;
        }
    }
    return true;
}


function ocultar(){
    document.getElementsByClassName("presentacion_resultado_ingrese").item(0).innerHTML = "";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("presentacion_botonCopiar").style.display = "block";
}

function desencriptar() {
    let textoDesencriptar= document.getElementById("ingresa_texto").value;
    if(!validarTexto(textoDesencriptar)){
        alert("El texto contiene caracteres no admitidos...");
        return;
    } 
    ocultar();
    //segunda forma de hacer el encriptador
    let textoDesencriptado = textoDesencriptar
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("resultado_texto").textContent = textoDesencriptado;
   
}


function copiarTexto() {
    try {
        let textoResultado = document.getElementById("resultado_texto").textContent;
        navigator.clipboard.writeText(textoResultado).then(function() {
        alert("Texto copiado: " + textoResultado);
    });
        
    } catch (error) {
        console.error("Error al copiar el texto: ", error);
    }
    
}
