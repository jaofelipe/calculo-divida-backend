const path = require('path');
const diff = require('../utils/dateDiff');
const convert = require('../utils/dateParse');
const calcInterest = require('../utils/calcInterest');
const newDue = require('../utils/newDue');
const installments = require('../utils/installments');
const fs = require('fs');
require('dotenv/config');

module.exports = {
  
  async calc(req, res) {
    const { tipoJuros, qtParcelas, jurosDia, comissao } = req.body;
    console.log(req.body);
    //joining path of directory 
    const directoryPath = path.join(__dirname, '..','data');
    fs.readdir(directoryPath, (err,files) => {
      if (err) return console.log(`Erro ao ler o caminho: ${err}`);

      files.forEach((file) => {
        fs.readFile(path.join(directoryPath, file), (err,file) => {
          if (err) return console.log(`Erro ao ler o arquivo: ${err}`);
            
          const dividas = JSON.parse(file);         
          const divida = dividas.map((item) =>{

            //dias atraso  = data do calculo - datavencimento
            let dataVencimento = convert(item.dataVencimento)
            atraso = diff(new Date(),dataVencimento); 
            
            const calcDivida = calcInterest(tipoJuros, item.valorOriginal,jurosDia, atraso).toFixed(2);           
            const calcComissao = (calcDivida * comissao / 100).toFixed(2);

            //adicionar a quantidade de dias de atraso original           
            const parcelas = installments(calcDivida,qtParcelas,newDue(dataVencimento, atraso));
           
  
            return { _id: item._id, dataVencimento: item.dataVencimento, atraso, original: item.valorOriginal, 
                    juros: (calcDivida - item.valorOriginal).toFixed(2),   
                    calcDivida, parcelas,  calcComissao, telefone: item.telefone}
                  
          });

          return res.json(divida);
          
        });
      });
    });

     
  },

  async list(req, res) {
    const { username } = req.params;

    const response = await axios.get(`https://api.github.com/users/${username}`,
    {
        headers: {
          // Include the token in the Authorization header
          Authorization: 'token ' + process.env.TOKEN,
          accept: 'application/json'
        }
      
    });
    

    const { id, login, html_url, created_at} = response.data;
    
    return res.json({ id, login, html_url, created_at});
  }
};