
環境建立
------

##### 1. 安裝TypeScript

首先在環境中安裝typescipt,他是一個全域的插件

```
npm install -g typescript
```

> typkescript雖然可以讓javascript擁有強型別的特性

> 但最終還是需要轉換成javascript網頁才能認得

> 所以還是需樣有一個轉換的工具

編譯工具
------

**gulp**

這邊一樣使用gulp來處理typescript轉換

透過npm安裝gulp編譯typescript的套件

```
npm install gulp-typescript
```

```
var ts = require("gulp-typescript");

gulp.task("ts", function () {
    //// .ts檔路徑
   return gulp.src(path.ts)
      .pipe(ts())
      //// build完js放置的位置
      .pipe(gulp.dest("Script/"));
});
```


 型別
------

**基本型別**

```
//// 數字
var a:Number = 0;

//// 字串
var b:String = "aaa";

//// 布林
var c:boolean = false;
```

**Array**

```
//// 陣列的2種表示方式
var users: string[] = ["aa","bb"];
var users2: Array<string> = ["aa","bb"];
```

Enum
------
>設定一組名稱用來解釋一些常數型的狀態

```
enum color {
    red,
    pink,
    black
};
```

實際轉換成js時會轉換成一組object其val就是數字從0開始

```
//// 也可指定val
enum color {
    red  = 1,
    pink = 3,
    black = 5
};
```

應用時可以將變數宣告為Enum

```
var book:color = color.red;

//// 這邊會console 出數字（ex:0）
console.log("列舉 ==>",book);

```


Interface
------

設定一組object格式讓繼承此interface需實做此規格

> 屬性加上 ? 表示此屬性不一定要被實作
> 除了可以定義變數也可以定義方法
> 方法可制定傳入參數與回傳屬性

```
interface user {
    //// 須針對所定定義之屬性定義型別
    name: string;
    age: number;
    gender?: boolean;
    fun?(age: number):boolean;
}
```


來看看interface怎麼被繼承

> object變數 將型別設定為interface

> 該變數必須實作interface所以有屬性(除了設定?的屬性)

```
var mia:user = {
    name:"mia",
    age:28
}
```

> 也可設定為function參數之內容,傳入參數必須符合interface的格式

```
function createUser(data:user){
    console.log("interface object=> ",data.name,data.age,data.gender);
}
```

> 給class繼承 必須要有相同的屬性設定

```
class isUser implements user {
    name: string;

    age: number;

    gender:boolean;

    constructor() {
        this.name="mia";
    }

    fun(isAge: number):boolean {
        return false;
    }

}
```

**interface 擴展**

interface 也可以擴展其他interface的設定

>  faceAll擴展了faceA與faceB, extends可以多個由分號分開

```
 interface faceA {
     name:string;
 }

 interface faceB {

     age:number;
 }

 interface faceAll extends faceA,faceB {
     addr:string;
 }
```

 > 當繼承faceAll的時候就可以寫faceA及faceB的屬性

```
 var face:faceAll = {
     name :"mia",
     addr :"台北",
     age : 20
 };
```

 Class
 -----
**class簡介**

 類似C#建立class的方式,可定屬性,建構式,方法如下範例


```

 class MyClass {
     name:string;

     constructor(helloMess:string,name:string){
        //// 用this來指class內部的屬性或方法
        this.createUser(name);
        console.log("holle message",helloMess);
     }

     createUser(name:string){
        this.name = name;
     }

     updateUser(name:string){
        this.name = name;
     }
 }

```

> 使用時將class給new出來,就可以使用該class提供之屬性或方法

```
var isMia = new MyClass("Hi~Hi~","Mia");

isMia.updateUser("Mia2號");

```

**class繼承**

class可繼承其他class

繼承後可直接使用該class所有屬性及方法

也可覆寫繼承之class的方法

> 如繼承class 再 constructor中必須寫super

> super方法為呼叫所繼承之父class內function的方法

> super() <==建構式

> super.fun() <==呼叫方法

```
class ClassTemplate {
    name:string;
    constructor(name:string){
        console.log("ClassTemplate 初始",name);
    }
    fun(){
        console.log("Class Template fun");
    }
    funTemplate(){
        console.log("Class Template funTemplate");
    }
}


//// 繼承 ClassTemplate
class ClassA extends ClassTemplate {
    constructor(name:string){
        console.log("classA 初始",name);
        super(name);
    }
    fun(){
        console.log("覆寫 fun方法");
        //// 此class沒有name屬性但繼承之class有所以可以使用
        console.log("name 屬性",this.name);

    }
    funA(){
        console.log("classA");
    }
}

var claA = new ClassA("a");

//// ClassA沒有name屬性但可以使用 是因為繼承ClassTemplate
claA.name="ClaA";

//// ClassA 覆寫了 是因為繼承ClassTemplate內的fun方法
claA.fun();

//// 繼承 ClassTemplate
class ClassB extends ClassTemplate {
    name:string;
    constructor(name:string){
        console.log("classB 初始",name);
        super(name);
    }
    funB(){
        console.log("classB");
    };
}


var claB = new ClassB("a");

//// 沒有覆寫方法,所以直接繼承ClassTemplate內方法的做法
claB.fun();

```

**Private & Pubilc**

class內屬性預設皆為Pubilc

Public => 外部可以使用

Private => 僅內部使用

```
class ClassA {
    private name:string;
    constructor(){

    }
}

new ClassA().name //// 會error
```

**Protected**

protected 跟private有點類似一樣都是外部無法訪問

但繼承之class可以訪問

```
class ClassD {

    protected name:string;

    constructor(name){
        this.name=name;
    }
}

class classF extends ClassD {
    constructor(){
        super("is name");
        //// 可以訪問父的name屬性
        console.log("被設置為Protected的屬性",this.name);

    }
}
new classF(); //// console出被設置為Protected的屬性 is name
```


**constructor 參數屬性**

在constructor同時宣告屬性可將外部參數直接設定為class的屬性

```

class ClassE {
    constructor(private name:string){
    }

    fun(){
        console.log(this.name);
    }
}

new ClassE("ClassE").fun(); /// console出 ClassE

```
