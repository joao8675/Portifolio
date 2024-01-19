const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
var elementsToToggle = document.querySelectorAll('.white');

function handleClick() {
    this.classList.toggle('active');
    container.classList.toggle('active');
}

btn.addEventListener('click', handleClick);

elementsToToggle.forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});