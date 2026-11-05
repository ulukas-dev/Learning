var agora = new Date()//Para pegar a data do sistema
var hora = agora.getHours()//Para pegar a hora exata do sistema
console.log(`Agora são ${hora} horas`)

if (hora < 12) {

    console.log('Bom dia')

}

if (hora <= 18) {

    console.log('Boa tarde')
}

else {

    console.log('Boa noite')

}

// Não funciona se o formato de hora for 12AM 12PM