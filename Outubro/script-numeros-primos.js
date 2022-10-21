function validar() {
    if (ipt_numero1.value <= 0) {
    alert('O Primeiro número precisa ser maior que 0')
    }
    else if (ipt_numero2.value <= ipt_numero1.value) {
        alert('O Segundo número precisa ser maior que o primeiro')
    }
    else{divisor();}
}

function divisor() {
    var contador = Number(ipt_numero1.value)
    var num = Number(ipt_numero2.value)
    var num_div = 1
    mostrar.innerHTML = ''
    while (contador < num) {
        if (contador % 2 == 0 || contador % 3 == 0 || contador % 5 == 0 || contador % 7 == 0 || contador % 11 == 0 || contador % 13 == 0) {
            mostrar.innerHTML += `<br> O Número ${contador} é divisivel por`
            if (contador % 2 == 0) {
                mostrar.innerHTML += ` 2`
            }
            if (contador % 3 == 0) {
                mostrar.innerHTML += ` 3` 
            }
            if (contador % 5 == 0) {
                mostrar.innerHTML += ` 5`
            }
            if (contador % 7 == 0) {
                mostrar.innerHTML += ` 7`
            }
            if (contador % 11 == 0) {
                mostrar.innerHTML += ` 11`
            }
            if (contador % 13 == 0) {
                mostrar.innerHTML += ` 13`
            }
            contador++
            num_div++;
        }
        else{
            mostrar.innerHTML += `<br>O número ${contador} não é divisível pelos principais números primos`
            contador++;
        }
    }
    mostrar.innerHTML += `<br><br>O intervalo de ${ipt_numero1.value} a ${ipt_numero2.value} tem ${contador} números, sendo que ${num_div} números são divisíveis por algum número primo`
}