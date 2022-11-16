//实现sum函数 使得sum(2,3) // 5   sum(2)(3) // 5
function sum(...initArgs){
    let curArgs=initArgs
    const res=function(...args){
        curArgs=[...args,...curArgs]
        if(curArgs.length===2)return curArgs.reduce((a,b)=>(a+b))
        return res
    }
    return curArgs.length===2?res():res
}

/* console.log(sum(2,3))
console.log(sum(2)(3))
console.log(sum()(2,3)) 
console.log(sum()(2)(3))
console.log(sum()(2)()(3)) */

//求和函数 sum(1, 2)(3, 4)(5).sumOf()
function sum(...initArgs){
    let curArgs=initArgs
    const res=function(...args){
        curArgs=[...args,...curArgs]
        return res
    }
    res.sumOf=function(){
        return curArgs.reduce((a,b)=>(a+b))
    }
    return res
}
/* console.log(sum(1, 2)(3, 4)(5).sumOf())
console.log(sum(1, 2)()(3, 4)(5)().sumOf()) */



