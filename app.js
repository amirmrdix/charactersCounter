const textarea = document.querySelector('textarea');
const counter = document.querySelector('#counter');
let count = 0;

textarea.addEventListener('keydown', item => {
    if (item.key.length === 1) count++
    else if (item.key === 'Backspace' && count > 0) count--

    counter.innerHTML = count
});