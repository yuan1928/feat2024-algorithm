function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

const readListNode=function(head){
    let p=head
    const res=[]
    while(p)
    {
        res.push(p.val)
        p=p.next
    }
    console.log(res)
}

const getNodelist=function(nodes){
    if(!nodes.length)return null

    let res
    let head
    nodes.forEach(node=>{
        const newNode=new ListNode(node)
        if(!res)
        {
            res=newNode
            head=newNode
        }
        else
        {
            res.next=newNode
            res=res.next
        }
    })
    return  head
}

//206 反转链表
var reverseList = function(head) {
    if(!head || !head.next)return head

    let prev=null
    let cur=head
    let next=cur.next
    while(cur)
    {
        cur.next=prev

        prev=cur
        cur=next
        next=cur?cur.next:null
    }
    return prev
};
//readListNode(reverseList(getNodelist([1,2,3,4,5,6])))
//readListNode(reverseList(getNodelist([2,1])))
