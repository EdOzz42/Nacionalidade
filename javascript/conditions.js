var pres = window.document.querySelector('input#botao')
pres.addEventListener('click', vereficar)
pres.addEventListener('mouseenter', entrar)
pres.addEventListener('mouseout', saiu)

function vereficar() {
    let input0 = document.querySelector('input#txt0')
    let res = document.querySelector('div#Resultado')
    let nação = String(input0.value) 
        if (nação == 'Brasil' || nação == 'Brazil' || nação == 'brasil' || nação == 'brazil') {
            res.innerHTML = 'Você é <strong>brasileiro</strong>' 
        } else {
            res.innerHTML = `Você é <strong>gringo</strong>, pelo fato de você ter nascido no país: <strong>${nação}</strong>`
        }
    } 

function entrar() {
    pres.style.height = "25.3px"
    pres.style.width = "157.3px"

}

function saiu() {
    pres.style.height = "23px"
    pres.style.width = "143px"
}