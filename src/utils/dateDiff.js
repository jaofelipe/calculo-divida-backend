export default function diff(atual, vencimento){
   
    const diff = Math.abs(atual.getTime() - vencimento.getTime()); // Subtrai uma data pela outra
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

    // Mostra a diferença em dias
    console.log(`Entre ${vencimento} até ${atual} já se passaram ${days} dias`);
    return days;

}