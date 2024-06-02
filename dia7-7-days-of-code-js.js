while(true){
    let Operacao            = prompt('Qual operação você deseja realizar?\n **1 - Adição**\n **2 - Subtração**\n**3 - Multiplicação**\n**4 - Divisão**\n**5 - Sair**')
    if(Operacao == '5'){
        alert('Até a próxima.')
        break
    }else{

        var Numero1             = prompt('Digite o primeiro número: ')
        var Numero2             = prompt('Digite o segundo número: ')
        var Resultado           = 0
        var OperacaoRelizada    = ''

        switch (Operacao) {
            case '1':
                Resultado           = Adicao(Numero1, Numero2)
                OperacaoRelizada    = '+'
                break

            case '2':
                Resultado           = Subtracao(Numero1, Numero2)
                OperacaoRelizada    = '-'
                break

            case '3':
                Resultado           = Multiplicacao(Numero1, Numero2)
                OperacaoRelizada    = '*'
                break

            case '4':
                Resultado           = Divisao(Numero1, Numero2)
                OperacaoRelizada    = '/'
                break
        }
    }

    alert(`${Numero1} ${OperacaoRelizada == '' ? '?' : OperacaoRelizada} ${Numero2} = ${Resultado}`)

}


function Adicao (numero1, numero2){
    return parseFloat(numero1) + parseFloat(numero2)
}

function Subtracao(numero1, numero2){
    return parseFloat(numero1) - parseFloat(numero2)
}

function Multiplicacao(numero1, numero2){
    return parseFloat(numero1) * parseFloat(numero2)
}

function Divisao(numero1, numero2){
    return numero2 == 0 ? 'Error' :  parseFloat(numero1) / parseFloat(numero2)
}