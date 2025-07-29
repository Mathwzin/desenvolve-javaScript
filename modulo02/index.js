let num1 = 4;
let num2 = 2;
function SomaDois(a, b){
    return a + b;
}
console.log(`Soma entre ${num1} e ${num2} = ${SomaDois(num1, num2)}`);

function SubtraiDois(a, b){
    return a - b;
}
console.log(`A subtração entre ${num1} e ${num2} = ${SubtraiDois(num1, num2)}`);

const MultiplicaDois = (a,b) => {
    return a * b; 
};
console.log(`A Multiplicação entre ${num1} e ${num2} = ${MultiplicaDois(num1, num2)}`);

const DivideDois = (a,b) => {
    return a/b;
};
console.log(`A Divisão entre ${num1} e ${num2} = ${DivideDois(num1, num2)}`);

function MostraResultado(a,b){
    console.log(`[Soma] entre ${a} e ${b} = ${SomaDois(a, b)}`);
    console.log(`[Subtração] entre ${a} e ${b} = ${SubtraiDois(a, b)}`);
    console.log(`[Multiplicação] entre ${a} e ${b} = ${MultiplicaDois(a, b)}`);
    console.log(`[Divisão] entre ${a} e ${b} = ${DivideDois(a, b)}`);
}
MostraResultado(10, 2);