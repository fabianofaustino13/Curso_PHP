class ContaCorrente {
    constructor (conta, nome, saldo) {
        this.setConta(conta);
        this.setAlterarNome(nome);
        this._saldo = saldo;
    }
    setConta(conta) {
        this._conta = conta;
    }
    setAlterarNome(nome) {
        this._nome = nome;
    }
    getNome() {
        return this._nome;
    }
    getSaldo() {
        return this._saldo;
    }
    setDeposito(saldo) {
        this._saldo += saldo;
    }
    setSaque(saldo) {
        this._saldo -= saldo;
    }

}