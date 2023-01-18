
let amigo = {nome: 'Jose', 
sexo: 'M', 
peso: 85.4,
engordar(p=0){
    console.log('engordou')
    this.peso+=p
}}



console.log( amigo.nome)
amigo.engordar(5)

console.log(`${amigo.nome} pesa ${amigo.peso}`)