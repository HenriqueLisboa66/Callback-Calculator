// Função principal (HOF)
function usarOperacao(callback) {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const resultado = callback(num1, num2);

    document.getElementById("resultado").innerText = resultado;
}

// Callbacks (operações)
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro (divisão por zero)";
    }
    return a / b;
}

// Chamadas usando callback
function calcularSoma() {
    usarOperacao(somar);
}

function calcularSubtracao() {
    usarOperacao(subtrair);
}

function calcularMultiplicacao() {
    usarOperacao(multiplicar);
}

function calcularDivisao() {
    usarOperacao(dividir);
}

// Limpar
function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").innerText = "0";
}