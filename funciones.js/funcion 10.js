function elementoMasFrecuente(lista) {
   
    let frecuencias = {};
    

    for (let elemento of lista) {
        if (frecuencias[elemento]) {
            frecuencias[elemento]++;
        } else {
            frecuencias[elemento] = 1;
        }
    }
    
   
    let maxFrecuencia = 0;
    let elementoFrecuente = null;
    
    for (let elemento in frecuencias) {
        if (frecuencias[elemento] > maxFrecuencia) {
            maxFrecuencia = frecuencias[elemento];
            elementoFrecuente = elemento;
        }
    }
    
    return elementoFrecuente;
}

let lista = [1, 2, 3, 2, 4, 2, 5, 5, 5, 5];
let masFrecuente = elementoMasFrecuente(lista);
console.log(masFrecuente);