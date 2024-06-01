let Frutas          = []
let Laticinios      = []
let Congelados      = []
let Doces           = []
let Continue        = true

while(Continue){
    let ValidaQuantidade    = true
    let ValidaRemocao       = true

    AddRemoveItem = confirm('Deseja adicionar ou remover uma comida da sua lista de compras? [OK] para adicionar e [CANCELAR] para remover.')

    if(!AddRemoveItem){
        if (Frutas.length == 0 && Laticinios.length == 0 && Congelados.length == 0 && Doces.length == 0){
            alert('Todas as categorias estão vazias, portanto não é possível remover itens.')
            ValidaQuantidade = false
        }else{
            var ItemParaRemover = prompt(`Qual item você deseja remover? \n ${Frutas}\n ${Laticinios}\n ${Doces}\n ${Congelados}`)
        }
    }
    
    if (AddRemoveItem){
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
        
        }
    }else if(ValidaQuantidade){
        let IndiceRemoveFrutas      = Frutas.indexOf(ItemParaRemover)
        let IndiceRemoveLaticinios  = Laticinios.indexOf(ItemParaRemover)
        let IndiceRemoveDoces       = Doces.indexOf(ItemParaRemover)
        let IndiceRemoveCongelados  = Congelados.indexOf(ItemParaRemover)
        if (IndiceRemoveFrutas != -1){
            Frutas.splice(IndiceRemoveFrutas, 1)
            
        }else if(IndiceRemoveLaticinios != -1){
            Laticinios.splice(IndiceRemoveLaticinios, 1)

        }else if(IndiceRemoveDoces != -1){
            Doces.splice(IndiceRemoveDoces, 1)

        }else if(IndiceRemoveCongelados != -1){
            Congelados.slice(IndiceRemoveCongelados, 1)

        }else{
            alert('Item não encontrado.')
            ValidaRemocao = false
        }

        if (ValidaRemocao){
            confirm(`Remoção realizada com sucesso: \n ${Frutas}\n ${Laticinios}\n ${Doces}\n ${Congelados}`)
        }
    }

    Continue      = confirm('Deseja continuar manipulando sua lista de compras?')
    if (!Continue){
        break
    }
}

let Paragrafo               = document.createElement('p')
Paragrafo.innerText         = `Frutas: ${Frutas}\n  Laticínios: ${Laticinios}\n  Doces: ${Doces}\n  Congelados: ${Congelados}`
document.body.appendChild(Paragrafo)