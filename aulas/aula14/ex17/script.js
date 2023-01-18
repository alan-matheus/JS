
function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Preencha todos os campos e tente novamente')
    } else{
        var ini = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <=0) {
            window.alert('Passo inválido, tente novamente. Considerando passo com valor 1')
            p = 1
        }

        res.innerHTML = 'Contando: <br> '

        if(ini < f){
            for(var i = ini;  i<= f ; i= i+p) {
                res.innerHTML += `${i} \u{1f449}`
            }
        } else {
            for (var i = ini; i>= f; i=i-p){
                res.innerHTML += `${i} \u{1f449} `
            }
        }
        res.innerHTML += `\u{2691}`
    }

    
}