const prompt=require("prompt-sync")();
var n=prompt("Enter the number to reverse")
var r=0;
while(n>0)
{
   r=r*10+(n%10)
   n=Math.floor(n/10);
}
console.log(r);