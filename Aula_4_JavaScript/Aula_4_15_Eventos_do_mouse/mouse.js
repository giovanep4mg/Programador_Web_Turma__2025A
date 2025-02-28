
// Função que será executada, quando passar o mouse sobre o elemento
function sobre() {
    
    //  Este código seleciona o elemento HTML com o ID 'cores' e altera sua cor de fundo para vermelho
    document.getElementById("cores").style.backgroundColor = "red";

    // Este código seleciona o elemento HTML com o ID 'log' e adiciona esse texto
    document.getElementById("log").innerHTML += "Sobre a Div cor vermelha. <br>";
    
}

// Função que será executada quando, Presionando o botão do mouse sobre o elemento.
function paraBaixo() {
    
    // Este código seleciona o elemento HTML com o ID 'cores' e altera sua cor de fundo para azul
    document.getElementById("cores").style.backgroundColor = "blue";

    // Este código seleciona o elemento HTML com o ID 'log' e adiciona esse texto
    document.getElementById("log").innerHTML += "Clicando na Div, cor azul. <br>";
    
}

// Função que será executada quando, movimentando o mouse sobre o elemento.
function movendo() {
    
    // Este código seleciona o elemento HTML com o ID 'cores' e altera sua cor de fundo para verde
    document.getElementById("cores").style.backgroundColor = "green";

    // Este código seleciona o elemento HTML com o ID 'log' e adiciona esse texto
    document.getElementById("log").innerHTML += "Movendo sobre a Div, cor verde. <br>";
    
}

// Função que será executada quando, o mouse estiver saindo do elemento.
function saindo() {
    
    // Este código seleciona o elemento HTML com o ID 'cores' e altera sua cor de fundo para amarelo
    document.getElementById("cores").style.backgroundColor = "yellow";

    // Este código seleciona o elemento HTML com o ID 'log' e adiciona esse texto
    document.getElementById("log").innerHTML += "Saindo da Div, cor amarelho. <br>";
    
}

// Função que será executada quando, soltando o botão do mouse sobre o elemento.
function paraCima() {
    
    // Este código seleciona o elemento HTML com o ID 'cores' e altera sua cor de fundo para rosa
    document.getElementById("cores").style.backgroundColor = "pink";

    // Este código seleciona o elemento HTML com o ID 'log' e adiciona esse texto
    document.getElementById("log").innerHTML += "Soltando o mouse na Div, cor rosa. <br>";
    
}