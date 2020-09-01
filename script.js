function load() {
    var msg = document.getElementsByClassName('message')[0]
    var msg2 = document.getElementsByClassName('message')[1]
    var img = document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var day = date.getDate()
    var month = date.getMonth()
    var year = date.getFullYear()
    // var hour = 19
    // var month = 2
    
    //mês pos extenso
    switch(month){
        case 0 :
            month = 'Janeiro'
            break
        case 1 :
            month = 'Feveriro'
            break
        case 2 :
            month = 'Março'
            break
        case 3 :
            month = 'Abril'
            break
        case 4 :
            month = 'Maio'
            break
        case 5 :
            month = 'Junho'
            break
        case 6 :
            month = 'Julho'
            break
        case 7 :
            month = 'Agosto'
            break
        case 8 :
            month = 'Setembro'
            break
        case 9 :
            month = 'Outubro'
            break
        case 10 :
            month = 'Novembro'
            break
        case 11 :
            month = 'Dezembro'
            break
        
        default:
            month = 'mês'
    }
    //acrescentar 0 na frente dos minutos menores que 9
    if (min <= 9){
        var minu = `0${min}`
    }else{
        var minu = `${min}`
    }
    //mudar a imagem e cor do dia de acordo com a hora
    if (hour >= 0 && hour < 12){
        img.src = 'img/morning.jpg'
        document.body.style.background = '#D98F07'
    }else if (hour >= 12 && hour <= 18){
        img.src = 'img/afternoon.jpg'
        document.body.style.background = '#D97652'
    }else {
        img.src = 'img/night.jpg'
        document.body.style.background = '#222559'
    }

    msg.innerHTML = `Agora são ${hour}:${minu} h.`
    msg2.innerHTML = `Hoje é dia ${day} de ${month} de ${year}.`

}