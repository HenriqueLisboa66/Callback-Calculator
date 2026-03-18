=====================================
📄 DOCUMENTAÇÃO – CALCULADORA COM CALLBACK
=====================================

📌 DESCRIÇÃO:
Este código implementa uma calculadora simples em JavaScript utilizando o conceito de callback.
Permite realizar operações matemáticas básicas com dois valores informados pelo usuário.

-------------------------------------------
⚙️ FUNCIONAMENTO:
- O usuário digita dois números nos inputs (num1 e num2)
- Ao clicar em uma operação, uma função é chamada
- Essa função envia uma operação como callback
- O resultado é calculado e exibido na tela

-------------------------------------------
🔧 FUNÇÃO PRINCIPAL:

usarOperacao(callback)
- Captura os valores dos inputs
- Converte os valores para número
- Executa a função recebida (callback)
- Mostra o resultado no HTML

-------------------------------------------
🔢 OPERAÇÕES (CALLBACKS):

somar(a, b)
- Retorna a soma dos valores

subtrair(a, b)
- Retorna a subtração

multiplicar(a, b)
- Retorna a multiplicação

dividir(a, b)
- Retorna a divisão
- Possui verificação para divisão por zero

-------------------------------------------
📲 FUNÇÕES DE CHAMADA:

calcularSoma()
- Executa a soma usando callback

calcularSubtracao()
- Executa a subtração

calcularMultiplicacao()
- Executa a multiplicação

calcularDivisao()
- Executa a divisão

-------------------------------------------
🧹 FUNÇÃO EXTRA:

limpar()
- Limpa os campos de entrada
- Reseta o resultado para 0

-------------------------------------------
🧠 CONCEITO UTILIZADO:

Callback:
Função passada como argumento para outra função,
permitindo reutilização e flexibilidade no código.

===========================================
