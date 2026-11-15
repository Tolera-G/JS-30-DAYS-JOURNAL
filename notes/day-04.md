# Day 04: Making decisions

Date: 15 November 2026

## Today I learned

### 1. if / else if / else
- `if` runs a block when its condition is true.
- `else if` adds more conditions. JavaScript checks from top to bottom and **stops at the first true one**, so order matters.
- `else` has no condition. It runs when nothing above matched.

```javascript
if (score >= 90) {
  result = "A";
} else if (score >= 80) {
  result = "B";
} else {
  result = "F";
}
```

### 2. The ternary operator `? :`
- Three parts: `condition ? valueIfTrue : valueIfFalse`
- It is an **expression**, so it produces a value.
- Use it for a simple two-way choice. Use `if / else if` for many conditions.

```javascript
const label = score >= 60 ? "Pass" : "Fail";
```

### 3. Logical operators
| Operator | Meaning | Returns |
| --- | --- | --- |
| `&&` | AND | the first **falsy** value, or the last value if all are truthy |
| `\|\|` | OR | the first **truthy** value, or the last value if all are falsy |
| `!` | NOT | the opposite boolean |

### 4. Falsy values (memorize)
`0`, `""`, `null`, `undefined`, `NaN`, `false`
Everything else is truthy, including `"0"`, `" "` and `[]`.

## Key traps
- `Number("")` is `0`, **not** `NaN`. Check for empty input *before* converting.
- `Number(" ")` is also `0`. Use `.trim()` first.
- `Number("abc")` is `NaN`. Check with `Number.isNaN()`.
- Use `===`, not `==`.
- A variable created with `const` or `let` exists only inside its `{ }` (block scope).

## What I can explain without help
- (fill in honestly)

## Bug or challenge, and how I solved it
- Bug: `ReferenceError: remainingBalance is not defined`
- Cause: the variable was declared inside the `else { }` block but used outside it.
- Fix: do the status check inside the same block.

## Something that confused me
- adding the status logic confused me 

## Tomorrow's first task
- Day 5: move this logic into functions that **return** values. 