class tabung {
    constructor (jari,tinggi){

        this.jari = jari
        this.tinggi = tinggi

    }

    Volume = () => {
        return Math.PI * this.jari*this.jari * this.tinggi;
    }

    LuasPermukaan = () => {
        return 2 * Math.PI * this.jari * ( this.jari + this.tinggi);
    }
}


let kaleng = new tabung(10,20)
console.log ("Volume Kaleng = " + kaleng.Volume());
console.log("Luas Permukaan Kaleng = " + kaleng.LuasPermukaan());

