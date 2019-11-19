let name1: string | number = 1
name1 = 1

function say(person: string | number | object): object {
  let name = {name: 22}
  person = name
  return person
}

// 定义接口
interface Person {
  name: string
  age: number
  readonly id: number
}
let myPerson: Person = {
  name: '1',
  age: 222,
  id: 22,
}
myPerson.name = '22'

let numberArray: any = [1, 2]

interface NumberArray {
  [index: number]: number
}
let numberArray111: NumberArray = [12, 1]

function sayName(name: string, age: number): string {
  return `my name is ${name},${age}years old`
}
sayName('shanks', 1)

interface Person1 {
  (name: string, age: number): boolean
}

let shanks1: Person1
shanks1 = function(name, age) {
  return true
}
shanks1('1', 1)

function a(name: string, age: number): any {
  alert(1)
}
a('1', 1)

function b(a: string, ...b: any[]) {
  return b
}

b('1', 2, 3, 4, 5, 6)

Math.pow(10)
