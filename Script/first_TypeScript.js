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
