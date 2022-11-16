//215.数组中的第k个最大元素
//快排：
//时间复杂度N 空间复杂度logN
var findKthLargest = function(nums, k){
    const targetIdx=k-1
    const swap=function(left,right){
        const temp=nums[left]
        nums[left]=nums[right]
        nums[right]=temp
    }
    const fastSelect=function(start,end){
        if(start>end)return 
        else if(start===end)return nums[start]

        let left=start
        let right=end
        while(left<right)
        {
            while(left<right && nums[right]<nums[start])right-=1
            while(left<right && nums[left]>=nums[start])left+=1
            swap(left,right)
        }

        if(nums[start]<nums[left])swap(left,start)
        if(left===targetIdx)return nums[left]
        else if(left>targetIdx)return fastSelect(start,left-1)
        else{return fastSelect(left+1,end)}
    }
    return fastSelect(0,nums.length-1)
}

//堆排：
//时间复杂度N*logN 空间复杂度logN
class Heap{
    //小顶堆
    constructor(size){
        this.size=size
        this.heap=[]
    }

    getParent(idx){
        return Math.floor((idx-1)/2)
    }

    getMinChild(idx){
        let left=2*idx+1
        let right=2*idx+2
        if(left>=this.size)return -1
        else if(right>=this.size)return left
        return this.heap[left]<this.heap[right]?left:right
    }

    swap(idx1,idx2){
        let temp=this.heap[idx1]
        this.heap[idx1]=this.heap[idx2]
        this.heap[idx2]=temp
    }

    insert(num){
        this.heap.push(num)
        let cur=this.heap.length-1
        let parent=this.getParent(cur)
        while(parent>=0 && this.heap[cur]<=this.heap[parent])
        {
            this.swap(cur,parent)
            cur=parent
            parent=this.getParent(cur)
        }

        if(this.heap.length<=this.size)return
        this.swap(0,this.size)
        this.heap.pop()
        cur=0
        let child=this.getMinChild(cur)
        while(child!==-1 && this.heap[cur]>=this.heap[child])
        {
            this.swap(cur,child)
            cur=child
            child=this.getMinChild(cur)
        }
    }

}
findKthLargest = function(nums, k){
    const heap=new Heap(k)
    nums.forEach(num=>heap.insert(num))
    //console.log(heap.heap)
    return heap.heap[0]
}

console.log(findKthLargest([3,2,1,5,6,4],2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4))
