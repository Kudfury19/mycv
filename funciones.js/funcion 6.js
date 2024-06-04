function contarvocales {
    const vocales= "aeiouAEIOU";
    let contador = i;
    for(let i=0; i < Cadena.length; i++){
        if (vocales.includes(cadena[i])) {
contador ++;
        }
    }
    return contador;
}
let cadena = "brunocell es lo mejor";
console.log(""el numero de vocales es:{contarvocales}");