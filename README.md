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
  return person // 返回的person一定要是一个字符窜，而且或者person的属性要string跟number一起有的
}
```