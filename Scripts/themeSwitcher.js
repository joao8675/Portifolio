let switcher = document.getElementById('switcher');
let slider = document.querySelector('.slider');

switcher.addEventListener('click', () => {
    switcher.classList.toggle('white');
    
    // Adiciona lógica para mudar o background
    if (switcher.classList.contains('white')) {
        switcher.style.backgroundColor = 'blue'; // Altere a cor conforme necessário
    } else {
        switcher.style.backgroundColor = 'initial'; // Restaura a cor original ou defina outra cor
    }

    // Adiciona lógica para mudar a posição e a cor do slider
    if (slider.classList.contains('white')) {
        slider.style.left = '1px';
        slider.style.backgroundColor = 'aliceblue';
    } else {
        slider.style.left = '50px'; // ou outra posição desejada
        slider.style.backgroundColor = 'outra-cor'; // Altere a cor conforme necessário
    }
});