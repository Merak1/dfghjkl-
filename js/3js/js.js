
var input = prompt("Por favor mete un numero");
input +=  "";
//se converte en cadena el numero 
console.log(input)
console.log(typeof input)
   
function volteaNum (input){
    var pos = 0;
    for (let  i = input.length-1; i >= 0 ; i--) {
        var nuevoNum = "";
        console.log(input[i])  
         nuevoNum + input[i]
        
        }
        
        console.log(nuevoNum)
}

 volteaNum(input);