
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
   

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'

            if(idade >= 0 && idade < 5) {
                img.setAttribute ('src', 'menino.png')
            } else if( idade < 11) {
                img.setAttribute('src', 'menino-crianca.png') 
            } else if (idade < 21) {
                img.setAttribute ('src','jovem-homem.png') 
            } else if (idade < 40) {
                img.setAttribute ('src','homem-adulto.png') 
            } else if (idade < 70) {
                img.setAttribute ('src','homem.png') 
            } else {
                img.setAttribute ('src', 'idoso.png') 
            }
        } else if (fsex[1].checked){
            genero = 'mulher'

            if(idade >= 0 && idade < 5) {
                img.setAttribute ('src', 'menina.png') 
            } else if( idade < 11) {
                img.setAttribute ('src', 'menina-crianca.png') 
            } else if (idade < 21) {
                img.setAttribute ('src', 'jovem-mulher.png') 
            } else if (idade < 40) {
                img.setAttribute ('src', 'mulher-adulta.png') 
            } else if (idade < 70) {
                img.setAttribute ('src', 'mulher.png') 
            } else {
                img.setAttribute ('src', 'idosa.png') 
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)

    }


}