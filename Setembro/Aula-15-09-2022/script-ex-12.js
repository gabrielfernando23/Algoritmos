var saldo = 0
var qtd_op = 0
var media = 0
cofre.innerHTML = `
O saldo do cofrinho é de: R$${saldo}<br>
A quantidade de operações foi: ${qtd_op}<br>
Média dos depósitos: R$${media}`
function depositar() {
var moeda = sel_moeda.value
if (moeda == 1) {
    saldo++
    qtd_op++
    media = saldo / qtd_op
    cofre.innerHTML = `
O saldo do cofrinho é de: R$${saldo}<br>
A quantidade de operações foi: ${qtd_op}<br>
Média dos depósitos: R$${media}`
} else if (moeda == 2) {
    saldo += 2
    qtd_op++
    media = saldo / qtd_op
    cofre.innerHTML = `
O saldo do cofrinho é de: R$${saldo}<br>
A quantidade de operações foi: ${qtd_op}<br>
Média dos depósitos: R$${media}`   
}
else{}
}
function gastar() {
saldo = 0
qtd_op = 0
media = 0
cofre.innerHTML = `O saldo do cofrinho é de: R$${saldo}<br>
A quantidade de operações foi: ${qtd_op}<br>
Média dos depósitos: R$${media}`
}
