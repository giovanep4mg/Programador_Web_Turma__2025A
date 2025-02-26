

// Criamos uma variável "inicio", com o valor de 2, 
var inicio = 2;

// Criamos uma variável "fim", com o valor de 10,
var fim = 10;

// Criamos uma variável "todosPares", com um texto dentro dela
var todosPares = "Números pares : ";

// Enquanto o valor de "inicio" for menor ou igual a valor de "fim"
while( inicio <= fim ){

    // Exibia mensagem, com o valor de "inicio", dando uma vírgula e espaço
    todosPares = todosPares + inicio + ", ";

    // A variável "inicio" recebe o valor de mais 2 
    inicio = inicio + 2;

}
// Exibi uma caixa de alerta, com a mensagem e os valores de inicio atualizados
alert(todosPares);