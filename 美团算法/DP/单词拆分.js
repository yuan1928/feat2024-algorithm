//139
var wordBreak = function(s, wordDict) {
    //dp[i]:s.slice(0,i)能否由worddict中单词拼接
    const dp=Array(s.length+1).fill(false)
    dp[0]=true
    for(let i=1; i<=s.length; i++)
    {
        for(let word of wordDict)
        {
            //i-x+1=len(word)
            if(s.slice(i+1-word.length-1,i+1-1)===word && dp[i-word.length])
            {
                dp[i]=true
                break
            }
        }
    }
    return dp[s.length]
};

console.log(wordBreak(s = "leetcode", wordDict = ["leet", "code"]))
console.log(wordBreak( s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]))
