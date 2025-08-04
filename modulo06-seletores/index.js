function mudartitulo(){
    const titulo = document.getElementById('titulo')
    titulo.innerText = 'Novo título da Pagina!'
};
const mudarlista = ()=>{
    const estilolista = document.querySelectorAll('.lista li')
    const listaDeCores = ['#008000','#FFA500','#00FFFF'] 
    for(let li in estilolista){
        estilolista[li].style.color = listaDeCores[li]
    }
}
const listaDeParagrafos = document.getElementsByTagName('p')
for(let paragrafo of listaDeParagrafos){
    paragrafo.classList = 'paragrafo'
}
const botao = document.getElementsByTagName('button')[0]
setTimeout(() => {
    botao.innerText = 'Clique Novo Texto';
  }, 3000);
mudarlista();
mudartitulo();