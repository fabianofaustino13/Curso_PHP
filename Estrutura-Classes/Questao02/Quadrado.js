class Quadrado {
    constructor(tamanho) {
        this.setLado(tamanho);
    }

    setLado(tamanho) {
        this._tamanho = tamanho;                  
    }

    getLado(tamanho) {
        return this._tamanho;
    }
    
    getCalcularArea(tamanho){
        return (this._tamanho**2);
    }
}