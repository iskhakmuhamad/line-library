window.onload = function () {
    let myliffId = "1653759050-a7dgZ3B3";
    initiateLiff(myliffId);
}

function initiateLiff(myliffId) {
    if (!liffId) {
        alert("Liff Id Masih Kosong");
    } else {
        liff.init({
            liffId: myliffId
        })
            .then(() => {
                initializeApp()
            })
            .catch(() => {
                alert("Gagal inisialisai liff")
            })
    }
}

function initializeApp() {
    document.getElementById("islogin").value = liff.isLoggedIn();
}