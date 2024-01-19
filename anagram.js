const prompt=require("prompt-sync")();
 var t=prompt("Enter string 1 ")
 var s=prompt("Enter string 2 ")
 var str1=t.split("").sort().join("");
 var str2=s.split("").sort().join("");
 if(str1==str2)
 console.log("Anagram")
 else
 console.log("not anagram")


