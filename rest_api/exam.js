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

//



app.get("/panjang/:tipe_panjang/:panjang", (req, res) => {
    let tipe_panjang = req.params.tipe_panjang;
    let panjang = Number(req.params.panjang);
    let response;
    let km, hm, dam, m, dm, cm, mm;

    if (tipe_panjang === "mm") {
        mm = panjang;
        cm = mm / 10;
        dm = cm / 10;
        m = dm / 10;
        dam = m / 10;
        hm = dam / 10;
        km = hm / 10;
        response = {
            Soal: "Konversi MM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipe_panjang === "cm") {
        mm = panjang * 10;
        cm = panjang;
        dm = cm / 10;
        m = dm / 10;
        dam = m / 10;
        hm = dam / 10;
        km = hm / 10;
        response = {
            Soal: "Konversi CM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipe_panjang === "dm") {
        mm = panjang * 100;
        cm = mm / 10;
        dm = panjang;
        m = dm / 10;
        dam = m / 10;
        hm = dam / 10;
        km = hm / 10;
        response = {
            Soal: "Konversi DM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipe_panjang === "m") {
        mm = panjang * 1000;
        cm = mm / 10;
        dm = cm / 10;
        m = panjang;
        dam = m / 10;
        hm = dam / 10;
        km = hm / 10;
        response = {
            Soal: "Konversi M",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipe_panjang === "dam") {
        mm = panjang * 10000;
        cm = mm / 10;
        dm = cm / 10;
        m = dm / 10;
        dam = panjang;
        hm = dam / 10;
        km = hm / 10;
        response = {
            Soal: "Konversi DAM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipe_panjang === "hm") {
        mm = panjang * 100000;
        cm = mm / 10;
        dm = cm / 10;
        m = dm / 10;
        dam = m / 10;
        hm = panjang;
        km = hm / 10;
        response = {
            Soal: "Konversi HM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    } else if (tipe_panjang === "km") {
        mm = panjang * 1000000;
        cm = mm / 10;
        dm = cm / 10;
        m = dm / 10;
        dam = m / 10;
        hm = dam / 10;
        km = panjang;
        response = {
            Soal: "Konversi KM",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km,
        };
    }

    res.json(response);
});

app.post('/hitung', (req, res) => {
    const dicari = req.body.dicari;
    const nilaiDiketahui = req.body.nilaiDiketahui;

    let F, m, a;

    if (dicari === 'F' && nilaiDiketahui.m && nilaiDiketahui.a) {
        F = nilaiDiketahui.m * nilaiDiketahui.a;
    } else if (dicari === 'm' && nilaiDiketahui.F && nilaiDiketahui.a) {
        m = nilaiDiketahui.F / nilaiDiketahui.a;
    } else if (dicari === 'a' && nilaiDiketahui.F && nilaiDiketahui.m) {
        a = nilaiDiketahui.F / nilaiDiketahui.m;
    } else {
        return res.status(400).json({ error: 'Masukan tidak valid.' });
    }

    let response = {};

    if (F !== null) {
        response.F = F;
    }

    if (m !== null) {
        response.m = m;
    }

    if (a !== null) {
        response.a = a;
    }

    if (Object.keys(response).length === 0) {
        return res.status(400).json({ error: 'Tidak ada hasil yang dapat dihitung.' });
    }

    res.json(response);
});

app.get("/berat/:tipe_berat/:berat", (req, res) => {
    let tipe_berat = req.params.tipe_berat; 
    let berat = Number(req.params.berat);
    let response;
    let kg, hg, dag, g, dg, cg, mg;

    if (tipe_berat === "mg") {
        mg = berat;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi MG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "cg") {
        mg = berat / 10;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi CG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "dg") {
        mg = berat / 100;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi DG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "g") {
        mg = berat / 1000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi G",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "dag") {
        mg = berat / 10000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi DAG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "hg") {
        mg = berat / 100000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi HG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    } else if (tipe_berat === "kg") {
        mg = berat / 1000000;
        cg = mg * 10;
        dg = cg * 10;
        g = dg * 10;
        dag = g * 10;
        hg = dag * 10;
        kg = hg * 10;
        response = {
            Soal: "Konversi KG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg,
        };
    }

    res.json(response);
});

app.post("/kecepatan", (req, res) => {
    const { type, diket1, diket2 } = req.body;
    let hasil = 0;
    let response;

    if (type === "v") {
        hasil = Number(diket1) / Number(diket2);
        response = {
            dicari: "v",
            Jarak: diket1 + ' meter',
            Waktu: diket2 + ' detik',
            Hasil: hasil + ' m/detik',
        };
    } else if (type === "s") {
        hasil = Number(diket1) * Number(diket2);
        response = {
            dicari: "s",
            Kecepatan: diket1 + ' m/detik',
            Waktu: diket2 + ' detik',
            Hasil: hasil + ' meter',
        };
    } else if (type === "t") {
        hasil = Number(diket1) / Number(diket2);
        response = {
            dicari: "t",
            Jarak: diket1 + ' Meter',
            Kecepatan: diket2 + ' m/detik',
            Hasil: hasil.toFixed(2) + ' detik',
        };
    } else {
        response = "Tipe tidak ada!\nCoba salah satu dari berikut Tipe:[v,s,t]";
    }

    res.json(response);
});

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
    })


