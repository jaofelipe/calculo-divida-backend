export default function parse(data){ //exemplo 31/03/2020
    const dataSplit = data.split('/');

    const day = dataSplit[0]; //31
    const month = dataSplit[1]; //03
    const year = dataSplit[2]; //2020

    // Agora podemos inicializar o objeto Date, lembrando que o mês começa em 0, então fazemos -1.
    return new Date(year, month -1, day);
    
}