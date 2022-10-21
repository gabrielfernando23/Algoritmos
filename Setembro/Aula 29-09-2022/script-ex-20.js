function curto() {
    contador = 1
    while (contador <= 100) {
        if (contador % 3 == 0 && contador % 5 == 0) {
            numbers.innerHTML += `É TRI!É PENTA!<br>`
            contador++;
        }
        else if (contador % 3 == 0) {
            numbers.innerHTML += `É TRI!<br>`
            contador++;
        }
        else if (contador % 5 == 0){
            numbers.innerHTML += `É PENTA!<br>`
            contador++;
        }
        else{
            numbers.innerHTML += `${contador}<br>`
            contador++;
        }
    }
}