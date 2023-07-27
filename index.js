const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function validarTexto(){
    let textoEscrito = document.querySelector(".texto").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encriptar(textoParaEncriptar){
    let separar = textoParaEncriptar.split("");

    for(let i=0; i<=separar.length;i++){
        if(separar[i] == 'e'){
            separar[i]='enter';
        }
        if(separar[i] == 'i'){
            separar[i]='imes';
        }
        if(separar[i] == 'a'){
            separar[i]='ai';
        }
        if(separar[i] == 'o'){
            separar[i]='ober';
        }
        if(separar[i] == 'u'){
            separar[i]='ufat';
        }
    } 
    return separar.join("");  
}

function desencriptar(textoParaEncriptar){
    let separar = textoParaEncriptar.split("");
    
    for(let i=0; i<=separar.length;i++){
        if(separar[i] == 'e' && separar[i+1] == 'n' && separar[i+2] == 't' && separar[i+3] == 'e' && separar[i+4] == 'r'){
            separar.splice(i+1,4);
        }
        if(separar[i] == 'i' && separar[i+1] == 'm' && separar[i+2] == 'e' && separar[i+3] == 's'){
            separar.splice(i+1,3);
        }
        if(separar[i] == 'a' && separar[i+1] == 'i'){
            separar.splice(i+1,1);
        }
        if(separar[i] == 'o' && separar[i+1] == 'b' && separar[i+2] == 'e' && separar[i+3] == 'r'){
            separar.splice(i+1,3);
        }
        if(separar[i] == 'u' && separar[i+1] == 'f' && separar[i+2] == 'a' && separar[i+3] == 't'){
            separar.splice(i+1,3);
        } 
    } 
        return separar.join("");

}

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
    }
}   

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    textArea.value = "";
    
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}