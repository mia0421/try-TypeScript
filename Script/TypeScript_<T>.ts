





//// === 泛行<T> ===

//// 泛型function 用法
function fun2<T>(aa:T):T {
    return aa;
}
fun2<string>("aa");
fun2("aa");

//// Typescript 簡寫寫法
var fun3 = <T>(aa:T):T => {
    return aa;
}
fun3("aa");

//// 錯誤function示範
/*
 由於設定回傳值為Ｔ,但Ｔ的型別將由執行階段決定
 但此處回傳string typescript 編譯視同錯誤
 function funError1<T>():T {
 return "aa";
 }
 funError1();
 */


/*
 此處設定傳入參數a為Ｔ型別
 但在內容中console了a lenght
 由於現階段無法卻定a是否擁有lenght的屬性(直行階段也可能傳入number)
 所以這邊會報錯
 function funError2<T>(a:T):T {
 console.log(a.length);
 return a;
 }
 funError2("aa");
 */

////  泛型 interface

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


var test_function2 = ():Iface2<string,boolean> => {
    var rd :Iface2<string,boolean>  = {
        item:"aa",
        item2:false
    };
    return rd;
}


module myModule {
    export var A = "aa";
    var B = "bb";
}





