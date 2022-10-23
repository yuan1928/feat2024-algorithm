var coinChange = function(coins, amount) {
    const memo={0:0}
    const dp=Array(amount+1).fill(Infinity)
    dp[0]=0

    for(let i=1; i<=amount; i++)
    {
        coins.forEach(coin=>{
            if(memo[i-coin]!==undefined)
            dp[i]=Math.min(dp[i],1+memo[i-coin])
        })
        if(dp[i]!==Infinity)memo[i]=dp[i]
    }

    return dp[amount]===Infinity?-1:dp[amount]
};

console.log(coinChange([1,2,5],11))
console.log(coinChange([1],0))
