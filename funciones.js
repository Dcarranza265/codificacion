let valores = ["0","1","2","3","4","5","6","7","8","9"]
const inputCodigo = document.getElementById("inputCodigo")
const inputCodigoCifrado = document.getElementById("inputCodigoCifrado")

//Garantizar que solo se puedan ingresar numeros y como maximo 4
inputCodigo.addEventListener('keypress', e =>{
    e.preventDefault();
    if(inputCodigo.value.length < 4){
        if (valores.includes(e.key)) {
        inputCodigo.value+=e.key        
        }else{
            inputCodigo.value+=""
        }    
    }    
}) 

inputCodigoCifrado.addEventListener('keypress', e =>{
    e.preventDefault();
    if(inputCodigoCifrado.value.length < 4){
        if (valores.includes(e.key)) {
            inputCodigoCifrado.value+=e.key        
        }else{
            inputCodigoCifrado.value+=""
        }    
    }    
}) 

const verificarCodigo = e => {
    e.preventDefault()
    let info    
    if(e.target.id == "btnCodificar"){
        info = inputCodigo 
        funcion = codificarNumero(info.value)
    }else{
        info = inputCodigoCifrado
        funcion = decodificarNumero(info.value)
    }
    if( parseInt(info.value.length) !== 4 ){
        alert("El codigo no tiene 4 numeros")
    }else{
        funcion
    }        
}

const codificarNumero = num => {
    let arrayNum = Array.from(num)
    let nuevoArray = []
    for (let i = 0; i < 4; i++) {
        val = (parseInt(arrayNum[i]) + 7) % 10
        nuevoArray.push(val.toString())               
    }
    let valorCifrado = nuevoArray[2]+nuevoArray[3]+nuevoArray[0]+nuevoArray[1]
    console.log(valorCifrado) 
    alert("El valor cifrado es: " + valorCifrado)
}

const decodificarNumero = num => {
    let arrayNum = Array.from(num)
    let nuevoArray = []
    for (let i = 0; i < 4; i++) {
        val = (parseInt(arrayNum[i]) +3) % 10
        nuevoArray.push(val.toString())               
    }
    let valorCifrado = nuevoArray[2]+nuevoArray[3]+nuevoArray[0]+nuevoArray[1]
    console.log(valorCifrado) 
    alert("El valor cifrado es: " + valorCifrado)

}
    


