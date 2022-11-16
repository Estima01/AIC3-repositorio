let doubles = 8;
while (doubles >= 1) {
  let container = document.createElement(`div`);
  principalContainer.appendChild(container);
  container.classList.add("container-chave");

  for (let i = 1; i < doubles + 1; i++){
    let containerChave = document.querySelector(".container-chave");
    let container1 = document.createElement("div");
    console.log(containerChave);
    containerChave[contador].append(container1);
    container1.classList.add("container-dupla-1");
    //console.log('i',i);
  }
  console.log("doubles", doubles);
  doubles /= 2;
  contador += 1;
}
