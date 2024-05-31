let Frutas          = []
let Laticinios      = []
let Congelados      = []
let Doces           = []
let AddItem         = true

while(AddItem){
    AddItem = confirm('Deseja adicionar uma comida na sua lista de compras?')
    if (!AddItem){
        break
    }
    let Comida      = prompt('Qual comida você deseja adicionar?')
    let Categoria   = prompt('Qual categoria essa comida se encaixa?')

    if (Categoria.toUpperCase() === 'FRUTAS'){
        Frutas.push(Comida)
    }else if(Categoria.toUpperCase() === 'LATICÍNIOS' || Categoria.toUpperCase() === 'LATICINIOS'){
        Laticinios.push(Comida)
        
    }else if(Categoria.toUpperCase() === 'CONGELADOS'){
        Congelados.push(Comida)
    }else if(Categoria.toUpperCase() === 'DOCES'){
        Doces.push(Comida)
    }else{
        alert('Categoria não encontrada.')
        break
    }

}

let Paragrafo               = document.createElement('p')
Paragrafo.innerText         = `Frutas: ${Frutas}\n  Laticínios: ${Laticinios}\n  Doces: ${Doces}\n  Congelados: ${Congelados}`
document.body.appendChild(Paragrafo)