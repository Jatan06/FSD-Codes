function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    if (email === "" || pass === "") {
        alert("All fields required");
        return false;
    }
    return true;
}

function validateRegister() {
    let u = document.getElementById("username").value;
    let e = document.getElementById("email").value;
    let p = document.getElementById("password").value;

    if (u.length < 3 || p.length < 6) {
        alert("Username min 3 chars, Password min 6 chars");
        return false;
    }
    return true;
}
