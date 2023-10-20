class jajargenjang{
    constructor (a,b,t){


        this.alas = a 
        this.sisimiring = b
        this.tinggi = t

    }

    keliling = () => {
        return 2* (this.alas + this.sisimiring)
    }

    luas = () => {
        return this.alas * this.tinggi
    }
}

let kolam = new jajargenjang(5,8,10)
console.log ("Luas Kolam = " + kolam.luas());
console.log("Keliling Kolam = " + kolam.keliling())


