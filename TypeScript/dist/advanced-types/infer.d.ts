declare type AnyFunction = (...args: any[]) => number;
declare type ffsdf<T extends AnyFunction> = T extends (...args: any[]) => infer R ? R : any;
export declare let x: ffsdf<AnyFunction>;
export {};
