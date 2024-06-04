function espalindromo(cadena){
    cadena = cadena.toLowerCase();//se convierte la cadena en minuscula 
    let palabraInvertida = cadena.split('').reverse().join('')
    console.log(palabraInvertida)
    if (cadena==palabraInvertida){
        console.log("es palindromo")
    }
    else{
        console.log("no es palindromo")
    }
}
espalindromo("radar")
