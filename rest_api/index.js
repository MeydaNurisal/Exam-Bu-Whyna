const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors

const app = express() //implementasi express

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())


// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    message: "Ini end-point pertama ku", // menampilkan data
    method: req.method, // menampilkan method
    code: res.statusCode // menampilkan response code
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
    })
    

    // endpoint "/profil/nama/umur" dengan method GET
app.get("/profil/:name/:age", (req,res) => {
    // :name dan :age 🡪 diberikan titik dua didepan menunjukkan "name" dan "age"
    // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
    // menampung data yang dikirimkan
    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age
    // membuat objek yang berisi data yang akan dijadikan response
    // response berisi data nama dan umur sesuai dengan nilai parameter
    let response = {
    nama: name,
    umur: age
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
    })
    
  // end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    panjang: panjang,
    lebar: lebar,
    luas: luas,
    keliling: keliling
    }
    res.json(response)
})
// ----------------------- Bangun Ruang----------------------------
app.post("/VolumeLuasP_tabung", (req, res) => {
    let jari = Number(req.body.jari);
    let tinggi = Number(req.body.tinggi);

    let LuasPermukaan = 2 * Math.PI * jari * (jari + tinggi);
    let volumeTabung = Math.PI * jari * jari * tinggi;

    let response = {
        tinggi: tinggi,
        jari: jari,
        LuasPermukaan: LuasPermukaan,
        volumeTabung: volumeTabung
    };
    res.json(response);
})



app.post("/VolumeLuasP_Bola", (req, res) =>{
    let jari = Number(req.body.jari);
    let LuasPermukaan = 4 * Math.PI * jari * jari;
    let VolumeBola = (4/3) * Math.PI * jari *jari *jari;

    let response = {
        jari: jari,
        LuasPermukaan: LuasPermukaan,
        VolumeBola: VolumeBola
    };

    res.json(response);


})

app.post("/VolumeLuasP_Kerucut", (req, res) =>{
    let garisP = Number (req.body.garisP);
    let jari = Number (req.body.jari);
    let tinggi = Number (req.body.tinggi);
    let VolumeKerucut = (1/3) * Math.PI * jari *jari*tinggi;
    let LuasP_Kerucut = (Math.PI * jari * garisP) + (Math.PI * jari *jari);

    let response = {
        garisP: garisP,
        jari: jari,
        tinggi: tinggi,
        VolumeKerucut: VolumeKerucut,
        LuasP_Kerucut: LuasP_Kerucut

    }

    res.json(response);
})

app.post("/VolumeLuasP_Kubus", (req, res) =>{
    let rusuk = Number (req.body.rusuk);
    let LuasP_Kubus = 6 * (rusuk *rusuk);
    let VolumeKubus  = rusuk*rusuk*rusuk;

    let response = {
        rusuk: rusuk,
        VolumeKubus: VolumeKubus,
        LuasP_Kubus: LuasP_Kubus
    }

    res.json(response);
})
//-----------------------SUHU------------------------
// -------------CELCIUS--------------
app.get("/convert/celcius/:number", (req, res)=>{
    let celcius = req.params.celcius;
    let number = parseFloat (req.params.number);
    let Fahrenheit = (9/5) * number + 32;
    let Kelvin = number + 273.15;
    let Reamur = (4/5)*number

    let response = {
        celcius: celcius,
        number: number,
        Fahrenheit: Fahrenheit,
        Reamur: Reamur,
        Kelvin: Kelvin,
    }

    res.json(response);
})
//---------------Reamur----------------
app.get("/convert/reamur/:number", (req, res)=>{
    let Reamur = req.params.Reamur;
    let number = parseFloat (req.params.number);
    let Celcius = (5/4) * number;
    let Kelvin = (5/4) * number + 273.15;
    let Fahrenheit = (9/4)*number * 32;

    let response = {
        Reamur: Reamur,
        number: number,
        Celcius: Celcius,
        Kelvin: Kelvin,
        Fahrenheit: Fahrenheit
    }

    res.json(response);
})

//-----------------Fahrenheit-----------
app.get("/convert/:suhu/:number", (req, res)=>{
    let suhu = req.params.suhu;
    let number = parseFloat (req.params.number);
    let Celcius = (5/9) *( number - 32) ;
    let Kelvin = (5/9) * (number-32)+273.15;
    let Reamur = (4/9 )* (number-32);

    let response = {
        suhu: suhu,
        number: number,
        Celcius: Celcius,
        Kelvin: Kelvin,
        Reamur: Reamur
    }

    res.json(response);
})
//----------------Kelvin----------------
// Endpoint untuk mengonversi suhu Kelvin ke Fahrenheit, Reamur, dan Celcius
app.get("/convert/kelvin/:number", (req, res) => {
    let number = parseFloat(req.params.number); // Mengambil nilai suhu dalam Kelvin
    let Celcius = number - 273.15;
    let Fahrenheit = (9/5) * (number - 273.15) + 32;
    let Reamur = (4/5) * (number - 273.15);
    
    let response = {
        suhu: "Kelvin",
        number: number,
        Fahrenheit: Fahrenheit,
        Reamur: Reamur,
        Celcius: Celcius,
    }

    res.json(response);
})


//-----------------Biner------------------- 
//-----------------Decimal-----------------
app.post("/Decimal", (req, res) => {
    let decimal = req.body.decimal
    let binary = (decimal >>> 0).toString(2);
    let octa = (decimal >>> 0).toString(8);
    let hexadecimal = (decimal >>> 0).toString(16);

    let response = {
        decimal: decimal,
        binary: binary,
        octa: octa,
        hexadecimal: hexadecimal
    }
    res.json(response);

})

//--------------Binary----------------------
app.post("/Binary", (req, res) => {
    let binary = req.body.binary
    let decimal = parseInt(binary, 2);
    let octa = decimal.toString(8);
    let hexadecimal = decimal.toString(16).toUpperCase();

    let response = {
        binary: binary,
        decimal: decimal,
        octa: octa,
        hexadecimal: hexadecimal
    }
    res.json(response);

})

//--------------Octal----------------------
app.post("/Octal", (req, res) => {
    let octa = req.body.octa
    let decimal =  parseInt(octa, 8);
    let binary = decimal.toString(2);
    let hexadecimal = decimal.toString(16);

    let response = {
        octa: octa,
        decimal: decimal,
        binary: binary,
        hexadecimal: hexadecimal
    }
    res.json(response);

})

app.post("/bmi", (req, res) => {
    // Menampung data tinggi dan berat yang dikirimkan dalam permintaan
    let tinggi = Number(req.body.tinggi); // dalam meter
    let berat = Number(req.body.berat); // dalam kilogram

    // Menghitung BMI (Indeks Massa Tubuh)
    let bmi = berat / (tinggi * tinggi);

    // Menentukan status BMI
    let status = "";
    if (bmi < 18.5) {
        status = "Kurang berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = "Kelebihan berat badan";
    } else {
        status = "Kegemukan";
    }

    // Membuat objek yang berisi data BMI dan status
    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    };

    // Memberikan respons dengan format JSON yang berisi objek di atas
    res.json(response);
});



// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
    })
    