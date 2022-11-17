function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
//21 合并两个有序链表
var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2)return null
    else if(!list1 || !list2)return list1?list1:list2

    const res=list1.val<=list2.val?list1:list2
    if(list1.val<=list2.val)res.next=mergeTwoLists(list1.next,list2)
    else{res.next=mergeTwoLists(list1,list2.next)}
    return res
};