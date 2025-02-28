
// Executa a função para submeter o formulário
function submeti() {
    
    // Seleciona o elemento HTML, com id "log" e  adiciona esse texto
    document.getElementById("log").innerHTML += "Submeti <br>";

    // retorna falso
    return false;
}

// Executa a Função, que é onReset: Limpa os dados do formulário ao ser ativado.
function resetei() {
    
    // Seleciona o elemento HTML, com id "log" e  adiciona esse texto
    document.getElementById("log").innerHTML += "Resetei <br>";

}

// Executa a Função, que é onBlur: Disparado ao sair de um campo.
function saiDoCampo() {
    
    // Seleciona o elemento HTML, com id "log" e  adiciona esse texto
    document.getElementById("log").innerHTML += "Sai do campo <br>";

}

// Executa a Função, que é onChange: Acionado quando há uma alteração no valor de um campo.
function mudei() {
    
    // Seleciona o elemento HTML, com id "log" e  adiciona esse texto
    document.getElementById("log").innerHTML += "Mudei <br>";

}

// Executa a Função, que é onFocus: Ocorre ao entrar em um campo.
function entreiNoCampo() {
    
    // Seleciona o elemento HTML, com id "log" e  adiciona esse texto
    document.getElementById("log").innerHTML += "Entrei no campo <br>";

}

// Executa a Função, que é onSelect: Ativado ao selecionar um texto dentro de um campo.
function selecionei() {
    
    // Seleciona o elemento HTML, com id "log" e  adiciona esse texto
    document.getElementById("log").innerHTML += "Selecionei <br>";

}

// Executa a Função, que é onKeyDown, Relacionados ao teclado. quando  presiona uma tecla
function teclaBaixo() {
    
    // Seleciona o elemento HTML, com id "log" e  adiciona esse texto
    document.getElementById("log").innerHTML += "Tecla para baixo <br>";

}

// Executa a Função, que é onkeyup, Relacionados ao teclado. quando a tecla é solta
function teclaAcima() {
     
    // Seleciona o elemento HTML, com id "log" e  adiciona esse texto
    document.getElementById("log").innerHTML += "Tecla para cima <br>";

}