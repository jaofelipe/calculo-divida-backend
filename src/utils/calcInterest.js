module.exports = (type, original, interest, due) => {

    if (type === "S") ///simples - S ou Composto - C
    {
        //Juros Simples: = 3000,00 *(1 + 0,2% juros ao dia) * 10 dias
        return original * (1 + interest / 100 * due);
    }
               
    //Juros compostos: = 3000,00 * (1 + 0,2% juros ao dia) ^ 10 dias
    return original * Math.pow((1 + interest / 100), due);
    
}