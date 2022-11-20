function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
//102.层序遍历
 /* var levelOrder = function(root) {
    if(!root)return []

    let cur=[root]
    let next=[]
    const res=[]
    while(cur.length)
    {
        res.push([])
        cur.forEach(node=>{
            if(node instanceof TreeNode)
            {
                res[res.length-1].push(node.val)
                if(node.left)next.push(node.left)
                if(node.right)next.push(node.right)
            }
            else{res[res.length-1].push(node)}
        })
        cur=next
        next=[]
    }
    return res
}; */

var levelOrder = function(root) {
    if(!root)return []

    const res=[]
    const BFS=function(cur){
        if(!cur.length)return

        res.push([])
        const next=[]
        cur.forEach(node=>{
            if(node instanceof TreeNode)
            {
                res[res.length-1].push(node.val)
                if(node.left)next.push(node.left)
                if(node.right)next.push(node.right)
            }
            else{res[res.length-1].push(node)}
        })
        BFS(next)
    }
    BFS([root])
    return res
}
//console.log(levelOrder(new TreeNode(3,new TreeNode(9),new TreeNode(20,15,7))))

//103.锯齿形遍历
var zigzagLevelOrder = function(root) {
    if(!root)return []

    let cur=[root]
    let next=[]
    let isL2R=true
    const res=[]
    while(cur.length)
    {
        res.push([])
        cur.forEach(node=>{
            if(node instanceof TreeNode)
            {
                if(isL2R)res[res.length-1].push(node.val)
                else{res[res.length-1].unshift(node.val)}

                if(node.left)next.push(node.left)
                if(node.right)next.push(node.right)
            }
            else
            {
                if(isL2R)res[res.length-1].push(node)
                else{res[res.length-1].unshift(node)}
            }
        })
        //console.log(next)
        cur=next
        isL2R=!isL2R
        next=[]
    }
    return res
};
//console.log(zigzagLevelOrder(new TreeNode(3,new TreeNode(9),new TreeNode(20,15,7))))

//94.中序遍历
/* var inorderTraversal = function(root) {
    if(!root)return []

    const res=[]
    const backtrack=function(node){
        if(!(node instanceof TreeNode))
        {
            res.push(node)
            return
        }

        if(node.left)backtrack(node.left)
        res.push(node.val)
        if(node.right)backtrack(node.right)
    }
    backtrack(root)
    return res
}; */

//94.中序遍历
var inorderTraversal = function(root) {
    const res=[]
    const stack=[]
    while(root || stack.length)
    {
        while(root)
        {
            stack.push(root)
            root=root.left
        }
        root=stack.pop()
        res.push(root.val)
        root=root.right
    }
    return res
}
//console.log(inorderTraversal(new TreeNode(3,new TreeNode(9),new TreeNode(20,15,7))))
      