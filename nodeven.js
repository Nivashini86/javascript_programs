const prompt=require("prompt-sync")();
var a=[]
var n=prompt("Enter the size of array")
console.log("Enter the array element")
for(var i=0;i<n;i++){
a[i]=prompt()
if(a[i].toString().length%2==0)
console.log(a[i])
}

