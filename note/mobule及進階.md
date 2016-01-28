
Module
------

**export**

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

> 在mobule要使用這個class時就可以直接使用

> 上方這段宣告 /// <reference path="./export.ts"/>

> 是當我使用的資料與mobule不同時的宣告(不加也可以)

```
/// <reference path="./export.ts"/>

let myClass = new myModule.ClassTest();
console.log(myClass.getP1());
```

**import**

typescript也提供import的方式但是需結合commantJS

來做非同步載入,如果不需要非同步載入,將js載入順序設定好

就可以直接使用export的資料
