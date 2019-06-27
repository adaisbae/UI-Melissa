const changeColor = function(event){
    event.target.style.backgroundcolor = white;
}


const button = document.querySelector('.button a');
button.addEventListener('click', changeColor);
