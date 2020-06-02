module.exports = ( debt, amount, due  ) => {  
    const valor = (debt / amount).toFixed(2);
    let parcelas = [{id: 1, parcela: valor, vencimento: due.toLocaleDateString() }];
      
    
    for (let i = 1; i < amount; i++)
    {
        var dataVencimento = new Date(due.setMonth(due.getMonth() + 1));       
        parcelas.push({id: i + 1, parcela: valor, vencimento: dataVencimento.toLocaleDateString() });
        
    } 
    console.log(parcelas);
    return parcelas;
    
}