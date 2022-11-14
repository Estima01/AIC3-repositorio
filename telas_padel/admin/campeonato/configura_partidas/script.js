const dupla = document.querySelector('.dupla');
dupla.addEventListener('dragstart', drag_dupla)
function drag_dupla(e){
  console.log('dragou')

}
dupla.addEventListener('dragover', drop_dupla)
function drop_dupla(e){
  console.log('dropou')

}