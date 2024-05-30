let NumeroPensado       = Math.floor(Math.random() * (10 - 1)) + 1
let Count               = 0
let IsRespostaCorreta   = false

while (true) {
    if (Count >= 3 || IsRespostaCorreta){
        break
    }

    let PalpiteNumero = prompt('Estou pensando em um número entre 1 e 10. Que número é esse?')

    if (NumeroPensado != PalpiteNumero){
        Count += 1
        confirm('Resposta incorreta!')
    }else{
        confirm('Você acertou, parabéns!!!')
        IsRespostaCorreta = true
    }

}

if (!IsRespostaCorreta) {
    confirm(`O número que eu havia pensado era ${NumeroPensado}.`)
}