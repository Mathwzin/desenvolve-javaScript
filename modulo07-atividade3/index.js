
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

const campoTexto = document.getElementById('campodeTexto');
const botaoAdicionar = document.getElementById('adicionar');
const listaTarefas = document.getElementById('listaTarefas');

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function renderizarTarefas() {
    listaTarefas.innerHTML = ""; 

    tarefas.forEach((tarefa, index) => {
        const div = document.createElement('div');
        div.classList.add('tarefa');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => {
            tarefas[index].status = checkbox.checked;
            salvarTarefas();
            renderizarTarefas();
        });

        const label = document.createElement('label');
        label.textContent = tarefa.descricao;
        label.className = tarefa.status ? 'concluida' : 'nao-concluida';

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add('excluir');
        btnExcluir.addEventListener('click', () => {
            tarefas.splice(index, 1);
            salvarTarefas();
            renderizarTarefas();
        });

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(btnExcluir);
        listaTarefas.appendChild(div);
    });
}

botaoAdicionar.addEventListener('click', () => {
    const descricao = campoTexto.value.trim();
    if (descricao !== "") {
        tarefas.push({ descricao: descricao, status: false });
        campoTexto.value = "";
        salvarTarefas();
        renderizarTarefas();
    } else {
        alert("Digite uma descrição para a tarefa!");
    }
});

renderizarTarefas();
