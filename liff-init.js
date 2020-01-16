window.onload = function () {
    let myliffId = "";
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
    }
}

function initializeApp() {
    document.getElementById("islogin").value = liff.isLoggedIn;
}