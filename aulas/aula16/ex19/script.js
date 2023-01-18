
let num = document.getElementById('txtnum')
let seltab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isInLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false 
    }
}

function adicionar(){
    if(isNumero(num.value) && !isInLista(num.value, valores)){
        
        let numero = Number(num.value)
        valores.push(numero)
        var item = document.createElement('option')
        item.text = `o número ${numero} foi adicionado`
        seltab.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('Valor inválido ou já encontrado na lista, tente novamente')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0 ){
        window.alert('Adicione valores, por favor')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            
            if(valores[pos] > maior ){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += ` <p> Ao todo temos ${total} numeros cadastrados. </p>`
        res.innerHTML += `<p>O maior valor na lista é o ${maior}.</p>`
        res.innerHTML += `<p>O menor valor na lista é o ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`

    }
}

