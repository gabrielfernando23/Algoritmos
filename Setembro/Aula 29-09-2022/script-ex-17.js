function carona() {
    var entrada = ipt_entrar.value
    var maximo = ipt_comporta.value
    var contador = 1
    msg.innerHTML = ''
    while (contador <= maximo) {
        if (contador == 1) {
            msg.innerHTML += `Entrou o ${contador}° passageiro (que é o(a) motorista)<br>`
            contador++;
        }
        if (contador <= entrada) {
            msg.innerHTML += `Entrou o ${contador}° passageiro<br>`
            contador++
        } 
        else {
            msg.innerHTML += `O ${contador}° passageiro terá que esperar<br>`
            contador++
        }
    }
}