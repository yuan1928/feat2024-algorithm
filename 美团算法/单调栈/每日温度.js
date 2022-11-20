//739
var dailyTemperatures = function(temperatures) {
    const res=Array(temperatures.length).fill(0)
    const stack=[]
    temperatures.forEach((temperature,i)=>{
        let stackTop=stack[stack.length-1]
        while(stack.length && temperatures[stackTop]<temperature)
        {
            res[stackTop]=i-stackTop
            stack.pop()
            stackTop=stack[stack.length-1]
        }
        stack.push(i)
    })
    return res
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([30,40,50,60]))
console.log(dailyTemperatures([30,60,90]))

