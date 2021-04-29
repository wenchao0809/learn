interface String {
    a: string;
}
declare let a: string;
declare type Test = {
    a: () => string;
};
declare let b: Test;
declare type stringandnumber = string | number;
declare let s: stringandnumber;
declare type tuple = [string, number];
declare let t: tuple;
declare type c = typeof t;
declare let d: c;
