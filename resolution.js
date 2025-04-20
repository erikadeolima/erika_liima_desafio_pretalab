const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let countryTyped = '';
let goldenMedals = 0;
let silverMedals = 0;
let bronzeMedals = 0;

const countries = {};

const exitAction = () => {
    console.log('Saindo do programa...');
    rl.close();
}

const getMedals = (country) => {
    rl.question('Digite as medalhas de ouro: ', (goldenMedals) => {
      rl.question('Digite as medalhas de prata: ', (silverMedals) => {
        rl.question('Digite as medalhas de bronze: ', (bronzeMedals) => {
          countries[country] = {
            ouro: Number(goldenMedals),
            prata: Number(silverMedals),
            bronze: Number(bronzeMedals)
          };
          console.log(`Medalhas registradas para ${country}: OURO: ${countries[country].ouro}, PRATA: ${countries[country].prata}, BRONZE: ${countries[country].bronze}`);
          getCountry();
        });
      });
    });
}

  const verifyExitAction = (value, callback) => {
    if (value.toLowerCase() === 'sair') {
      exitAction();
      return;
    }
    callback();
  }

const getCountry = () =>{
    rl.question('Digite um país: ', (country) => {
        verifyExitAction(country, () => {
            countryTyped = country;
            console.log(`Você digitou: ${countryTyped}, está correto?`);
            verifyAction(getMedals, countryTyped);
        });
    });
}

const verifyAction = (action, country) => {
    rl.question('Por favor, digite Y para SIM, N para NÃO ou Sair para SAIR: ', (isCorrect) =>{
      verifyExitAction(isCorrect, () => {
          if (isCorrect.toLowerCase() === 'y') {
              action(country);
          } else if (isCorrect.toLowerCase() === 'n') {
              console.log('Vamos tentar novamente.');
              getCountry();
          } else {
              console.log('Resposta não reconhecida.');
              verifyAction(action, country);
          }
      });
    });
  }

const main = () => {
    console.log('Bem-vindo ao programa de contagem de medalhas!');
    console.log('Digite o nome de um país e o número de medalhas de ouro, prata e bronze que ele conquistou.');
    console.log('Digite SAIR para sair a qualquer momento.');
    getCountry();
}

main()