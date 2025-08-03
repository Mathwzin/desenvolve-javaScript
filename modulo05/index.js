function calcularTempoRestante(dataFutura){
    const dataAtual = new Date().getTime();
    const diferenca = dataFutura - dataAtual;

    const segundosDeUmMInuto = 60 * 1000;
    const segundosdeUmaHora = 60 * segundosDeUmMInuto;
    const segundosdoDia = 24 * segundosdeUmaHora;
    
    const dias = Math.floor(diferenca/ segundosdoDia);
    const horas = Math.floor((diferenca % segundosdoDia)/segundosdeUmaHora);
    const segundos = Math.floor((diferenca % segundosDeUmMInuto)/1000);
    const minutos = Math.floor((diferenca % segundosdeUmaHora)/segundosDeUmMInuto);
    return { dias, horas, minutos, segundos};
};
function atualizarTemporizador(){
    const dataFutura = new Date('2025-08-11T12:00:00').getTime();
    const tempoRestante = calcularTempoRestante(dataFutura);
    console.log(`${tempoRestante.dias}d ${tempoRestante.horas}h ${tempoRestante.minutos}m ${tempoRestante.segundos}s`);
};
setInterval(atualizarTemporizador, 1000);
