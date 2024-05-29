/* ***DESAFIO*** */
let nome        = prompt('Qual o seu nome?')
let idade       = prompt('Quantos anos você tem?')
let linguagem   = prompt('Qual liguagem de programação você está estudando?')

alert(`Olá ${nome.toUpperCase()}, você tem ${idade} anos e já está aprendendo ${linguagem.toUpperCase()}!`)

/* ***EXTRA*** */
let avaliacaolinguagem = prompt(`Você gosta de estudar ${linguagem.toUpperCase()}? Responda com 1 para SIM ou 2 para NÃO.`)

if (avaliacaolinguagem == 1){
    alert('Que bom, continue estudando! :)')
}else{
    if (avaliacaolinguagem == 2){
        alert('Poxa vida! Tente migrar para outra linguagem. :(')
    }else{
        alert('Desculpe, mas eu não entendi sua resposta.')
    }
}