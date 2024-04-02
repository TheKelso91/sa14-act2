const block = document.getElementById('movable-block');
const button = document.getElementById('control-button');
let isMoved = false;

button.addEventListener('click', () => {
    block.classList.toggle('moved');
    isMoved = !isMoved;
    button.textContent = isMoved ? 'Move Back' : 'Move'; 
});
