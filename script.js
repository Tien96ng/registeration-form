function checkPasswordStr(pass) {
    let req = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let curr = pass.value.toString();

    //console.log(curr);

    if (curr.match(req)) {
        alert("Good strong Password!");
    } else {
        alert("Your password sucks, try again!");
        document.getElementById("password").value = "";
    }
}