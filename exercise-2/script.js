let players = [
    {symbol: 'X', name: 'Iyzu'},
    {symbol: 'O', name: 'Ivy'}
]

document.getElementById('p1-symbol').textContent = players[0].symbol
document.getElementById('p2-symbol').textContent = players[1].symbol

document.getElementById('p1-name').textContent = players[0].name
document.getElementById('p2-name').textContent = players[1].name

let currentPlayer = 0
const boxes = document.querySelectorAll('.square')
console.log(boxes)

boxes.forEach(box => {
  box.addEventListener("click", () => {
    if (box.textContent === "") {
      box.textContent = players[currentPlayer].symbol;
      currentPlayer = currentPlayer === 0 ? 1 : 0;
    } else {
      alert("sudah terisi")
    }
  });
});

