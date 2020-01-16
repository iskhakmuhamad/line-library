
function pilihbangun() {
    jenisbangun = document.getElementById("jenisbangun").value;
    if (jenisbangun == "segitiga") {
        document.getElementById("sisi1").value = "Alas";
        document.getElementById("sisi2").value = "Tinggi";
        document.getElementById("txtlebar").readOnly = false;
    }
    else if (jenisbangun == "persegi") {
        document.getElementById("sisi1").value = "Sisi";
        document.getElementById("sisi2").value = " ";
        document.getElementById("txtlebar").value = " ";
        document.getElementById("txtlebar").readOnly = true;
    } else if (jenisbangun == "lingkaran") {
        document.getElementById("sisi1").value = "Jari -Jari";
        document.getElementById("sisi2").value = " ";
        document.getElementById("txtlebar").value = " ";
        document.getElementById("txtlebar").readOnly = true;
    } else {
        document.getElementById("sisi1").value = "Panjang";
        document.getElementById("sisi2").value = "Lebar";
        document.getElementById("txtlebar").readOnly = false;
    }
}

function hitungLuas() {
    jenisbangun = document.getElementById("jenisbangun").value;
    sisi1 = document.getElementById("txtpanjang").value;
    sisi2 = document.getElementById("txtlebar").value;
    let Luas = 0;
    if (jenisbangun == "segitiga") {
        Luas = sisi1 * sisi2 / 2;
    }
    else if (jenisbangun == "persegi") {
        Luas = sisi1 * sisi1;
    } else if (jenisbangun == "lingkaran") {
        Luas = sisi1 * sisi1 * 3.14;
    } else {
        Luas = sisi1 * sisi2 ;
    }
    document.getElementById("txtluas").value = Luas;
}
