//Inserindo data e horário na tela
function horario() {
    var horarioAtual = new Date()
    var hora = horarioAtual.getHours()
    var min = horarioAtual.getMinutes()
    var sec = horarioAtual.getSeconds()

    if (hora < 10) {
        hora = '0' + hora
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }


    var dia = horarioAtual.getDay()
    var mes = horarioAtual.getMonth()
    var ano = horarioAtual.getFullYear()

    if (dia < 10) {
        dia = '0' + dia
    }
    if (mes < 10) {
        mes = '0' + mes
    }



    horaformat = `${hora}:${min}:${sec}`
    diaformat = `${dia}/${mes}/${ano}`
    document.getElementById('horario').innerHTML = `${diaformat} - ${horaformat}`

}

window.setInterval('horario()', 1000)

//Definindo função nos botões para digitar nos campos

function inserir(num) {
    var passwordText = document.getElementById('pass').innerHTML
    document.getElementById('pass').innerHTML = passwordText + num
    
}

function apagar(){
    document.getElementById('pass').innerHTML = ''
}

function apagarTudo(){
    document.getElementById('pass').innerHTML = ''
    document.getElementById('user').value = ''
}