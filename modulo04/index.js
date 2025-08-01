const livroEmEstoque =  [
    {titulo: 'As crônica de Gelo e Fogo', autor: 'George Martin', quantidade: 20 },
    {titulo: 'As crônica de Narnia', autor: 'C S Lewis', quantidade: 10},
    {titulo: 'O Hobbit', autor: 'Tolkien', quantidade: 25},
];

function adicionarLivro(livro) {
    for (let i = 0; i < livroEmEstoque.length; i++) {
        if (livroEmEstoque[i].titulo === livro.titulo) {
            console.error("Livro já está no estoque, não será adicionado novamente.");
            return;
        }
    }
    livroEmEstoque.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado com sucesso.`);
}
function removerLivro(titulo){
    for (let i = 0; i < livroEmEstoque.length; i++) {
        if (livroEmEstoque[i].titulo === titulo) {
            livroEmEstoque.splice(i, 1);
            return;
        }
    }
    console.error("Livro não encontrado no estoque, para remoção!");
};
function atualizarQuantidade(titulo, novaQuantidade) {
    for (let i = 0; i < livroEmEstoque.length; i++) {
        if (livroEmEstoque[i].titulo === titulo) {
            livroEmEstoque[i].quantidade = novaQuantidade;
            return;
        }
    }
    console.error("Livro não encontrado no estoque, para atualização!");
};
function listarLivros(){
    for (let i = 0; i < livroEmEstoque.length; i++) {
        console.log(`Livro: ${livroEmEstoque[i].titulo} - Autor: ${livroEmEstoque[i].autor} - quantidade: ${livroEmEstoque[i].quantidade}`);
    }
};
let novoLivro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    quantidade: 20
};
adicionarLivro(novoLivro);
atualizarQuantidade('O Hobbit',30);
removerLivro('As crônica de Narnia');
listarLivros();