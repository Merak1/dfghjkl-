var casillas = document.getElementsByClassName("gato");
var elementoTemporal ;
let turno = 'x'
var  = []
let i = 0;
function test(element){

    


    if( element.innerHTML === ""){
    elementoTemporal = element.id
    console.log(elementoTemporal)
        console.log("si")

        if (turno === 'x') {
            turno  ='O'
            document.getElementById("turno").innerHTML = "Turno de O"
            element.style.backgroundColor = "red";
            element.innerText = "O"
            
        }else{
            turno = 'x'
            document.getElementById("turno").innerHTML = "Turno de X"
            element.style.backgroundColor = "blue";
            element.innerText = "X"
        }
        console.log("el turno es de", turno)
        
        for (let i = 0; i < casillass.length; i++) {
            const element = array[i];
            
        }
        
    }else{
        return
    }
    console.log(casillas)

}