// 两个栈实现队列
let stack1 = [], stack2 = []
function push(node)
{
    // write code here
    stack1.push(node)
}
function pop()
{
    // write code here
    if (stack2.length === 0) {
        while(stack1.length > 0) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}