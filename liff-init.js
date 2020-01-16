window.onload = function () {
    let myliffId = "1653759050-a7dgZ3B3";
    initiateLiff(myliffId);
}

function initiateLiff(myliffId) {
    if (!myliffId) {
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
    document.getElementById("islogin").textContent = liff.isLoggedIn();
    document.getElementById("isclient").textContent = liff.isInClient();
    // if (!liff.isLoggedIn()) {
    //     document.getElementById("login").addEventListener('click', function () {
    //         liff.login();
    //     })
    // } else {
    //     document.getElementById("logout").addEventListener('click', function () {
    //         liff.logout();
    //         window.location.reload();
    //     })
    // }
    document.getElementById("login").addEventListener('click', function () {
        liff.login();
    })
    document.getElementById("logout").addEventListener('click', function () {
        liff.logout();
        window.location.reload();
    })
}