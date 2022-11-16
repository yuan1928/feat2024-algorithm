function fastSort(nums,isAscend){
    const swap=function(left,right){
        const temp=nums[left]
        nums[left]=nums[right]
        nums[right]=temp
    }
    const sort=function(start,end){
        if(start>=end)return

        let left=start
        let right=end
        while(left<right)
        {
            if(isAscend)
            {
                while(left<right && nums[start]<nums[right])right-=1
                while(left<right && nums[start]>=nums[left])left+=1
                swap(left,right)
            }
            else
            {
                while(left<right && nums[start]>nums[right])right-=1
                while(left<right && nums[start]<=nums[left])left+=1
                swap(left,right)
            }
        }

        if((nums[left]<nums[start] && isAscend) || (nums[left]>nums[start] && !isAscend))swap(left,start)
        sort(start,left-1)
        sort(left+1,end)
    }
    sort(0,nums.length-1)
}

const nums=[1,9,9,8,0,2,2,1,1,9,2,8]
fastSort(nums,false)
console.log(nums)