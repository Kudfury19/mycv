function factorial(num){
   if (num < 0){
    return "el factorial no esta definido para numeros negativos"
   }else if(num ===0){
return 1
   }
   let resultado = 1
   for(let i = 1; i<=num;i++){
    resultado *= i;
   }
   return resultado
}
const number = 5;
   console.log(factorial(number));