class Televisao {
    constructor (canal, volume) {
        this.setCanal(canal);
        this._volume = volume;
    }
    setCanal(canal) {
        this._canal = canal;
    }
    aumenta() {
        if (this._volume > 9) {
            alert("O volume deve ser na faixa de 0 à 10");
        } else {
            this._volume++;
        }   
    }
    diminui() {
        if (this._volume < 1 ) {
            alert("O volume deve ser na faixa de 0 à 10");
        } else {
            this._volume--;
        }   
    }
    mute() {
        this._volume = 0;
    }
    getCanal() {
        return this._canal;
    }
    getVolume() {
        return this._volume;
    }

}