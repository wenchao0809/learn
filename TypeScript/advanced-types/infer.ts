type AnyFunction = (...args: any[]) => number;
type ffsdf<T extends AnyFunction> = T extends (...args: any[]) => infer R
  ? R
  : any

  export let x: ffsdf<AnyFunction>

  interface Test {
    a?: string;
    b?: number
  }

  let b: Test

  let c = b?.a
  console.log(c)
