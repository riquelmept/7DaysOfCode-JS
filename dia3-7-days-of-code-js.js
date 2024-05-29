const userName = prompt('Qual é o seu nome?');
let area_dev = '';

while (true) {
    area_dev = prompt('Você deseja seguir área de Front-End ou Back-End? Digite 1 para Front-End ou 2 para Back-End:');

    if (area_dev === '1') {
        area_dev = 'Front-End';
        break;
    } else if (area_dev === '2') {
        area_dev = 'Back-End';
        break;
    } else {
        alert('Opção inválida. Por favor, digite 1 para Front-End ou 2 para Back-End.');
    }
};

function chooseTechnology(area) {
    let technology = '';
    while (true) {
        if (area === 'Front-End') {
            technology = prompt(`Aprender ${area}? Digite 1 para React ou 2 para Vue:`).toLowerCase();
            if (technology === '1') {
                return 'React';
            } else if (technology === '2') {
                return 'Vue';
            } else {
                alert('Opção inválida, por favor digite 1 para React ou 2 para Vue.');
            }
        } else if (area === 'Back-End') {
            technology = prompt(`Aprender ${area}? Digite 1 para C# ou 2 para Java:`).toLowerCase();
            if (technology === '1') {
                return 'C#';
            } else if (technology === '2') {
                return 'Java';
            } else {
                alert('Opção inválida, por favor digite 1 para C# ou 2 para Java.');
            }
        }
    };
};

let devTechnology = chooseTechnology(area_dev);

let specializationOrFullstack = '';

while (true) {
    specializationOrFullstack = prompt(`${userName}, você deseja se especializar na área escolhida ou se tornar Fullstack? Digite 1 para especialização e 2 para Fullstack.`);
    if (specializationOrFullstack === '1' || specializationOrFullstack === '2') {
        break;
    } else {
        alert('Opção inválida, tente novamente!');
    };
};

if (specializationOrFullstack === '1') {
    alert(`Parabéns, ${userName}! Você escolheu se especializar na área de ${devArea}. Continue aprendendo e se aprimorando!`);
} else if (specializationOrFullstack === '2') {
    alert(`Excelente escolha, ${userName}! Ser Fullstack permitirá que você trabalhe em diversas áreas e tenha um conhecimento abrangente.`);
};

const technologies = [];

let moreTechnologies = '';

while (true) {
    moreTechnologies = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite "Sim" ou "Não".').toLowerCase();
    if (!['sim', 's', 'não', 'nao', 'n'].includes(moreTechnologies)) {
        alert('Opção Inválida');
    } else if (moreTechnologies === 'sim' || moreTechnologies === 's') {
        let newTech = prompt('Qual?');
        alert(`${newTech} é realmente uma tecnologia muito legal!`);
        technologies.push(newTech);
    } else if (moreTechnologies === 'não' || moreTechnologies === 'nao' || moreTechnologies === 'n') {
        break;
    };
};

alert('Ok, até a próxima!');

console.log(`${userName}, você escolheu aprender as seguintes tecnologias: ${devTechnology}, ${technologies.join(', ')}`);