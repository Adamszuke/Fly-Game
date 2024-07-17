let button = document.getElementById('fly');
let height = window.innerHeight - 100;
let width = window.innerWidth - 100;
let flyClicked = 0;
let clickedText = document.getElementById('variable-text');

button.addEventListener('mouseover', function(){
    setTimeout(function() {
        button.style.position = 'absolute';
        button.style.top = Math.random() * height + 'px';
        button.style.left = Math.random() * width + 'px';
    }, 1000)
})

button.addEventListener('click', function(){
    flyClicked += 1;
    clickedText.textContent = flyClicked;
})

