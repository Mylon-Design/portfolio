// scroll to top button

// esta função fará com que o botão fique visível apenas após a rolagem do conteúdo.
window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scrollTop') // let scroll select .scrollTop class
        scroll.classList.toggle('active', window.scrollY > 450)
})

// função scroll to top.
function backTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function scrollToSection(sobremim) {
    var section = document.getElementById(sobremim);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(works) {
    var section = document.getElementById(works);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(experiencias) {
    var section = document.getElementById(experiencias);
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(contact) {
    var section = document.getElementById(contact);
    section.scrollIntoView({ behavior: 'smooth' });
}