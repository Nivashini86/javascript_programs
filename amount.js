const prompt=require("prompt-sync")();
var amount=prompt("Enter the amount")
var coins=prompt("Enter the coint list")
var coin=JSON.parse(coins)
function amounttocoin(amount,coin){
     var res=[];
     sort(coins);
     while(amount>0)
     {
        for(let i=0;i<coin.length;i++)
        {
            if(coin[i]<=amount){
            amount=amount-coin[i];
            res.push(coin[i])
            break;
            }
        }
     }
     return res;
}
console.log(amounttocoin(amount,coin))
