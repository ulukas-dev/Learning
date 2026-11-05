
function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        
        // BOM DIA
        msg.innerHTML += '<br>Bom dia!';
        img.src = 'img/img1.jpg';
        document.body.style.background = '#f5deb3'

    } 
    else if (hora >= 12 && hora < 18) {
        
        // BOA TARDE
        msg.innerHTML += '<br>Boa tarde!';
        img.src = 'img/img2.jpg';
        document.body.style.background = '#f4a460'

    } 

    else {

        // BOA NOITE
        msg.innerHTML += '<br>Boa noite!';
        img.src = 'img/img3.jpg';
        document.body.style.background = '#191970'

    }
}
