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
    if (!liff.isLoggedIn()) {
        document.getElementById("login").addEventListener('click', function () {
            liff.login();
        })
    } else {
        document.getElementById("logout").addEventListener('click', function () {
            liff.logout();
            window.location.reload();
        })
    }
    document.getElementById("login").addEventListener('click', function () {
        liff.login();
    })
    document.getElementById("logout").addEventListener('click', function () {
        liff.logout();
        window.location.reload();
    })
}

function showProfile() {
    document.getElementById("getprofile").addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById("userId").textContent = profile.userId;
            document.getElementById("displayName").textContent = profile.displayName;

            const profileImage = document.getElementById("profileImage");
            profileImage.style.src = profile.pictureUrl;
            document.getElementById("statusMessage").textContent = profile.statusMessage;
        }).catch(function (err) {
            window.alert("Gagal Mendapatkan info profile " + err);
        })
    });
}