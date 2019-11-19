> [typescript学习文档](https://ts.xcatliu.com/basics/union-types)
## 基础

### sunbon string undefined null number boolean object 原始数据类型
* void 定义空值 当函数不返回的时候 等于定义了undefined或者null
```
let name:void = 'shanks'
```

### 任意值
* any 不能转变类型,假如从string转变后面的nunber类型的话,那么这个值的类型就应该是any (未定义类型的时候没有赋值默认就是any类型)
```
let name:any = 'shanks'
```

### 类型推论
* 假如定义赋值的时候，会进行类型推断，但是在没赋值的时候，会默认是any任意类型
```
let name = 'string' // 推断是string类型
let name // 因为没有赋值所以默认推断是any类型
```

### 联合类型
```
let name:string | number = '1'
name = 1 // true
name = true // error 因为不是string或者number 类型

// 访问属性或者方法的时候
function (person:string|number):string{
  return person // 返回的person一定要是一个字符窜，而且person的属性要string跟number一起有的:例如toString()共有就可以，length就不行，因为number类型的没有
}
```

### 对象的类型--接口
* 不允许多一些属性
```
interface Person{
  name:string,
  age:number
}

let shanks:Person = {
  name:'shanks',
  age:25,

}
```
* 可选属性(在属性字段添加?)
```
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
```
* 任意属性
```
interface Person {
    name: string;
    age?: number;
    [propName: string]: any; // 假如设置了string,任意属性只能是string类型
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```
* 只读属性
```
interface Person{
  readonly id: number;
  name:string;
}
let shanks = {
  id:11,
  name:'shanks'
}
shanks.id = 22 // error: id是一个常数或者一个只读属性 不能二次赋值
```

### 数组类型
* 类型加括号的方法
```
let fibonacci: number [] = [1,2,3,4,5] // 只能是数组类型
```
* 数组泛型
``` 
let nameArray: Array<number> = [1,2,3]
```
* 用接口表示数组
```
interface NumberArray{
  [index:numnber]:number // 索引对应的值要数字，就是跟 :number[] || Array<number>差不多
}
let number:NumberArray = [12,'1']
```
* 类数组的定义(跟数组的定义方式是不一样的)
```
let args:{
  [index:number]:number;
  length:number;
  call:Function
}
// 自定义数组
let args: IArguments = arguments; //IArguments是自定义对象
```

### 函数的类型
```
function sayName(name:string,age:number):string{
  return `my name is ${name},${age}years old`
}
sayName('shanks',18) // 不能输入多余或者少要求的参数

// 利用函数表达式的时候
var sayName = function (name:string,age:number):string{ // 这样不会对左边的进行类型校验
  return `my name is ${name},${age}years old`
}

在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
var sayName: (name:string,age:number) => number =  function (name:string,age:number):string{ // 这样不会对左边的进行类型校验
  return `my name is ${name},${age}years old`
}
```
* 用接口定义函数形状
```
interface Person{
  (name:string,age:number):boolean
}

let shanks = Person
shanks = function(name:string,age:number){
  return true
}
```
* 可选参数,在参数后面添加一个?(可选选项一定要在后面)
```
function a(name:string,age?:number){
  return 1
}
```
* 参数默认值:哪个都能设置默认值，不存在先后顺序
```
function a(a:string = 'shanks',b:number){

}
```
* 剩余参数
```
function b(a: string, ...b: any[]) {
  return b
}

b('1',2,3,4,5,6) // 2 3 4 5 6
```
* 重载 根据参数类型来进行不同的业务
```
function c(x:number | string){
  if(type x === 'strubg'){

  }else if(type x === 'number'){

  }
}
```

### 类型断言:类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
```
// 语法
<类型>值 或者 值as类型
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}
```

### 声明文件:目前先省略着来看

### 内置对象
```
Math.pow(10, '2'); // error 
// 因为内置对象已经设置好了类型
interface Math {
    /**
     * Returns the value of a base expression taken to a specified power.
     * @param x The base value of the expression.
     * @param y The exponent value of the expression.
     */
    pow(x: number, y: number): number;
}
```

## 进阶