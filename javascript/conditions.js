var pres = window.document.querySelector('input#botao')
pres.addEventListener('click', vereficar)
pres.addEventListener('mouseenter', entrar)
pres.addEventListener('mouseout', saiu)

function vereficar() {
    let input0 = document.querySelector('input#txt0')
    let res = document.querySelector('p#Resultado')
    let nação = String(input0.value) 
    let image = document.querySelector('#image')

    if (nação.length == 0) {
        window.alert('[ERRO!] Digite um país válido!')
    }
    else if (nação == 'Brasil' || nação == 'Brazil' || nação == 'brasil' || nação == 'brazil' || nação == 'Federative Republic of Brazil' || nação ==  'República Federativa do Brasil') {
        res.innerHTML = 'Você é <strong>brasileiro</strong>'
        image.setAttribute('src', 'images/bra.png')  
        image.style.marginTop = '10px' 
        image.style.width = '158'
        image.style.height = '158'
    } 
    else {
        res.innerHTML = `Você é <strong>gringo</strong>, pelo fato de você ter nascido no país: <strong>${nação}</strong>`
        image.setAttribute('src', 'images/world.png')
        image.style.marginTop = '10px' 
        image.style.width = '145'
        image.style.height = '145'
    }
    } 

function entrar() {
    pres.style.height = "26.4px"
    pres.style.width = "169.4px"

}

function saiu() {
    pres.style.height = "24px"
    pres.style.width = "154px"
}