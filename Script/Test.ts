
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

//== Class ==

class MyClass {
    name:string;

    constructor(helloMess:string,name:string){
        console.log("holle message",helloMess);
        this.createUser(name)
    }

    createUser(name:string){
            this.name = name;
    }

    updateUser(){

    }
}

var isMia = new MyClass("Hi~Hi~","Mia");
console.log(isMia.name);


//// === 繼承===
//// 1. 繼承是否架構要完全相同？
////    A: 可以不用,不覆寫父的方法 當class被new出來時也可呼叫父的方法
//// 2. 覆寫父層方法又用super呼叫同方法的結果？
////    A:可以覆寫,如果又用super呼叫一樣執行父原始的方法
//// 3. 變數宣告型態練習
//// ps. 1.繼承某一class constructor 一定要寫super
class ClassTemplate {
    name:string;
    constructor(name:string){
        console.log("ClassTemplate 初始",name);
    }
    fun(){
        console.log("Class Template fun");
    }
    funTemplate(){
        console.log("Class Template funTemplate");
    }
}

class ClassA extends ClassTemplate {
    constructor(name:string){
        console.log("classA 初始",name);
        super(name);
    }
    fun(){
        console.log("覆寫 fun方法");
        //// 此class沒有name屬性但繼承之class有所以可以使用
        console.log("name 屬性",this.name);

    }
    funA(){
        console.log("classA");
    }
}

class ClassB extends ClassTemplate {
    name:string;
    constructor(name:string){
        console.log("classB 初始",name);
        super(name);
    }
    funB(){
        console.log("classB");
    };
}

var claA = new ClassA("a");
var claB = new ClassB("a");

claA.name="ClaA";
claA.fun();
claB.fun();

//// === private===
class ClassC {
    private name:string;
    constructor(){

    }
}

//new ClassC().name //// 會error

//// === Protected ===

class ClassD {

    protected name:string;

    constructor(name){
        this.name=name;
    }
}

class classF extends ClassD {
    constructor(){
        super("is name");
        console.log("被設置為Protected的屬性",this.name);

    }
}
new classF();

//// === 關於Static ===

class ClassG {
    static index:number = 0;

    constructor(){
        ClassG.index+=1;
    }
}

var ClaG = new ClassG();
console.log(ClassG.index);
var ClaG_1 = new ClassG();
console.log(ClassG.index);


//// === 關於 function ===

var fun:(x:string,y:string) => boolean = function(a:string, b = "bbb"):boolean {
    return a === b;
}

var fun5 = () => {};

var fun6 = (a) => a;


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
