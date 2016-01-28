var myModule;
(function (myModule) {
    var ClassTest = (function () {
        function ClassTest() {
            this.p1 = "p1";
            this.p2 = 1;
        }
        ClassTest.prototype.getP1 = function () {
            return this.p1;
        };
        ClassTest.prototype.getP2 = function () {
            return this.p2;
        };
        return ClassTest;
    })();
    myModule.ClassTest = ClassTest;
})(myModule || (myModule = {}));
