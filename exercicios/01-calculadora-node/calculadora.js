function somar(a, b) {
    return a+ b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    if (b === 0)
        return "Erro";

    return a / b;
}

function potencia(a, b){
    return a ** b;
}

function raizQuadrada(a){
    return Math.sqrt(a);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir,
    potencia,
    raizQuadrada
}