const axios = require('axios');
const percent = require('../utils/percentage');
const diff = require('../utils/dateDiff');
const convert = require('../utils/dateParse');
const fs = require('fs');
require('dotenv/config');

module.exports = {
  
  async index(req, res) {
    const { qtParcelas, jurosDia, percentJuros, comissao } = req.body;
  
    fs.readFile('../data/divida.json', (err,data) => {
        if (err) throw err;
        let divida = JSON.parse(data);
        console.log(dividas);
    

        var calculoDivida = divida.data.map((item) =>{

          const comissao = percent(comissao);
          const jurosDia = percent(jurosDia);

           //dias atraso  = data do calculo - datavencimento
          atraso = diff(convert('11/03/2020'),convert('01/03/2020')); 
          //Juros Simples: = 3000,00 *(1 + 0,2% juros ao dia) * 10 dias
          let calculo = original * (1 + jurosDia) * atraso;
          console.log(`Juros simples valor = ${calculo}`);
          
          //Juros compostos: = 3000,00 * (1 + 0,2% juros ao dia) ^ 10 dias
          let calculo = original * Math.pow((1 + jurosDia), atraso);
          console.log(`Juros composto valor = ${calculo}`);

          let comissao = calculo * percent(comissaoNP);
          console.log(`Comissão NP = ${comissao}`);

            return{
                id: item.id,
                login: item.login,
                html_url: item.html_url,
            }
          
        })
        

        
    }); 
    //return res.json(calculoDivida);
    
    
  },

  async details(req, res) {
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