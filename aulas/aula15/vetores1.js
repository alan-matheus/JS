let num = [5, 8, 9, 1, 4]

console.log (num)
console.log (`o vetor tem ${num.length} posições`)

num.push(4)

console.log(num)
console.log(`o vetor agora tem ${num.length} posições`)
num.sort()

console.log(num)

var pos = num.indexOf(5)
console.log('O valor 5 está na posição '+pos)

var elemento = 8
var pos = num.indexOf(elemento)

if (pos>0) {
    console.log( `O valor ${elemento} está na posição `+ pos)
} else {
    console.log('valor não encontrado')
}