const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let countryTyped = '';

const countries = {};

const calculateTotalMedals = (country) => {
    const medals = countries[country];
    return medals.ouro + medals.prata + medals.bronze;
};

const showRanking = () => {
    console.log('\n======= RANKING DE PAÍSES POR TOTAL DE MEDALHAS =======\n');
    
    const ranking = Object.keys(countries).map(country => {
        return {
            nome: country,
            ouro: countries[country].ouro,
            prata: countries[country].prata,
            bronze: countries[country].bronze,
            total: calculateTotalMedals(country)
        };
    });
    
    ranking.sort((a, b) => b.total - a.total);
    
    console.log('Posição| País           | Ouro | Prata | Bronze | Total');
    console.log('-------|----------------|------|-------|--------|------');
    
    ranking.forEach((country, index) => {
        const position = (index + 1).toString().padEnd(7);
        const name = country.nome.padEnd(15);
        const gold = country.ouro.toString().padEnd(5);
        const silver = country.prata.toString().padEnd(6);
        const bronze = country.bronze.toString().padEnd(7);
        const total = country.total.toString();
        
        console.log(`${position}| ${name}| ${gold}| ${silver}| ${bronze}| ${total}`);
    });
    
    console.log('=======================================================\n');
};

const exitAction = () => {
    console.log('\n');
    console.log('Saindo do programa...');
    console.log('\n');
    if (Object.keys(countries).length > 0) {
        showRanking();
    } else {
        console.log('Nenhum país foi registrado.');
        console.log('\n');
    }
    rl.close();
}

const getMedals = (country) => {
    rl.question('Digite as medalhas de ouro: ', (goldenMedals) => {
        rl.question('Digite as medalhas de prata: ', (silverMedals) => {
            rl.question('Digite as medalhas de bronze: ', (bronzeMedals) => {
                countries[country] = {
                    ouro: Number(goldenMedals) || 0,
                    prata: Number(silverMedals) || 0,
                    bronze: Number(bronzeMedals) || 0
                };
                console.log('\n');
                console.log(`Medalhas registradas para ${country}: OURO: ${countries[country].ouro}, PRATA: ${countries[country].prata}, BRONZE: ${countries[country].bronze}`);
                showRanking();
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
                console.log('\n');
                getCountry();
            } else {
                console.log('Resposta não reconhecida.');
                console.log('\n');
                verifyAction(action, country);
            }
        });
    });
}

const main = () => {
    console.log('\n');
    console.log('Bem-vindo ao programa de contagem de medalhas!');
    console.log('\n');
    console.log('Digite o nome de um país e o número de medalhas de ouro, prata e bronze que ele conquistou.');
    console.log('\n');
    console.log('Digite SAIR para sair a qualquer momento.');
    console.log('\n');
    getCountry();
}

main()