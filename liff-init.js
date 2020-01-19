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
            .catch(function (err) {
                alert("Gagal inisialisai liff " + err)
            })
    }
}

function initializeApp() {

    document.getElementById("islogin").textContent = liff.isLoggedIn();
    document.getElementById("isclient").textContent = liff.isInClient();

    if (liff.isInClient()) {
        lineBrowser();
    } else {
        exBrowser();
    }

}

function exBrowser() {
    if (!liff.isLoggedIn()) {
        document.getElementById("login").addEventListener('click', function () {
            liff.login();
        })
        document.getElementById("logout").addEventListener('click', function () {
            alert("Silahkan Login Terlebih dahulu");
        })
        document.getElementById("getprofile").addEventListener('click', function () {
            alert("Silahkan Login Terlebih dahulu");
        })
        document.getElementById("sendMessage").hidden = true;
    } else {
        document.getElementById("logout").addEventListener('click', function () {
            liff.logout();
            window.location.reload();
        })

        document.getElementById("login").addEventListener('click', function () {
            alert("Anda Sudah Login");
        })

        document.getElementById("getprofile").addEventListener('click', function () {
            liff.getProfile().then(function (profile) {
                document.getElementById("userId").textContent = profile.userId;
                document.getElementById("displayName").textContent = profile.displayName;
                document.getElementById("statusMessage").textContent = profile.statusMessage;
            })
        }).catch(function (err) {
            window.alert("Gagal Mendapatkan info profile " + err);
        })
        document.getElementById("sendMessage").hidden = true;
    }
    
}

function lineBrowser() {

}