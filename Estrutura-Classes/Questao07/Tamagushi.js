class Tamagushi {
    constructor(nome, fome, saude, idade) {
        this._nome = nome;
        this._fome = fome;
        this._saude = saude;
        this._idade = idade;
    }
    alterarNome(nome) {
        this._nome = nome;
    }
    alterarFome(fome) {
        this._fome = fome;
    }
    alterarSaude(saude) {
        this._saude = saude;
    }
    alterarIdade(idade) {
        this._idade = idade;
    }
    obterNome() {
        return this._nome;
    }
    obterFome() {
        let brocado = 'está';
        if (this._fome == 2) {
            brocado = 'não está';
        }
        return brocado;
    }
    obterSaude() {
        let saudavel = 'saudável';
        if (this._saude == 2) {
            saudavel = 'doente';
        }
        return saudavel;
    }
    obterIdade() {
        return this._idade;
    }
    humor(fome, saude) {
        if (this._fome == 1 && this._saude == 2) { //Humor bad
            //var estado = 'Humor bad';
            return 'mau';
        }else{
            return 'bem';
        }
    }
}