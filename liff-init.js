window.onload = function () {
    const id = "1653759050-a7dgZ3B3";
    let myliffId = id;
    initiateLiff(myliffId);
}

function initiateLiff(myliffId) {
    if (!myliffId) {
        alert("Liff Id Masih Kosong");
    } else {
        liff
            .init({
                liffId: myliffId
            })
            .then(() => {
                initializeApp()
            })
            .catch(() => {
               document.getElementById("initError").classList.remove("hidden");
            })
    }
}   

function initializeApp() {

    document.getElementById("islogin").textContent = liff.isLoggedIn();
    document.getElementById("isclient").textContent = liff.isInClient();

    if (liff.isInClient()) {
        document.getElementById("sendMessage").hidden = false;
        document.getElementById("login").hidden = true;
        document.getElementById("logout").hidden = true;
        document.getElementById("getprofile").hidden = true;
        lineBrowser();
    } else {
        document.getElementById("sendMessage").hidden = true;
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

    } else {
        document.getElementById("logout").addEventListener('click', function () {
            liff.logout();
            window.location.reload();
        })

        document.getElementById("login").addEventListener('click', function () {
            alert("Anda Sudah Login");
        })

        document.getElementById("login").disabled = true;

        document.getElementById("getprofile").addEventListener('click', function () {
            liff.getProfile().then(function (profile) {
                document.getElementById("userId").textContent = profile.userId;
                document.getElementById("displayName").textContent = profile.displayName;
                document.getElementById("statusMessage").textContent = profile.statusMessage;
            })
        }).catch(function (err) {
            window.alert("Gagal Mendapatkan info profile " + err);
        })
    }
}

function lineBrowser() {
    document.getElementById("sendMessage").addEventListener('click', function () {
        liff.sendMessages([{
            'type': 'text',
            'text': 'Yey Berhasil mengirimkan pesan'
        }]).then(function () {
            window.alert("Ini Pesan dari fitur Kirim Pesan");
        }).catch(function (error) {
            Window.alert("Error Mengirim Pesan " + error);
        })
    })
}