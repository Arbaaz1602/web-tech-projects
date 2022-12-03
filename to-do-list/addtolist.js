function addtolist() {
    uinput = document.getElementById("uinput").value;

    const newli = document.createElement('li');
    newli.append(uinput);

    ultag = document.getElementById("ulist");

    ultag.append(newli);


}