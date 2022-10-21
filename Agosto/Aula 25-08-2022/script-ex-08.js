function Calc() {
    var men = homens.value * 80
    var women = mulheres.value * 60
    var all = men + women
    mensagem.innerHTML = `Este elevador suporta 800Kg e o peso estimado desta lotação é de ${all}kg`
    if (all > 800) {
        mensagem.innerHTML += `<br>Será necessário descer alguém para que o elevador se movimente`
    }
}