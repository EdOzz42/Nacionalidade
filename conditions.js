var pres = window.document.querySelector('input#botao')
pres.addEventListener('click', vereficar)

function vereficar() {
    let input0 = document.querySelector('input#txt0')
    let res = document.querySelector('div#Resultado')
    let nação = String(input0.value) 
        if (nação == 'Brasil') {
            res.innerHTML = 'Sim'
        } else {
            res.innerHTML = 'Nope'
        }
} 
