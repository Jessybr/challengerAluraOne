const btnCriptografar = document.getElementById('btnCriptografar');
const btnDescriptografar = document.getElementById('btnDescriptografar');
const btnCopiar = document.getElementById('btnCopiar');
const areaTexto = document.getElementById('areaTexto');
const resultado = document.querySelector('.resultado');
const text = document.querySelector('.text');
const banner = document.querySelector('.banner');
const acentos = ['á','à','é','è','í','ì','ó','ò','ú','ù','ü','ã','õ','ê','ä','ë','ï','ö'];

function checarAcentos(){
    const texto = areaTexto.value;
    return acentos.some(el => texto.includes(el));
}

function possuiLetraMaiuscula(texto) {
    return /[A-Z]/.test(texto);
}

function criptografar(){
    const texto = areaTexto.value;
    if (checarAcentos() || possuiLetraMaiuscula(texto)) {
        alert('Acentos e letras maiúsculas não permitidos. Por favor, remova-os e tente novamente.');
        areaTexto.value = '';  
    } else {
        banner.classList.add('hidden');
        resultado.classList.remove('hidden');
        resultado.classList.add('flex');
        const texto = areaTexto.value;
        const textoCriptografado = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
        text.textContent = textoCriptografado;
    }
}

function descriptografar(){
    const texto = areaTexto.value;
    if (checarAcentos() || possuiLetraMaiuscula(texto)) {
        alert('Acentos e letras maiúsculas não permitidos. Por favor, remova-os e tente novamente.');
        areaTexto.value = '';  
    } else {
        banner.classList.add('hidden');
        resultado.classList.remove('hidden');
        resultado.classList.add('flex');
        const texto = areaTexto.value;
        const textoDescriptografado = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
        text.textContent = textoDescriptografado;
    }
}

function copiar(){
    navigator.clipboard.writeText(text.textContent);
}
