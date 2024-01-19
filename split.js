const prompt=require("prompt-sync")();
var s=prompt("Enter the input")
function string_to_array(s)
{
    return s.split(' ')
}
console.log(string_to_array(s))