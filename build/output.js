//// === 泛行<T> ===
//// 泛型function 用法
function fun2(aa) {
    return aa;
}
fun2("aa");
fun2("aa");
//// Typescript 簡寫寫法
var fun3 = function (aa) {
    return aa;
};
fun3("aa");
var test_function = function (a) {
    var rd;
    rd.item = "aaa";
    rd.item2 = "aaa";
    return rd;
};
var test_function2 = function () {
    var rd;
    rd.item = "string";
    rd.item2 = false;
    return rd;
};
var test_function2 = function () {
    var rd = {
        item: "aa",
        item2: false
    };
    return rd;
};
var myModule;
(function (myModule) {
    myModule.A = "aa";
    var B = "bb";
})(myModule || (myModule = {}));

//== Class ==
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyClass = (function () {
    function MyClass(helloMess, name) {
        console.log("holle message", helloMess);
        this.createUser(name);
    }
    MyClass.prototype.createUser = function (name) {
        this.name = name;
    };
    MyClass.prototype.updateUser = function () {
    };
    return MyClass;
})();
var isMia = new MyClass("Hi~Hi~", "Mia");
console.log(isMia.name);
//// === 繼承===
var ClassA = (function () {
    function ClassA() {
        this.name = "mia";
        console.log("ClassA 初始", this.name);
    }
    ClassA.prototype.fun = function () {
        console.log("ClassA fun");
    };
    return ClassA;
})();
//// 繼承ClassA
var ClassB = (function (_super) {
    __extends(ClassB, _super);
    function ClassB() {
        _super.apply(this, arguments);
    }
    return ClassB;
})(ClassA);
//// 雖然我們ClassB什麼都沒寫,但是因為繼承ClassA所以可以使用它的屬性及方法
var claB = new ClassB();
claB.name = "mia";
claB.fun(); //// 列印出 ClassA fun
//// === 繼承 覆寫繼承的function===
var ClassA_1 = (function () {
    function ClassA_1() {
        this.name = "mia";
        console.log("ClassA 初始", this.name);
    }
    ClassA_1.prototype.fun = function () {
        console.log("ClassA fun");
    };
    return ClassA_1;
})();
//// 繼承ClassA
var ClassB_1 = (function (_super) {
    __extends(ClassB_1, _super);
    function ClassB_1() {
        _super.apply(this, arguments);
    }
    ///故意在ClassB 寫一個一樣名稱的function則建立出來的實體呼叫此function時會以此為主
    ClassB_1.prototype.fun = function () {
        console.log("ClassB fun");
    };
    return ClassB_1;
})(ClassA_1);
var claB = new ClassB_1();
claB.fun(); //// 列印出 ClassB fun
//// === 繼承 super===
/*
 當我們繼承的ClassA constructor 有設定傳入參數
 而想在ClassB的constructor中設定ClassA的初始參數就可以使用super
 */
var ClassA_2 = (function () {
    function ClassA_2(name) {
        this.name = name;
        console.log("ClassA 初始", this.name);
    }
    ClassA_2.prototype.fun = function () {
        console.log("ClassA fun");
    };
    return ClassA_2;
})();
var ClassB_2 = (function (_super) {
    __extends(ClassB_2, _super);
    function ClassB_2() {
        //// 設定ClassA的初始值
        _super.call(this, "mia");
    }
    ClassB_2.prototype.funB = function () {
        //// 也可以透過super呼叫ClassA的方法
        _super.prototype.fun.call(this);
    };
    return ClassB_2;
})(ClassA_2);
var claB = new ClassB_2();
console.log(claB.name); //// 印出mia
claB.funB(); /// 印出 ClassA fun
//// === private===
var ClassC = (function () {
    function ClassC() {
    }
    return ClassC;
})();
//new ClassC().name //// 會error
//// === Protected ===
var ClassD = (function () {
    function ClassD(name) {
        this.name = name;
    }
    return ClassD;
})();
var classF = (function (_super) {
    __extends(classF, _super);
    function classF() {
        _super.call(this, "is name");
        console.log("被設置為Protected的屬性", this.name);
    }
    return classF;
})(ClassD);
new classF();
//// === 關於Static ===
var ClassG = (function () {
    function ClassG() {
        this.openIndex = 0;
    }
    ClassG.prototype.updateIndex = function () {
        ClassG.index += 1;
        this.openIndex += 1;
    };
    ClassG.index = 0;
    return ClassG;
})();
var ClaG = new ClassG();
ClaG.updateIndex();
console.log("ClassG", ClassG.index, ClaG.openIndex);
var ClaG_1 = new ClassG();
ClaG_1.updateIndex();
console.log("ClassG", ClassG.index, ClaG.openIndex);

// ==基本型別==
var a = 0;
var b = "aaa";
var c = false;
// ==array==
var users = ["aa", "bb"];
var users2 = ["aa", "bb"];
// ==列舉==
// 預設值為數字 0開始
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["pink"] = 1] = "pink";
    color[color["black"] = 2] = "black";
})(color || (color = {}));
;
var book = color.red;
console.log("列舉 ==>", book);
var mia = {
    name: "mia",
    age: 28
};
function createUser(data) {
    console.log("interface object=> ", data.name, data.age, data.gender);
}
createUser(mia);
var searchUserFun = function (userName, age) {
    return "";
};
//實現之class 必須要有相同的屬性設定
var isUser = (function () {
    function isUser() {
        this.name = "mia";
    }
    isUser.prototype.fun = function (isAge) {
        return false;
    };
    isUser.prototype.fun2 = function (a, b) {
    };
    return isUser;
})();
console.log("interface class => ", new isUser().name);
var face = {
    name: "mia",
    addr: "台北",
    age: 20
};
console.log("interface 擴展 ==>", face.name, face.addr, face.age);
/*情境一
 通常我們使用jquery都會使用$
 但當使用Typescript沒有用
 declare 聲明＄編譯則會報錯

 declare var $;
 $("#id").html("<h1></h1>");
 */
/*情境二
 當我們在html頁面上宣告一個變數,但想在該頁面引入的ts檔中使用
 就必須要declare該變數,因為該變數在此ts檔並未被定義
 */
// === for..of vs for..in ===
/*
 for..of 再跑回圈時很像map或forEach會取出array的內容
 map或forEach無法在迭代的過程中使用break離開迴圈
 但如果使用for..of則可以正確的使用這些參數

 */
var arrayItem = ["a", "b", "c"];
for (var _i = 0; _i < arrayItem.length; _i++) {
    var i = arrayItem[_i];
    if (i === "b") {
        break;
    }
    console.log("for of: " + i);
}
arrayItem.map(function (i) {
    if (i === "b") {
        return;
    }
    console.log("map: " + i);
});
arrayItem.forEach(function (i) {
    if (i === "b") {
        return;
    }
    console.log("forEach: " + i);
});
/*
 for..in 再跑回圈時會x會是index,如果跑一個object則會x則是屬性名稱
 */
for (var x in arrayItem) {
    console.log("for in: " + x);
}
//// === 關於 function ===
var fun = function (a, b) {
    if (b === void 0) { b = "bbb"; }
    return a === b;
};
var fun5 = function () { };
var fun6 = function (a) { return a; };
