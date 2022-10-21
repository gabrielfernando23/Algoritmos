function Media() {
    var media_nota = 0
    media_nota = (Number(ipt_nota1.value) +
     Number(ipt_nota2.value) + 
     Number(ipt_nota3.value)) / 3
    nota_final.innerHTML = `Sua média foi de ${media_nota.toFixed(2)}`
    if (media_nota > 9.4) {
        nota_final.innerHTML += ` Parabéns, você é fora de série!`
    }
}