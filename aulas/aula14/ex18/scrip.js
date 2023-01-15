
function tabuada(){
    var num = document.getElementById('num')
    var res = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Digite um valor, por favor')
    } else {
        var n = Number(num.value)

        var i = 1
        res.innerHTML = ''

        while (i<=10){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            res.appendChild(item)
            i++
        }
        
    }
}