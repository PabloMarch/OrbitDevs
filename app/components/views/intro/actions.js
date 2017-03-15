export const SAY_HELLO = 'SAY_HELLO';

export function sayHello (text) {
  return {
    type: SAY_HELLO,
    text
  }
}
