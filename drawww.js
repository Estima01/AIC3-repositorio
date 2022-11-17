const principalContainer = document.querySelector('.principal-container');

function createContainer(doubles){
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
    }
}

function clearScreen(){
    console.log('Foi')
    for(let i = 0; i < doubles.value; i++){
        if(principalContainer.contains(document.querySelector('.container-chave'))){
            const misterio = document.querySelector('.container-chave');
            misterio.remove(misterio.firstElementChild)
            console.log(misterio)
        }
    }    
}

function getDoubles(){

    let doubles = document.getElementById('doubles').value;
    let keys = doubles / 3;
    let position = 0;
    createContainer(keys);
    while(position != keys){
        console.log('position', position)
        console.log('doubles', doubles)
        createDoubles(doubles, position);
        doubles /= 3;
        position += 1;


    }

    /* 
    let doubles = document.getElementById('doubles').value;
    console.log('doubles dps', doubles);
    createContainer(doubles/2)
    createDoubles(doubles,0)
    createDoubles((doubles/2),1)
    createDoubles((doubles/4),2)
    createDoubles((doubles/8),3) */
    
}

// dic = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']