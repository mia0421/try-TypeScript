// ==基本型別==
var a:Number = 0;
var b:String = "aaa";
var c:boolean = false;

// ==array==
var users:string[] = ["aa","bb"];
var users2:Array<string> = ["aa","bb"];

// ==列舉==
// 預設值為數字 0開始
enum color {
    red,
    pink,
    black
};

var book:color = color.red;
console.log("列舉 ==>",book);


//== interface 屬性型==
//定義一個類別
interface user {
    name: string;
    age: number;
    gender?: boolean;
    fun?(age: number):boolean;
}
var mia:user = {
    name:"mia",
    age:28
}

function createUser(data:user){
    console.log("interface object=> ",data.name,data.age,data.gender);
}
createUser(mia);

//== interface 函數型==
// 定義function 參數與回傳值
interface searchUser {
    (userName:string , age:number) : string;
}
var searchUserFun:searchUser = function(userName:string,age:number): string{
    return "";
}

// == interface 類別型==
// 定義一種格式給class實現 , 實現之class必須有符合interface的屬性設定

//這邊定義2個屬性
interface userClass {
    name: string; // 定義一個name 型態為string
    fun(age: number):boolean; // 定一個function 與他的參數＆回傳值
}

//實現之class 必須要有相同的屬性設定
class isUser implements userClass {
    name: string;

    constructor() {
        this.name="mia";
    }
    fun(isAge: number):boolean {
        return false;
    }
    fun2(a:string,b:string):void{

    }
}

console.log("interface class => ",new isUser().name);



// == interface 擴展 ==
interface faceA {
    name:string;
}

interface faceB {

    age:number;
}

interface faceAll extends faceA,faceB {
    addr:string;
}

var face:faceAll = {
    name :"mia",
    addr :"台北",
    age : 20
};

console.log("interface 擴展 ==>",face.name,face.addr,face.age);

// ===declare===
/*
 通常用於定義外部plugh(es:jQuery)
 他會將變數型別重新定義為any
 當然也失去型別檢查的機制！

 他不會真的產生javascript
 只是在typescript不會因為識別不到
 該變數而編譯失敗
 */

declare var bb:number;

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
var arrayItem = ["a","b","c"];
for(var i of arrayItem ){
    if(i === "b"){
        break;
    }
    console.log("for of: " + i);
}

arrayItem.map((i)=>{
    if(i === "b"){
        return;
    }
    console.log("map: " + i);
});

arrayItem.forEach((i)=>{
    if(i === "b"){
        return;
    }
    console.log("forEach: " + i);
});

/*
 for..in 再跑回圈時會x會是index,如果跑一個object則會x則是屬性名稱
 */
for(var x in arrayItem ){
    console.log("for in: " + x);
}


//// === 關於 function ===

var fun:(x:string,y:string) => boolean = function(a:string, b = "bbb"):boolean {
    return a === b;
}

var fun5 = () => {};

var fun6 = (a) => a;
