# Day 05: Functions

Date: 17 November 2026

## Today I learned

- **Parameter** = the name listed in the function's parentheses when I
  *declare* it. It is a placeholder.
- **Argument** = the real value I pass when I *call* the function.
- Declare with parameters, call with arguments.
- A function that **returns** gives a value back that I can store and reuse.
- `console.log` only **prints** to the Console. It gives nothing back.
- `return` also **stops** the function immediately.
- A function with no `return` gives back `undefined`.

## Three ways to write a function

- **Declaration:** `function add(a, b) { return a + b; }`
- **Expression:** `const add = function (a, b) { return a + b; };`
- **Arrow:** `const add = (a, b) => a + b;`

All three do the same job. Arrow functions are shorter and are common in
modern code.

## Something that confused me

Why keep the sample variables when I can type arguments directly?
Answer: the functions are the machine, the variables are the data. The data
must be validated first and then passed in. On Day 6 the samples will be
replaced by the page's input fields, and the functions stay the same.

## What I can explain without help

- parameter vs argument
- why functions should return instead of print

## Bug or challenge, and how I solved it

- Balance was calculated backwards (total minus income).
- Converted numbers were inside `else { }` (block scope).
- I passed new numbers instead of my own variables.

## Tomorrow's first task

Connect my three functions to the HTML with the DOM.