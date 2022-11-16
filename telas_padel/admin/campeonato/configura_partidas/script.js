const columns = document.querySelectorAll(".column");
const colunaArray = Array.from(columns)
const tabela = document.getElementsByTagName('tbody');
const linha = document.getElementsByClassName('column')
document.addEventListener("dragstart",(e) =>{
  e.target.classList.add("dragging");

 } 
);
document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

columns.forEach((item)=>{
  item.addEventListener('dragover' ,() =>{
    /*
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition( item, e.clientY);

    if(applyAfter){
      applyAfter.insertAdjacentElement('afterend', dragging);
    }else{
      item.prepend(dragging);
    }*/
  });
});

/*
function getNewPosition(column, posY){
  const cards = column.querySelectorAll(".dupla:not(.dragging)");
  let result;
  for(let refer_card of cards){
    const box = refer_card.getBoundingClientRect()
    const boxCenterY = box.x + box.height/2;
  

    if(posY >= boxCenterY) result = refer_card; 
    
  }

  return result 
}*/