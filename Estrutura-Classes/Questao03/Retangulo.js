class Retangulo {
    // constructor(base, altura) {
    //     this.setBase(base);
    //     this.setAltura(altura);
    // }

    // setBase(base) {
    //     this._base = base;
    // }
    // setAltura(altura) {
    //     this._altura = altura;
    // }

    // getMostrar(base, altura) {
    //     return (('Base ' + this._base + ' e Altura ' + this._altura));
    // }
    
    // getCalcularArea(base, altura){
    //     return (this._base * this._altura);
    // }
    
    // getCalcularPerimetro(base, altura){
    //     return ((this._base * 2 ) + (this._altura * 2));
    // }
    constructor(base, altura, margem) {
        this._base = base;
        this._altura = altura;
        this._margem = margem;
    }
    definirBase(base) {
        this._base = base;
    }
    definirAltura(altura) {
        this._altura = altura;
    }
    obterBase() {
        return this._base;
    }
    obterAltura() {
        return this._altura;
    }
    obterArea() {
        return this._base * this._altura;
    }
    obterMargem() {
        let perda = this.obterArea();
        return perda += (perda*margem);
    }
    obterPirimetro() {
        return 2 * (this._base + this._altura);
    }
}