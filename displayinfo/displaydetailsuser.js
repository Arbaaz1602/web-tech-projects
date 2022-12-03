function save()
{
    message = "Data Saved Successfully";

    document.getElementById("myspan1").innerText=message;
}

function display()
{
    uname = document.getElementById("uname").value;
    city = document.getElementById("ucity").value;

    finaldisplay = "Name: "+uname+" \nCity: "+city;

    document.getElementById("myspan2").innerText = finaldisplay;
}