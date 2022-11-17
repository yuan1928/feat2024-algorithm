//349.两个数组交集
var intersection = function(nums1, nums2) {
    const res=[]
    let p1=0
    let p2=0
    let prevSame
    nums1.sort((a,b)=>(a-b))
    nums2.sort((a,b)=>(a-b))
    while(p1<nums1.length && p2<nums2.length)
    {
        if(nums1[p1]===nums2[p2])
        {
            if(nums1[p1]!==prevSame && nums2[p2]!==prevSame)
            {
                res.push(nums1[p1])
                prevSame=nums1[p1]
                p1+=1
                p2+=1
                continue
            }
            if(nums1[p1]===prevSame)p1+=1
            if(nums2[p2]===prevSame)p2+=1
        }
        else if(nums1[p1]>nums2[p2])p2+=1
        else {p1+=1}
    }
    return res
};

console.log(intersection( [1,2,2,1], [2,2]))
console.log(intersection( [4,9,5], [9,4,9,8,4]))
