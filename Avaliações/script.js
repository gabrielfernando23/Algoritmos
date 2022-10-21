var energia = 0
var clones = 0
var linhas = 0
function validar() {
energia = Number(ipt_energia.value)
clones = Number(ipt_clones.value)
linhas = Number(ipt_linhas.value)
if (energia < 20 || energia > 5000 || clones < 0 || clones > 250 || linhas < 0) {
    alert(` ERRO NA ENTRADA DE DADOS – Energia tem que ser entre 20 e 5.000. 
    Quantidade de Clones tem que ser entre 0 e 250. 
    Quantidade de Clones por linha tem que ser maior que 0`)
    if (energia < (clones * 20)) {
        alert('A energia não é suficiente para criar a quantidade de clones desejada!')
    }
}
else{criar();}

function criar() {
    var contador = 0
    var clone_linhas = 1
    msg.innerHTML = ''
    while (contador < clones) {
            if (clone_linhas < linhas) {
                msg.innerHTML += `<img src="https://static.wikia.nocookie.net/naruto-pedia/images/e/ea/Naruto.png/revision/latest?cb=20120407114822&path-prefix=pt-br" width="200px">`
                clone_linhas++
                contador++
            }
             else if (clone_linhas == linhas) {
                msg.innerHTML += `<img src="https://static.wikia.nocookie.net/naruto-pedia/images/e/ea/Naruto.png/revision/latest?cb=20120407114822&path-prefix=pt-br" width="200px"><br>`
                 contador++
                 clone_linhas = 1
            }
    }
    msg.innerHTML += `<b>ANÁLISE DA GERAÇÃO DE CLONES</b> <br>Energia Inicial: ${energia}<br>Qtde de Clones: ${clones}<br>Sobra de Energia: ${energia - (clones * 20)}`
}
}