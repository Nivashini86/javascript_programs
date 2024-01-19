const prompt=require("prompt-sync")();
var str=prompt("Enter the String")
let res=(str)=> {
    var res="";
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            res+=str.slice(i,j)
           if(i!=str.length-1)
           res+=","
        }
    }

    return res
}
console.log(res(str))
