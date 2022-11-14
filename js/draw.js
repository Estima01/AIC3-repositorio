// Criação do primeiro retângulo e inserção no documento
const square = document.createElement('div');
square.style.width = '200px';
square.style.height = '50px';
square.style.padding = '10px';
square.style.margin = '20px'
square.style.marginLeft = "275px"
square.style.borderRadius = '10px'
square.style.backgroundColor = '#1c8d9e';
square.style.display = 'flex';

square.style.fontSize = '12px'
square.innerText = 'Padre Marcelo Rossi \n Paulo Cavalcante Muzy';

document.body.appendChild(square);

// Variáveis com o número de duplas e nome dos jogadores das duplas
let doubles = 12;
let nameDoubles = 'teste da silva \n testando soares';

// Criação dos demais retângulos utilizando a variável com o número de duplas
// e nome dos jogadores da mesma
for (let i = 2; i < (doubles + 1); i++) {
    const clone = square.cloneNode();
    clone.innerText = nameDoubles;
    document.body.appendChild(clone);
}

// --------------- 2 -----------------

const square2 = document.createElement('div');
square2.style.width = '200px';
square2.style.height = '50px';
square2.style.padding = '10px';
square2.style.margin = '20px';
square2.style.marginTop = '0';
square2.style.marginLeft = "475px";
square2.style.borderRadius = '10px';
square2.style.backgroundColor = '#1c8d9e';
square2.style.display = 'flex';

square2.style.fontSize = '12px'
square2.innerText = '2 \n 2';

document.body.appendChild(square2);




for (let i = 2; i < ((doubles + 1)/2); i++) {
    const clone2 = square2.cloneNode();
    clone2.innerText = nameDoubles;
    document.body.appendChild(clone2);
}
