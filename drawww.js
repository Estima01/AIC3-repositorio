const principalContainer = document.querySelector('.principal-container');
//let containerChave;
let doubles = 8;

    function CreateContainer(doubles){
        for(let i = 0; i < doubles; i++){
        let container = document.createElement('div');
        principalContainer.appendChild(container);
        container.classList.add('container-chave');
        }   
    }

    function createDoubles(doubles, position){
        containerChave = document.querySelectorAll('.container-chave');

        for(let i = 0; i < doubles; i++){
            let container1 = document.createElement('div')
            containerChave[position].appendChild(container1);
            container1.classList.add('container-dupla-1')
            //console.log('position', position)
        }
    }

    CreateContainer(4)
    createDoubles(8,0)
    createDoubles(4,1)
    createDoubles(2,2)
    createDoubles(1,3)



    //input1 = Number(document.getElementById('input1').value)









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
