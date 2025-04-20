const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let countryTyped = '';
const countries = {};

const formatCountryName = (countryName) => {
    if (!countryName || countryName.length === 0) return countryName;
    return countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();
};

const calculateTotalMedals = (country) => {
    const medals = countries[country];
    return medals.ouro + medals.prata + medals.bronze;
};

const verifyMedalType = (medal) => {
    if (medal === 'ouro' || medal === 'prata' || medal === 'bronze') {
        return true;
    }
    return false;
}

const verifyExitAction = (value, callback) => {
    if (value.toLowerCase() === 'sair') {
        exitAction();
        return;
    }
    callback();
}

const rankingSorting = (ranking) => {
    return ranking.sort((a, b) => {
        if (b.total !== a.total) {
            return b.total - a.total;
        }
        if (b.ouro !== a.ouro) {
            return b.ouro - a.ouro;
        }
        if (b.prata !== a.prata) {
            return b.prata - a.prata;
        }
        return b.bronze - a.bronze;
    });
}

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
    
    rankingSorting(ranking);

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

const verifyAction = (actionCaseYes, actionCaseNo, country) => {
    rl.question('\nPor favor, digite Y para SIM, N para NÃO ou Sair para SAIR: ', (isCorrect) =>{
        verifyExitAction(isCorrect, () => {
            if (isCorrect.toLowerCase() === 'y') {
                actionCaseYes(country);
            } else if (isCorrect.toLowerCase() === 'n') {
                console.log('\nVamos tentar novamente.');
                actionCaseNo();
            } else {
                console.log('\nResposta não reconhecida.');
                verifyAction(actionCaseYes, actionCaseNo, country);
            }
        });
    });
}

const getNewMedalValue = (medal, country) =>{
    verifyExitAction(medal, () => {
        if (verifyMedalType(medal)) {
            rl.question(`\n Digite o novo valor para medalhas de ${medal}: `, (newValue) => {
                const numValue = Number(newValue) || 0;
                
                countries[country][medal] = numValue;
                
                console.log(`\n Medalhas atualizadas para ${country}: OURO: ${countries[country].ouro}, PRATA: ${countries[country].prata}, BRONZE: ${countries[country].bronze}`);
                rl.question('\n Deseja modificar outra medalha? (Y/N): ', (answer) => {
                    if (answer.toLowerCase() === 'y') {
                        modifyMedals(country);
                    } else {
                        showRanking();
                        getCountry();
                    }
                });
            });
        } else {
            console.log('\n Tipo de medalha inválido. Por favor, escolha entre ouro, prata ou bronze.\n');
            modifyMedals(country);
        }
    });
}

const modifyMedals = (country) => {
    console.log(`\nModificando medalhas para ${country}:`);
    console.log(`\nMedalhas atuais: OURO: ${countries[country].ouro}, PRATA: ${countries[country].prata}, BRONZE: ${countries[country].bronze}`);
    
    rl.question('\nQual medalha deseja modificar? (ouro/prata/bronze): ', (medalType) => {
        medalType = medalType.toLowerCase();
        getNewMedalValue(medalType, country);
    });
}

const getMedals = (country) => {
    rl.question('\nDigite as medalhas de ouro: ', (goldenMedals) => {
        rl.question('\nDigite as medalhas de prata: ', (silverMedals) => {
            rl.question('\nDigite as medalhas de bronze: ', (bronzeMedals) => {
                countries[country] = {
                    ouro: Number(goldenMedals) || 0,
                    prata: Number(silverMedals) || 0,
                    bronze: Number(bronzeMedals) || 0
                };
                console.log(`\nMedalhas registradas para ${country}: OURO: ${countries[country].ouro}, PRATA: ${countries[country].prata}, BRONZE: ${countries[country].bronze}`);
                showRanking();
                getCountry();
            });
        });
    });
}

const verifyIfCountryExists = (country) => {
    if (countries[country]) {
        console.log(`\nO país ${country} já existe no ranking!`);
        console.log('\nDeseja modificar as medalhas deste país? (Y/N)');
        verifyAction(modifyMedals, getCountry, country);
    } else{
        getMedals(country);
    }
}

const getCountry = () =>{
    rl.question('Digite um país: ', (country) => {
        verifyExitAction(country, () => {
            countryTyped = formatCountryName(country);
            console.log(`\nVocê digitou: ${countryTyped}, está correto?`);
            verifyAction(verifyIfCountryExists, getCountry, countryTyped);
        });
    });
}

const exitAction = () => {
    console.log('\nSaindo do programa...\n');
    if (Object.keys(countries).length > 0) {
        showRanking();
    } else {
        console.log('\nNenhum país foi registrado.\n');
    }
    rl.close();
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

main();