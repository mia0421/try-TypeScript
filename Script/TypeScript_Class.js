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
