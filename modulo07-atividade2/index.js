let curtidas = JSON.parse(localStorage.getItem('curtidas')) || [];

const campoNome = document.getElementById('campoNome');
const btnCurtir = document.getElementById('btnCurtir');
const mensagem = document.getElementById('mensagem');
const limparbtn = document.getElementById('limparbtn');

btnCurtir.addEventListener('click', () => {
    const nome = campoNome.value.trim();
    if (nome === "") {
        alert("Digite seu nome!");
        return;
    }

    if (!curtidas.includes(nome)) {
        curtidas.push(nome);
    } else {
        alert("Esse usuário já curtiu!");
    }

    atualizarMensagem();
    campoNome.value = "";
});

function atualizarMensagem() {
    const total = curtidas.length;

    if (total === 0) {
        mensagem.textContent = "Ninguém curtiu";
    } else if (total === 1) {
        mensagem.textContent = `${curtidas[0]} curtiu`;
    } else if (total === 2) {
        mensagem.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        mensagem.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${total - 2} pessoas curtiram`;
    }


    localStorage.setItem('curtidas', JSON.stringify(curtidas));
}

limparbtn.addEventListener('click', () => {
    curtidas = [];
    localStorage.removeItem('curtidas');
    atualizarMensagem();
});

atualizarMensagem();