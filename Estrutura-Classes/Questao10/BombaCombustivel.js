class BombaCombustivel {
    constructor(tipo_combustivel, valor_litro, qnt_bomba) {
        this._tipo = tipo_combustivel;
        this._valor = valor_litro;
        this._qnt = qnt_bomba;
    }
    alterarTipo(tipo) {
        this._tipo = tipo;
    }
    alterarValorLitro(valor) {
        this._valor = valor;
    }
    alterarQntBomba(qnt) {
        //let alterar_qnt_bomba = parseFloat(prompt('Informe a quantidade de litros para atualizar na bomba'));
        this._qnt += qnt;
    }
    abastecerPorValor(valor) {
        let litros = (valor / this._valor);
//        alert('Litros ' + litros + ' qnt ' + this._qnt);
        if (this._qnt < litros) {
//            alert('Aqui 1 ');
            return false;
        }else{
//           alert('Aqui 2 ');
            this._qnt -= (valor / this._valor);
            return (litros);
        }
    }
    abastecerPorLitro(qnt) {
        //let abastecer_litro = parseFloat(prompt('Deseja colocar quantos reais?'));
        this._qnt -= qnt;
        return (this._valor * qnt);
    }
    obterQntBomba() {
        return this._qnt;
    }
    obterValorLitro() {
        return this._valor;
    }
    obterCombustivel() {
        let tipo_combustivel = 'Gasolina';
        if (this._tipo == 2) {
            tipo_combustivel = 'Álcool';
        } else if (this._tipo == 3) {
            tipo_combustivel = 'Diesel';
        }
        return tipo_combustivel;
    }
}
/*Classe Bomba de Combustível: Faça um programa completo utilizando classes e métodos que:
            Possua uma classe chamada bombaCombustível, com no mínimo esses atributos:
            tipoCombustivel.
            valorLitro
            quantidadeCombustivel
            Possua no mínimo esses métodos:
            abastecerPorValor( ) – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
            abastecerPorLitro( ) – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
            alterarValor( ) – altera o valor do litro do combustível.
            alterarCombustivel( ) – altera o tipo do combustível.
            alterarQuantidadeCombustivel( ) – altera a quantidade de combustível restante na bomba.
            OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba.*/