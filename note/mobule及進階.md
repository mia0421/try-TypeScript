
#Module
------

##export

類似C#的命名空間,module內僅限於module有用

所以可以將功能用mobule來做區分並將要開放的功能導出

將要導出的功能前方加上*export*關鍵字

> 這邊定義了一個*myModule*Module

> 內有一個class 我們希望在module外部也可以建立這個class的實體

> 所以在class前面加上*export*關鍵字

> ps 變數,函數,interface都可以export

```
module myModule {
    export class ClassTest {
        public p1: String;

        public p2: Number;

        constructor() {
            this.p1 = "p1";

            this.p2 = 1;
        }

        public getP1(): String {
            return this.p1;
        }

        public getP2(): Number {
            return this.p2;
        }
    }
}

```

在mobule要使用這個class時就可以直接使用

上方這段宣告 /// <reference path="./export.ts"/>

是當我使用的資料與mobule不同時的宣告(不加也可以)

```
/// <reference path="./export.ts"/>

let myClass = new myModule.ClassTest();
console.log(myClass.getP1());
```

##import

typescript也提供import的方式但是需結合commantJS

來做非同步載入,如果不需要非同步載入,將js載入順序設定好

就可以直接使用export的資料

#Function
----------

定義function的型別可以這樣寫

定義傳入的參數名稱不一定要與function的名稱一致,但是型態必須相同

```
var fun:(x:string,y:string) => boolean = function(a:string,b:string):boolean {
    return a === b;
}
```

也可以定義function沒有傳入參數時的預設值

```
var fun =  function(a:string,b = "我是預設值" ):boolean {
    return a === b;
}
```

Typescript 提供function簡寫寫法

```
var fun5 = ()=> {};
```

如果想直接回傳值也可以直接寫在 => 後方

```
var fun5 = (a)=> a;
```


#泛型 <T>
----------

有時候沒法指定傳入的型別但又不想指定any可以透過泛型來處理

像是把型別當作參數傳入

```
//// Typescript 簡寫寫法
var fun2 = <T>(aa:T):T => {
    return aa;
}

////可以明確指定傳入string的型別
fun2<string>("aa");

////或是不指定由傳入的參數來決定
fun2("aa");

```

**泛型會報錯的情況 - function**

由於設定回傳值為Ｔ,但Ｔ的型別將由執行階段決定

但此處回傳string typescript 編譯視同錯誤

```
function funError1<T>():T {
    return "aa";
}
funError1();
```

 此處設定傳入參數a為Ｔ型別
 
 但在內容中console了a lenght
 
 由於現階段無法卻定a是否擁有lenght的屬性(直行階段也可能傳入number)
 
 所以這邊會報錯
 
```
function funError2<T>(a:T):T {
    console.log(a.length);
    return a;
}
funError2("aa");
```

##interface 泛型應用

在interface中也可使用泛型來定義屬性的型別

同function用法於實作這個interface時指定Ｔ的型別

```
interface Iface<T> {
    item:T;
    item2:string;
}

var test_function = (a:string):Iface<string> => {
   var rd:Iface<string> ;
    rd.item = "aaa";
    rd.item2= "aaa";
    return rd;
}

```

也可同時設定多個泛型參數

```
interface Iface2<T,K> {
    item:T;
    item2:K;
}

var test_function2 = ():Iface2<string,boolean> => {
    var rd :Iface2<string,boolean> ;
    rd.item="string";
    rd.item2=false;
    return rd;
}
```


#declare
---------

通常用於定義外部plugh(es:jQuery),或非此ts所定義的參數

他不會真的產生javascript,只是在typescript不會因為識別不到該變數而編譯失敗

情境一

通常我們使用jquery都會使用$,但當使用Typescript沒有用declare＄編譯則會報錯

他會將變數型別重新定義為any,當然也失去型別檢查的機制！

```
declare var $;
$("#id").html("<h1></h1>");

```

情境二

 當我們在html頁面上宣告一個變數,但想在該頁面引入的ts檔中使用
 
 就必須要declare該變數,因為該變數在此ts檔並未被定義



