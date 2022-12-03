function validatefirstname() {
    fname = document.getElementById('fname').value;
    simplestring = "Abs"
    num = 10;
    for (i = 0; i < 1; i++) {
        if (fname == null || fname == "") {
            alert("Name cannot be null")
            break;
        }
        if (typeof (fname) == typeof (simplestring))
            alert("Name saved Successfully")
    }


}


function validatelastname() {
    fname = document.getElementById('lname').value;
    simplestring = "Abs"

    for (i = 0; i < 1; i++) {
        if (fname == null || fname == "") {
            alert("Name cannot be null")
            break;
        }
        if (typeof (fname) == typeof (simplestring))
            alert("Name saved Successfully")
    }


}

function validatemail() {
    var fmail = document.getElementById('mail').value;

    acount = 0;
    dcount = 0;
    for (i = 0; i < fmail.length; i++) {
        if (fmail.charAt(i) == '@')
            acount++;

        else if (fmail.charAt(i) == '.')
            dcount++;
    }

    if (acount == 1 && dcount > 0)
        alert("Mail id saved successfully");

    else
        alert("Invalid input try again");

}
function confirmmail() {
    var fmail = document.getElementById('mail').value;
    cmail = document.getElementById('cmail').value;

    if (fmail == cmail)
        alert("Email id saved successfully");

    else
        alert("Email Id does not match. Try again");

}

function validatestrngth() {
    userInput = document.getElementById("pwd").value;
    if (userInput.length >= 8)
        strength = "Strong";
    if (userInput.length < 8)
        strength = "Poor";

    document.getElementById("pwdspan").innerText = strength;
}


function confirmpassword() {
    userInput = document.getElementById("pwd").value;
    if (userInput.length >= 8)
        alert("Password saved successfully")

    else
        alert("Password strength is poor");



}

function validatepassword() {
    userInput = document.getElementById("pwd").value;
    cinput = document.getElementById("cpwd").value;

    if (userInput == cinput)
        alert("Password matched. Saved Successfully");

    else
        alert("Password dont match");
}

function saveinput()
{
    alert("Your data is saved successfully");
}