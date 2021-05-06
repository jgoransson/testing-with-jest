const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//vi testar så att vi kan poppa stacken om den har två element
test('peek on stack with two elements, pop top element', () => {
  stack.push("Jonathan")
  stack.push("Göransson")
  stack.pop("Göransson")
  expect(stack.peek()).toBe("Jonathan")
});
