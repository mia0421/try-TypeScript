module myModule {
    export class ClassTest {
        public p1: String;

        public p2: Number;

        constructor() {
            this.p1 = "p1";

            this.p2 = 1;
        }

        public getP1(): String {
            return this.p1;
        }

        public getP2(): Number {
            return this.p2;
        }
    }
}
