//const menuLinks = document.querySelectorAll('.menu a');


//function getDistanceFromTheTop(element) {
//    const id = element.getAtribute("href");
//    return document.querySelector(id).offsetTop
//}



//function nativeScroll(DistanceFromTheTop) {
//    window.scroll({
//        top: DistanceFromTheTop, 
//        behavior: "smooth",
//    })
//}



//function scrollToSection(event) {
//    event.preventDefault();
//    const DistanceFromTheTop = getDistanceFromTheTop(event.target) - 120;
//    nativeScroll(DistanceFromTheTop);
//}


//menuLinks.forEach((link) => {
//    link.addEventListener("click", scrollToSection)
//})

function typeWriter(elemento, texto, i = 0) {
    if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        setTimeout(function() {
            typeWriter(elemento, texto, i + 1);
        }, 100);
    } else {
        setTimeout(function() {
            deleteText(elemento);
        }, 1000);
    }
}

function deleteText(elemento) {
    const textoAtual = elemento.innerHTML;
    if (textoAtual.length > 0) {
        elemento.innerHTML = textoAtual.slice(0, -1);
        setTimeout(function() {
            deleteText(elemento);
        }, 50);
    } else {
        setTimeout(function() {
            typeWriter(elemento, "Your New Text Here");
        }, 500);
    }
}

const titulo = document.querySelector('.title');
setInterval(function() {
    titulo.innerHTML = '';
    typeWriter(titulo, titulo.textContent);
}, 5000);

