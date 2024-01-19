const prompt=require("prompt-sync")();
var a=[]
var n=prompt("Enter the size of array")
var k=prompt("Enter the times of rotation")
console.log("Enter the array element")
for(let i=0;i<n;i++)
a[i]=prompt();

for(let j=0;j<k;j++)
{
    a.push(a.shift())
    console.log(a)
}