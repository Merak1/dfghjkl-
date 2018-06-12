var elementoTemporal ;
let turno = 'x'

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
        inter(element,turno)


        function inter (element, turno ){
        var casillas = document.getElementsByClassName("gato");
        let  tiros = []
        for (let i = 0; i < casillas.length; i++) {
                tiros.push(casillas[i].innerText )
                
            }
            console.log(tiros)
      
        }
        
        
    }else{
        return
    }
        function compararCasilla(tiros, casilla1, casilla2, casilla3){



        }
       // 123- 456 - 189 // 147 - 258 - 789 // 159 - 357

        compararCasilla(tiros,1,2,3 )
        compararCasilla(tiros, 4,5,6 )
        compararCasilla(tiros, , , )
        compararCasilla(tiros, , , )
        compararCasilla(tiros, , , )
        compararCasilla(tiros, , , )
        compararCasilla(tiros, , , )
        compararCasilla(tiros, , , )
}