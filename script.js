function login() {
    const u = "Room 403";
    const p = "abcde123";

    let userNameInput = document.getElementById("UserName").value;
    let passInput = document.getElementById("Password").value;

    if (userNameInput === "" || passInput === "") {
        alert("Please fill in all fields.");
    } else if (userNameInput === u && passInput === p) {
        alert("Access Granted.");
    } else {
        alert("Access Denied.");
    }
}
