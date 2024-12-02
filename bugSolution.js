function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('a and b cannot be null');
  }
  // ...
}