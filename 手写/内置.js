//1.数组迭代器
class MyArr{
    constructor(){
        this.arr=[]
    }

    push(el){
        this.arr.push(el)
    }

    [Symbol.iterator](){
        let idx=0
        const this_=this
        return {
            next:function(){
                //console.log(this_.arr[idx++])
                if(idx<this_.arr.length)return {value:this_.arr[idx++],done:false}
                return {value:undefined,done:true}
            }
        }
    }
}

/* const test=new MyArr()
test.push(1)
test.push(2)
test.push(3)
for(let val of test){
    console.log(val)
} */