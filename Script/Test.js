var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
//== Class ==
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
//// 1. 繼承是否架構要完全相同？
////    A: 可以不用,不覆寫父的方法 當class被new出來時也可呼叫父的方法
//// 2. 覆寫父層方法又用super呼叫同方法的結果？
////    A:可以覆寫,如果又用super呼叫一樣執行父原始的方法
//// 3. 變數宣告型態練習
//// ps. 1.繼承某一class constructor 一定要寫super
var ClassTemplate = (function () {
    function ClassTemplate(name) {
        console.log("ClassTemplate 初始", name);
    }
    ClassTemplate.prototype.fun = function () {
        console.log("Class Template fun");
    };
    ClassTemplate.prototype.funTemplate = function () {
        console.log("Class Template funTemplate");
    };
    return ClassTemplate;
})();
var ClassA = (function (_super) {
    __extends(ClassA, _super);
    function ClassA(name) {
        console.log("classA 初始", name);
        _super.call(this, name);
    }
    ClassA.prototype.fun = function () {
        console.log("覆寫 fun方法");
        //// 此class沒有name屬性但繼承之class有所以可以使用
        console.log("name 屬性", this.name);
    };
    ClassA.prototype.funA = function () {
        console.log("classA");
    };
    return ClassA;
})(ClassTemplate);
var ClassB = (function (_super) {
    __extends(ClassB, _super);
    function ClassB(name) {
        console.log("classB 初始", name);
        _super.call(this, name);
    }
    ClassB.prototype.funB = function () {
        console.log("classB");
    };
    ;
    return ClassB;
})(ClassTemplate);
var claA = new ClassA("a");
var claB = new ClassB("a");
claA.name = "ClaA";
claA.fun();
claB.fun();
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
        ClassG.index += 1;
    }
    ClassG.index = 0;
    return ClassG;
})();
var ClaG = new ClassG();
console.log(ClassG.index);
var ClaG_1 = new ClassG();
console.log(ClassG.index);
