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
