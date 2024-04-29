const isBalancedB = require('../challenge2'); 


describe('isBalancedB function', () => {
  test('Balanced brackets: "[()]{}{[()()]()}"', () => {
    expect(isBalancedB("[()]{}{[()()]()}")).toBe(true);
  });

  test('Balanced brackets: "([{}])"', () => {
    expect(isBalancedB("([{}])")).toBe(true);
  });

  test('Unbalanced brackets: "{(})[]"', () => {
    expect(isBalancedB("{(})[]")).toBe(false);
  });

  test('Unbalanced brackets: "[(])"', () => {
    expect(isBalancedB("[(])")).toBe(false);
  });

  test('Unbalanced brackets: "[()"', () => {
    expect(isBalancedB("[()")).toBe(false);
  });
});
