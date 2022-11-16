const principalContainer = document.querySelector('.principal-container');

let doubles = 8;
let contador = 1

while(doubles >= 1){


    let container = document.createElement(`div`);
    principalContainer.appendChild(container);
    container.classList.add('container-chave');


    for (let i = 1; i < (doubles+1); i++) {
        let containerChave = document.querySelectorAll('.container-chave');
        let container1 = document.createElement('div')
        console.log(containerChave)
        containerChave[contador].append(container1);
        container1.classList.add('container-dupla-1')
        //console.log('i',i);

    }
    console.log('doubles',doubles);
    doubles /= 2;
    contador += 1
}







/*
const square = document.createElement('div');
square.classList.add('square');
square.innerText = 'Padre Marcelo Rossi \n Paulo Cavalcante Muzy';

let insercao = document.querySelector('.testegrande');
//insercao.insertAdjacentHTML('afterbegin', 'square');
insercao.appendChild(square);


let nameDoubles = 'teste da silva \n testando soares';

// Criação dos demais retângulos utilizando a variável com o número de duplas
// e nome dos jogadores da mesma

for (let i = 1; i < ((doubles * 2) - 2); i++) {
    const clone = square.cloneNode();
    clone.innerText = nameDoubles;
    //document.body.appendChild(clone);
    insercao.appendChild(clone);
} */
