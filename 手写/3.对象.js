//1.判断环引用
function isRecycle(obj){
    const memo=new Map()
    memo.set(obj,true)
    let res=false
    const DFS=function(cur){
        for(let key in cur)
        {
            let val=cur[key]
            if(val instanceof Object)
            {
                if(memo.has(val))
                {
                    res=true
                    return
                }
                DFS(val)
            }
        }
    }
    DFS(obj)
    return res
}

/* var obj = {
    a: {
        c: [
            1, 2
        ]
    },
    b: 1
}
obj.a.c.d = obj
console.log(isRecycle(obj))  */

//2.计算层数
function getLayerNum(obj){
    let res=0
    const BFS=function(curObjs){
        const nextObjs=[]
        for(let o of curObjs)
        {
            for(let key in o)
            {
                let val=o[key]
                if(val instanceof Object)nextObjs.push(val)
            }
        }
        res+=1
        if(nextObjs.length)BFS(nextObjs)
    }
    BFS([obj])
    return res
}

/* const obj = {
    a: { b: [1] },
    c: { d: { e: { f: 1 } } }
}
console.log(getLayerNum(obj)) */

//3.扁平化
function flatten(obj){
    const res={}
    const DFS=function(cur,baseName){
        if(!(cur instanceof Object))
        {
            res[baseName]=cur
            return
        }

        for(let key in cur)
        {
            let val=cur[key]
            if(baseName==='')DFS(val,key)
            else if(Array.isArray(cur)) DFS(val,`${baseName}[${key}]`)
            else{DFS(val,`${baseName}.${key}`)}
        }
    }
    DFS(obj,'')
    return res
}

/* const obj = {
    a: {
           b: 1,
           c: 2,
           d: {e: 5}
       },
    b: [1, 3, {a: 2, b: 3}],
    c: 3
   }
console.log(flatten(obj)) */

//4.深拷贝
function deepCopy(obj){
    const memo=new Map()
    const DFS=function(obj){
        const res=Array.isArray(obj)?[]:{}
        for(let key in obj)
        {
            let val=obj[key]
            if(!(val instanceof Object))res[key]=val
            else
            {
                if(memo.has(val))res[key]=memo.get(val)
                else
                {
                    const temp=deepCopy(val)
                    res[key]=temp
                    memo.set(val,temp)
                }
            }
        }
        return res
    }
    return DFS(obj)
}

/* console.log(deepCopy(
    {
        name:'coco',
        age:18,
        family:[
            {
                name:'helen',
                age:22,
                family:[
                    {
                        name:'gina',
                        age: 38
                    }
                ]
            },
            {
                name:'bill',
                age:22,
                family:null
            }
        ]
    }
).family[0].family) */