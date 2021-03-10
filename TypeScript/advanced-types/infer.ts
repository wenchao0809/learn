type AnyFunction = (...args: any[]) => number;
type ffsdf<T extends AnyFunction> = T extends (...args: any[]) => infer R
  ? R
  : any

  let x: ffsdf<AnyFunction>