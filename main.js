// Cria a função que toca o áudio
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// Armazena uma lista com todas as teclas
const listaDeTeclas = document.querySelectorAll(".tecla");

// Faz o loop pelas teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    // Pega a tecla do momento do loop
    const tecla = listaDeTeclas[contador];
    // Pega a classe do array posição 1 do array de classes e armazena
    const instrumento = listaDeTeclas[contador].classList[1]
    // Concatena o nome do instrumento e armazena em uma const
    const idAudio = `#som_${instrumento}`;

    // Quando clicka na tecla em questão ele chama a função anônima que executa a função tocaSom
    tecla.onclick = () => {
        tocaSom(idAudio);
    }

    // Quando a tecla Enter ou Espaço é pressionada ele adiciona a classe ativa que no CSS deixa o botão vermelho
    tecla.onkeydown = (event) => {
        if (event.code == "Enter" || event.code == "Space")
            tecla.classList.add("ativa");
    }

    // Quando se tira o dedo da tecla a classe ativa é retirada voltando o botão a sua cor natural
    tecla.onkeyup = () => {
        tecla.classList.remove("ativa");
    }
}
