var generateParenthesis = function(n) {
    const res=[]
    const DFS=function(left,right,leftNum,cur){
        if(!left && !right && !leftNum)
        {
            res.push(cur)
            return
        }

        if(left) DFS(left-1,right,leftNum+1,cur+'(')
        if(right && leftNum) DFS(left,right-1,leftNum-1,cur+')')
    }
    DFS(n,n,0,'')
    return res
};

console.log(generateParenthesis(1))