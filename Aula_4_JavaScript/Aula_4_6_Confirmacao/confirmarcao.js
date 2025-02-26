
// Criamos uma variável de dentro dela temos esse texto
var sair = confirm("Confirma ir para a página do Google?");

// Cria uma janela que é contém um link para a página do Google, com duas opções: OK ou CANCELAR
// se o usuário, clicar em OK será direcionado para a página do Google, se não apenas fechará a janela 

if( sair == 1 ){
    window.location = "https://www.google.com.br"
}

// valor verdadeiro igual a 1, falso igual a 2 

// para verificar se é igual usamos dois simbolos iguais " == "