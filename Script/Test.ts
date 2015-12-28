
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
