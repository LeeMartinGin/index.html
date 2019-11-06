function login() {
    var username = document.getElementById("ID");
    var pass = document.getElementById("password");
    if(username.value == "") {
        alert("Please typing your ID or Email");
    }
    else if(pass.value == "") {
        alert("Please typing your password");
    }
    else if(username.value == "123" && pass.value == "123") {
        window.location.href = "https://leemartingin.github.io/index.html/";
    }
    else{
        alert("ID or Password is wrong! Please check out again");
    }
}
