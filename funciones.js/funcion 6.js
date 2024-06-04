function contarVocales(cadena) {
    let conteoVocales = {
        "a":0,
        "e":0,
        "i":0,
        "o":0,
        "u":0,
    }
    cadena = cadena.toLowerCase();//se convierte la cadena en minuscula
    for (let char of cadena) {
        switch(char) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                conteoVocales[char]++;
                break;
            default:
                // No hacemos nada para caracteres no vocales
                break;
        }
    }

    return conteoVocales;
}
let cadena = "brunocell es lo mejor";

console.log(`el conteo de vocales es ${JSON.stringify(contarVocales(cadena))}`)