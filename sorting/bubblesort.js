
mynumarray = [32,45,34,23,76,4,67];
len  = mynumarray.length;
console.log(mynumarray);
for(i=len-1; i>=0; i--)
{
    for( j=0; j<i-1; j++)
    {
        if(mynumarray[j]>mynumarray[j+1])
        {
            temp = mynumarray[j];
            mynumarray[j] = mynumarray[j+1];
            mynumarray[j+1] = temp;
        }
    }
}

console.log(mynumarray);


// var person = {
//     pname: "Arbaaz",
//     lname: "Sayed",
//     age : 26,
//     city : "Goa"
// }

// function displayperson()
// {
    // console.table(person)
   // console.log(person)
    //console.log(person.pname);
    //console.log(person.lname);
    //console.log(person.age);
    //console.log(person.city);
   

// }

// displayperson();