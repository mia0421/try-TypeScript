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

class ClassA {
    name:string;
    constructor() {
        this.name="mia";
        console.log("ClassA 初始",this.name);
    }
    fun(){
        console.log("ClassA fun");
    }
}
//// 繼承ClassA
class ClassB extends ClassA {
}

//// 雖然我們ClassB什麼都沒寫,但是因為繼承ClassA所以可以使用它的屬性及方法
var claB = new ClassB();
claB.name="mia";
claB.fun();  //// 列印出 ClassA fun

//// === 繼承 覆寫繼承的function===

class ClassA_1 {
    name:string;
    constructor() {
        this.name="mia";
        console.log("ClassA 初始",this.name);
    }
    fun(){
        console.log("ClassA fun");
    }
}
//// 繼承ClassA
class ClassB_1 extends ClassA_1 {
    ///故意在ClassB 寫一個一樣名稱的function則建立出來的實體呼叫此function時會以此為主
    fun(){
        console.log("ClassB fun");
    }
}

var claB = new ClassB_1();
claB.fun(); //// 列印出 ClassB fun

//// === 繼承 super===
/*
 當我們繼承的ClassA constructor 有設定傳入參數
 而想在ClassB的constructor中設定ClassA的初始參數就可以使用super
 */
class ClassA_2 {
    name:string;
    constructor(name) {
        this.name=name;
        console.log("ClassA 初始",this.name);
    }
    fun(){
        console.log("ClassA fun");
    }
}

class ClassB_2 extends ClassA_2 {

    constructor() {
        //// 設定ClassA的初始值
        super("mia");
    }
    funB(){
        //// 也可以透過super呼叫ClassA的方法
        super.fun();
    }
}

var claB = new ClassB_2();
console.log(claB.name); //// 印出mia
claB.funB(); /// 印出 ClassA fun


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

    public openIndex:number = 0;

    updateIndex() {
        ClassG.index +=1;
        this.openIndex +=1;
    }
}

var ClaG = new ClassG();
ClaG.updateIndex();
console.log("ClassG",ClassG.index,ClaG.openIndex);

var ClaG_1 = new ClassG();
ClaG_1.updateIndex();
console.log("ClassG",ClassG.index,ClaG.openIndex);
