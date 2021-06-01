
 // Definition for Employee.
class Employee {
    id: number
    importance: number
    subordinates: number[]
    constructor(id: number, importance: number, subordinates: number[]) {
        this.id = (id === undefined) ? 0 : id;
        this.importance = (importance === undefined) ? 0 : importance;
        this.subordinates = (subordinates === undefined) ? [] : subordinates;
     }
 }
 

function getImportance(employees: Employee[], id: number): number {
  const map = new Map<number, Employee>()
  for (let item of employees) {
    map.set(item.id, item)
  }
  let  stack = [id], re = 0
  while(stack.length > 0) {
    const e = map.get(stack.pop())
    re += e.importance
    if (e.subordinates.length) {
      stack.push(...e.subordinates)
    }
  }
  return re
};