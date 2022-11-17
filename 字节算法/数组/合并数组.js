var merge = function(nums1, m, nums2, n) {
    if(n===0)return nums1
    if(m===0)
    {
        nums1.forEach((_,i)=>{
            nums1[i]=nums2[i]
        })
    }

    let p1=m-1
    let p2=n-1
    let p=m+n-1
    while(p1>=0 && p2>=0)
    {
        let num1=nums1[p1]
        let num2=nums2[p2]
        if(num1>=num2)
        {
            nums1[p]=num1
            p1-=1
            p-=1
        }
        else
        {
            nums1[p]=num2
            p2-=1
            p-=1
        }
    }
    if(p2>=0)
    {
        while(p>=0)
        {
            nums1[p]=nums2[p2]
            p-=1
            p2-=1
        }
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge(nums1 = [0], m = 0, nums2 = [1], n = 1))