function verify() {
    var horas = 0
    horas = (total_eps.value * 22)/ 60
    div_msg.innerHTML = `Vejo que você gosta da série ${ult_serie.value}`
    if (horas > 30) {
        div_msg.innerHTML += `<br>Uau, você realmente gosta dessa série!`
    }
}