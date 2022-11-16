const square = document.createElement('div');
square.classList.add('square');
square.innerText = 'Padre Marcelo Rossi \n Paulo Cavalcante Muzy';

let insercao = document.querySelector('.testegrande');
//insercao.insertAdjacentHTML('afterbegin', 'square');
insercao.appendChild(square);

let doubles = 8;
let nameDoubles = 'teste da silva \n testando soares';

// Criação dos demais retângulos utilizando a variável com o número de duplas
// e nome dos jogadores da mesma

for (let i = 1; i < ((doubles * 2) - 2); i++) {
    const clone = square.cloneNode();
    clone.innerText = nameDoubles;
    //document.body.appendChild(clone);
    insercao.appendChild(clone);
}
