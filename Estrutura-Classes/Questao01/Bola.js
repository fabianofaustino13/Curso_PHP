class Bola {
    constructor(cor, circunferencia, material) {
        this.setCor(cor);
        this._circunferencia = circunferencia;
        this._material = material;
    }

    setCor(cor) {
        this._cor = cor;                  
    }

    getCor(cor) {
        return this._cor;
    }
}