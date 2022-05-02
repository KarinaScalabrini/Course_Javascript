function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var segundo = data.getSeconds()

    msg.innerHTML = `Agora são ${hora}:${minuto}`
    
    if (hora >= 0 && hora < 12) {
         //bom dia!
        img.src ='manhacerto.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
    //boa tarde!
        img.src = 'tardecerto.png'
        document.body.style.background = '#b9846f'
    } else {
    // boa noite!
        img.src = 'noitecerto.png'
        document.body.style.background = "#515154"
    }
}