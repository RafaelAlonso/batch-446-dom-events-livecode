// 1. elemento que sofrera acao
const btn = document.querySelector('#show-hint');
// 2. acao
const eventType = 'click';
// 3. o que acontece quando sofrer a acao
const whatWillHappen = () => {
  const hint = document.querySelector('.hint');
  hint.style.opacity = '1';
  // hint.classList.add('active');
}
// 4. junta tudo
btn.addEventListener(eventType, whatWillHappen);

// ===========================================================

// 1. Identificar o que vamos mover
const tiles = document.querySelectorAll('td');

// 2. acao ( eh o eventType la de cima )
// eventType

// 3. o que vai acontecer quando sofrer a acao
const change = (event) => {
  // Trocar ele de lugar com a tecla preta se for vizinha
  const clickedTile = event.currentTarget; // tecla clicada
  const blackTile = document.querySelector('.empty'); // tecla preta

  // pegamos o numero da coluna de cada
  const clickedTileCol = clickedTile.cellIndex;
  const blackTileCol = blackTile.cellIndex;

  // pegamos o numero da linha de cada
  const clickedTileRow = clickedTile.parentNode.rowIndex;
  const blackTileRow = blackTile.parentNode.rowIndex;

  // para saber se sao vizinhos, precisam estar:
  // na mesma linha e coluna anterior ou proxima
  // na mesma coluna e linha anterior ou proxima
  if (clickedTileRow === blackTileRow &&
      (clickedTileCol - 1 === blackTileCol || clickedTileCol + 1 === blackTileCol) ||
     clickedTileCol === blackTileCol &&
      (clickedTileRow - 1 === blackTileRow || clickedTileRow + 1 === blackTileRow)){

    // troca de conteudos entre as duas teclas
    blackTile.innerText = clickedTile.innerText;
    clickedTile.innerText = '';

    // troca de classes entre as duas teclas
    blackTile.classList.remove('empty');
    clickedTile.classList.add('empty');

    // fazer uma verificacao se esta tudo em ordem

    // pega todas as tiles de novo
    const allTiles = document.querySelectorAll('td');
    // ordem final
    const finalOrder = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"

    // cria uma array com o conteudo de cada tile
    const tileOrders = []
    allTiles.forEach((tile) => {
      tileOrders.push(tile.innerText);
    })

    // se o conteudo for igual a ordem final
    if (tileOrders.join() === finalOrder){
      // mensagenzinha
      alert('Congratulations!!!')
      // recarrega a pagina
      location.reload();
    }

  }
}

// Para cada tile
tiles.forEach((tile) => {
  // adicionar o event listener
  tile.addEventListener(eventType, change)
})

