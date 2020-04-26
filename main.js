// EVENT LISTENER

document.getElementById('btn').addEventListener('click', login);

// FUNCTION

function login() {
    let usesrname = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    usesrname = usesrname.toLowerCase();

    // if statements
    if (usesrname == "abtinmanousi" && password == "AbCd123") {
        document.getElementById("p1").innerHTML = "Login successful";
    } else if (usesrname != "abtinmanousi" && password == "AbCd123") {
        document.getElementById("p1").innerHTML = "Login UNSUCCESSFUL username not found!";
    } else if (usesrname != "abtinmanousi" && password != "AbCd123") {
        document.getElementById("p1").innerHTML = "Login UNSUCCESSFUL username and password incorrect!";
    } else if (username == "abtinmanousi" && password != "AbCd123") {
        document.getElementById("p1").innerHTML = "Login UNSUCCESSFUL password incorrect!";
    }

}