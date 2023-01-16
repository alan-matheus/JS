
let valores = [5, 8, 15, 69, 87, 58, 47, 81]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])


for(let i=0; i<valores.length; i++){
    console.log(`A posição ${i} tem o valor `+'['+valores[i]+']')
}
*/

for(let i in valores){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}