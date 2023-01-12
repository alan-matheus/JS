
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var outramsg = window.document.getElementById('outramsg')
    var data = new Date()
    var hora  = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora>=0 && hora <12){
        outramsg.innerHTML = "Bom dia!"
        img.src = "foto-manha.png"
        document.body.style.background = "#65bbf8"
    } else if (hora >= 12 && hora < 18){
        outramsg.innerHTML = "Boa tarde!"
        img.src = "foto-tarde.png"
        document.body.style.background = "#fca91a"
    } else {
        outramsg.innerHTML = "Boa noite!"
        img.src = "foto-noite.png"
        document.body.style.background = "#0f1e31"
    }

}

