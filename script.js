const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(element => {

        const alturaJanela = window.innerHeight;

        const topoElemento =
        element.getBoundingClientRect().top;

        if(topoElemento < alturaJanela - 100){

            element.classList.add("active");

        }

    });

});