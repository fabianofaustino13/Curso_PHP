class Retangulo {
    constructor(base, altura) {
        this.setBase(base);
        this.setAltura(altura);
    }

    setBase(base) {
        this._base = base;
    }
    setAltura(altura) {
        this._altura = altura;
    }

    getMostrar(base, altura) {
        return (('Base ' + this._base + ' e Altura ' + this._altura));
    }
    
    getCalcularArea(base, altura){
        return (this._base * this._altura);
    }
    
    getCalcularPerimetro(base, altura){
        return ((this._base * 2 ) + (this._altura * 2));
    }
}