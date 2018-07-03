class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.setNome(nome);
        this.setIdade(idade);
        this.setPeso(peso);
        this.setAltura(altura);
    }

    setNome(nome) {
        this._nome = nome;
    }
    
    setIdade(idade) {
        this._idade = idade;
        if (this._idade < 21) {
            this._altura += 0.005; 
        }
    }
    
    envelhecer() {
        this._idade++;
        if (this._idade < 21) {
            this._altura += 0.005; 
        }
    }
    
    setPeso(peso) {
        this._peso = peso;
    }
    
    // engordar() {
    //     this._peso += engordar;
    // }
    
    // emagrecer(emagrecer) {
    //     this._peso -= emagrecer;
    // }

    setAltura(altura) {
        this._altura = altura;
    }
    
    crescer() {
        if (this._idade < 21) {
            this._altura += 0.005; 
        }
    }

    mostrar() {
        return (('Nome ' + this._nome + ' Idade ' + this._idade + ' Peso ' + this._peso + ' e Altura ' + this._altura));
    }
}