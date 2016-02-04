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
