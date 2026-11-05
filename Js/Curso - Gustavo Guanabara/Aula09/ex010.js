const parametros = new URLSearchParams(window.location.search);
const pais = parametros.get('country');

const txt = document.querySelector('#txt');
const txt2 = document.querySelector('#txt2');

if (txt && txt2) {
    if (pais === null || pais.trim() === '') {
        txt.innerText = 'Nenhum país foi informado.';
        txt2.innerText = '';
    } else {
        txt.innerText = `O seu país é ${pais}.`;

        if (pais.trim().toLowerCase() === 'angola') {
            txt2.innerText = 'Você é angolano!';
        } else {
            txt2.innerText = 'Você é estrangeiro!';
        }
    }
}